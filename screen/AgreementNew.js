import React, { useCallback, useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, Modal, Platform, ActivityIndicator } from "react-native";
import { BackgroundClr, H, W } from "./constant/Common";
import Header from "./components/Header";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import Signature from "react-native-signature-canvas";
import { captureRef } from "react-native-view-shot";
import { createPdf } from 'react-native-images-to-pdf';
import RNBlobUtil from 'react-native-blob-util';
import Pdf from 'react-native-pdf';
import AsyncStorage from "@react-native-community/async-storage";

const AgreementNew = (props) => {
    const [disable, setDisable] = useState(true)
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const [scroll, setScroll] = useState(true);
    const ViewRef = useRef();
    const [captureImage, setcaptureImage] = useState();
    const [loading, setLoading] = useState(false);
    const [pdfView, setPDFView] = useState();
    const [showsignature, setShowSignature] = useState(false);

    // download image
    const captureView = async () => {
        try {
            // react-native-view-shot caputures component
            const uri = await captureRef(ViewRef, {
                format: 'png',
                quality: 0.9,
            });
            console.log('URI',uri);
            // setcaptureImage(uri);
            setLoading(true);
            const options = {
                pages: [
                //   { imagePath: Platform.OS === 'ios' ? 'file:///'+ uri :+ uri }
                { imagePath: uri }
                ],
                outputPath: `file://${RNBlobUtil.fs.dirs.DocumentDir}/file.pdf`,
            };
            createPdf(options)
                .then((path) => {
                    console.log(`PDF created successfully: ${ "file:/" + path.split("file:/").join("")}`)
                    setPDFView("file:///" + path.split("file:/").join(""));
                    let newPath = Platform.OS === 'ios' ? "file:/" + path.split("file:/").join(""):"file:///" + path.split("file:/").join("");
                    uploadDocument(newPath);
                })
                .catch((error) => {
                    console.log(`Failed to create PDF: ${error}`)
                    setLoading(false);
                });
        } catch (error) {
            console.log('error', error);
            setLoading(false);
        }
    };

    const uploadDocument = (path) => {
        AsyncStorage.getItem('UserData', (error, Data) => {
        if(!error && Data){
        let getData = JSON.parse(Data);    
        console.log('request Send',path);
        let formdata = new FormData();
        formdata.append('file', {
            uri: path,
            type: 'application/pdf',
            name: 'upload.pdf',
        });    
        formdata.append('title', 'ADMINISTRATIVE PUBLISHING AGREEMENT');
        formdata.append('email', getData?.user?.email);
        formdata.append('status', 'Done');
        fetch('https://zoahmusicbackend.onrender.com/api/submit_doc', {
            method: 'POST',
            body: formdata,
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => response.json())
            .then(response => {
            console.log('PDF Response', response);
            if(props?.route?.params?.data?.length === 1){
                sendEmail();
            } else {
                setLoading(false);
                props?.navigation?.goBack();
            }
            })
            .catch(error => {
            // alert(`Error Occured : ${error}`);
            console.log('Error', error);
            setLoading(false);
            });
        }
        });
      };

    const sendEmail = () => {
        AsyncStorage.getItem('UserData', (error, Data) => {
            if(!error && Data){
            let getData = JSON.parse(Data);
            let body = {
                email:getData?.user?.email,
            }
            console.log('request Send',body);
            fetch('https://zoahmusicbackend.onrender.com/api/sendemail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            })
            .then(response => response.json())
            .then(res => {
                console.log('Login Response', res);
                setLoading(false);
                props?.navigation?.goBack();
            })
            .catch(error => {
                setLoading(false);
                console.log('Error', error);
            });
            }
        });
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <Header onBackPress={() => props.navigation.navigate('BottomTabNavigator')} />
            {/* {captureImage ? (
            <Image source={{uri:captureImage}} style={{height:400,width:'100%',resizeMode:'contain',backgroundColor:'#fff'}}/>
            ):null} */}
            {/* {pdfView ? (
            <View style={{ height:400, backgroundColor: 'white' }}>
                <Pdf
                style={{ height:400 }}
                onError={console.error}
                source={{
                    uri:pdfView
                }}
                />
            </View>
            ):null} */}

            <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(4) }} >ADMINISTRATIVE PUBLISHING AGREEMENT</Text>
            <ScrollView scrollEnabled={scroll} style={{ marginRight: W(3), padding: 5 }} showsVerticalScrollIndicator={false}>
            <View ref={ViewRef} style={{backgroundColor:BackgroundClr}} collapsable={false}>

                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(2) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>ADMINISTRATION AGREEMENT</Text>
                </Text>

                <View style={{ padding: H(0.7) }}>
                    <Text style={{ fontSize: H(2), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3), marginTop: H(2) }}>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>ZOAH MUSIC GROUP serves as the parent company for ZOAH MUSIC HOUSE PUBLISHING, an affiliate of (ASCAP),
                            and ZMH Publishing, an affiliate of (BMI). Both companies are in the business of music publishing,
                            and both companies are signed to an administrator publisher for the purpose of collecting royalties
                            for any and all works assigned to the ZOAH MUSIC HOUSE or ZMH Publishing catalogs. By virtue of this
                            general AGREEMENT, ZOAH MUSIC GROUP hereby offers the services of ADMINISTRATIVE PUBLISHER to the
                            below-named individual/company for the expressed purpose of:</Text>
                    </Text>
                </View>


            <View style={{ fontSize: H(2), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3), marginTop: H(2), padding: H(0.7) }}>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>i.</Text> Placing your song(s) under the Zoah Music Group catalog
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>ii.</Text> Inputting your song(s) metadata into our database for correct splits and ownership information, to ensure that all future distributions are accurate.
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>iii.</Text> Acting in a legal capacity as your Administrative Publisher in that capacity, ZOAH MUSIC GROUP shall represent the publishing needs of the individual/company named below as it pertains to the song(s) listed on the attached SONG REGISTRATION form.
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>iv.</Text> Individual/Company named below shall have the legal right to assign all works to this AGREEMENT by either owning or controlling all or a portion of the Copyright, by owning or controlling all or a portion of the publishing, or by being a legal representative of one who owns and or controls a portion of the Copyright or Publishing.
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>v.</Text> Individual/Company may be only a composer, author, or both of the work(s), this gives the Individual/Company the legal right to assign work(s) to ZOAH MUSIC GROUP.
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>vi.</Text> When assigning work(s) to ZOAH MUSIC GROUP you hereby grant to ZOAH MUSIC GROUP the right to collect and distribute royalties on your behalf in consideration for a 20% payment on all gross royalties collected via ZOAH MUSIC GROUP on behalf of Individual/Company named below.
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>vii.</Text> Understanding that ZOAH MUSIC GROUP receives royalties every quarter around the 15th of February, May, August, and November, from its administrators (Blue Water and Word Collections) music publishers, ZOAH MUSIC GROUP will payout to its members on the 20th of February, May, August, and November.
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>viii.</Text> Royalties will be paid in the form of ACH or Check based on your preference.
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>ix.</Text> The term of this contract shall be up and until you end it, understanding that when you officially inform ZOAH MUSIC GROUP in writing that you wish to end this contract/AGREEMENT, it will be legally concluded 45 days after receipt of such. Up until the 45 day mark, ZOAH MUSIC GROUP will continue to collect and serve as ADMINISTRATIVE PUBLISHER as we close out your metadata.
                </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>x.</Text> Individual/Company may at any time resume the services of ZOAH MUSIC GROUP after a sixty-day period has passed from the time of any AGREEMENT ending.
                </Text>
            </View>



                <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(2), fontWeight: 'bold' }}>
                    SIGNATURE
                </Text>



                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ color: 'rgba(255, 255, 255, 1)' }}>
                        This AGREEMENT is governed by the laws of the state of Georgia, and all breaches of contract shall be mediated in the state of Georgia</Text>
                </Text>

                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: H(3), marginLeft: W(3) }}>I accept and agree to all statements made herein.</Text>
                <View style={{ flexDirection: 'row', width: H(40), marginTop: H(2), alignSelf: 'stretch' }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: W(3) }}>Signature:</Text>
                {captureImage && showsignature === false ? (
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    height: 66,
                    flex: 1,
                    marginLeft: 10,
                    paddingLeft: 10,
                    justifyContent:'center'
                }}>
                    <Image source={{uri:captureImage}} style={{height:66,width:'100%',resizeMode:'center'}}/> 
                </View>
                ):
                <TouchableOpacity onPress={() => {setShowSignature(true)}} style={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    height: 66,
                    flex: 1,
                    marginLeft: 10,
                    paddingLeft: 10,
                    justifyContent:'center'
                }}>
                </TouchableOpacity>}
                </View>
                <View>

            <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(1) }}>
                <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>ZOAH MUSIC HOUSE PUBLISHING</Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Date </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 1)' }} onPress={() => setOpen(true)}>
                    {date.toLocaleDateString()}
                </Text>
            </Text>

            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(selectedDate) => {
                    setOpen(false);
                    setDate(selectedDate);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </View>
        </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#000',
                    padding: 10,
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        {
                            disable ? <TouchableOpacity style={{
                                backgroundColor: '#553A00',
                                borderRadius: H(2.5),
                                height: H(4),
                                padding: 10,
                                marginHorizontal: 10,
                            }}>
                                <Icon name="arrow-bold-left" size={15} color="black" />
                            </TouchableOpacity> : <TouchableOpacity style={{
                                backgroundColor: '#FFD497',
                                borderRadius: H(2.5),
                                height: H(5),
                                padding: 10,
                                marginHorizontal: 10,
                            }}>
                                <Icon name="arrow-bold-left" size={15} color="black" />
                            </TouchableOpacity>
                        }


                        <TouchableOpacity onPress={()=>props.navigation.navigate('AgreementNewLetter')} style={{
                            backgroundColor: '#FFD497',
                            borderRadius: H(2.5),
                            height: H(4),
                            padding: 10,
                            marginHorizontal: 4,
                        }}>
                            <Icon name="arrow-bold-right" size={15} color="black" />

                        </TouchableOpacity>

                    </View>


                    <View>
                        {loading ? (
                        <ActivityIndicator size={'large'} color={'#fff'} style={{marginRight:H(3)}} />
                        ):
                        <TouchableOpacity 
                        onPress={() => {
                            if(!captureImage){
                                alert('Please Sign the Document')
                            } else {
                                captureView();
                            }
                        }}
                        style={{
                            backgroundColor: '#FFD497',
                            borderRadius: 50,
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            marginHorizontal: 10,
                            marginLeft: W(10),
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Icon1 name="checkmark-circle-sharp" size={15} color="black" />
                            <Text style={{
                                color: '#000',
                                fontSize: 16,
                                fontWeight: 'bold',
                                marginLeft: W(1)
                            }}>Finish</Text>
                        </TouchableOpacity>}
                    </View>
                </View>
        </ScrollView>

        <Modal 
        visible={showsignature}
        animationType={'fade'}
        transparent={true}>
            <View style={{
                flex:1,
                backgroundColor:'#0005',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <View style={{
                    height:360,
                    width:W(88),
                    alignItems:'center',
                    // backgroundColor:'#fff',
                    borderRadius:H(1),
                    justifyContent:'center',
                }}>
                <Signature
                    style={{
                        borderRadius: 10,
                        flex:1,
                        height: 360,
                        overflow:'hidden',
                    }}
                    ref={ref}
                    onEnd={() => {
                        ref.current.readSignature();
                        setScroll(true);
                    }}
                    onBegin={() => {setScroll(false)}}
                    onOK={(signature)=> {
                        console.log(signature);
                        setcaptureImage(signature);
                    }}
                    onEmpty={() => {console.log("Empty");}}
                    onClear={() => {console.log("clear success!");}}
                    onGetData={() => {setShowSignature(false)}}
                    autoClear={false}
                    descriptionText=""
                    // clear button text
                    clearText="Clear"
                    // save button text
                    confirmText="Save"
                    // String, webview style for overwrite default style, all style: https://github.com/YanYuanFE/react-native-signature-canvas/blob/master/h5/css/signature-pad.css
                    webStyle={`.m-signature-pad--footer
                      .button {
                        background-color: '#FFD497';
                        color: #FFF;
                      }`}
                    />
                </View>
            </View>
        </Modal>
        </View>
    )
}
export default AgreementNew;