import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator, Modal, Image } from "react-native";
import { BackgroundClr, H, W } from "./constant/Common";
import Header from "./components/Header";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { captureRef } from "react-native-view-shot";
import { createPdf } from 'react-native-images-to-pdf';
import RNBlobUtil from 'react-native-blob-util';
import Pdf from 'react-native-pdf';
import AsyncStorage from "@react-native-community/async-storage";
import Signature from "react-native-signature-canvas";
import Button from "./components/Button";

const AgreementNewLetter = (props) => {
    const [disable, setDisable] = useState(true)
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const ViewRef = useRef();
    const ref = useRef();
    const [loading, setLoading] = useState(false);
    const [captureImage, setcaptureImage] = useState();
    const [pdfView, setPDFView] = useState();
    const [showsignature, setShowSignature] = useState(false);
    const [scroll, setScroll] = useState(true);
    const [showSuccess, setShowSucces] = useState(false);

    useEffect(() => {console.log('DATA',props?.route?.params?.data)},[]);

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
                    { imagePath: Platform.OS === 'ios' ? 'file:///'+ uri :+ uri }
                    // { imagePath: uri }
                ],
                outputPath: `file://${RNBlobUtil.fs.dirs.DocumentDir}/file.pdf`,
            };
            console.log('OPT',options);
            createPdf(options)
                .then((path) => {
                    console.log(`PDF created successfully: ${ "file:/" + path.split("file:/").join("")}`)
                    let newPath = Platform.OS === 'ios' ? "file:/" + path.split("file:/").join(""):"file://" + path.split("file:/").join("");
                    console.log('PATH',newPath);
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
        formdata.append('title', 'Letter of Direction');
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
            // setLoading(false);
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
                setShowSucces(true);
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

            <View style={{alignItems:'center'}}><Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(4)}} >Letter of Direction</Text></View>

            <ScrollView scrollEnabled={scroll} style={{ marginRight: W(3), padding: 5, }} showsVerticalScrollIndicator={false}>
            <View ref={ViewRef} style={{backgroundColor:BackgroundClr}} collapsable={false}>
                <View style={{ height: H(5), flexDirection: 'row', alignSelf: 'center', marginTop: H(5) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>As of</Text>
                    <TextInput
                        editable={false}
                        value={new Date().toLocaleDateString()}
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 28,
                            paddingBottom:-10,
                            marginLeft: 10,
                            width: W(19),
                            color:'#fff',
                            marginTop:-8
                        }}
                    />
                </View>

                <View style={{alignSelf:'center', paddingLeft:W(10),paddingRight:W(5)}} >
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>TO:{' '}MG, Warner Music, Sony Records, MRI, HFA, Spotify, Apple Music, Amazon,</Text> 
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>You Tube, You Tube Music, and all others requiring a license to Reproduce,</Text>
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>Distribute, Publicly Perform, Digitally Transmit,Publicly Display any/or</Text>
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>create Derivatives as defined 17 U.S.C. 106–Exclusive Rights in Copyrighted</Text>
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>Works of ZOAH MUSIC HOUSE PUBLISHIG and or ZMH Publishing exclusively</Text>
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>controlled Musical Compositions</Text>
                </View>

                <Text style={{color:'white', marginBottom:H(1), padding:H(0.5), marginLeft:W(3), marginTop:H(4)}}>RE: Letter of Direction</Text>
                <Text style={{color:'white', marginBottom:H(1), padding:H(0.5), marginLeft:W(3)}}>To Whom It May Concern:</Text>

                <View style={{ padding: H(0.7) }}>
                    <Text style={{ fontSize: H(2), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3)}}>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        The undersigned and all of their publishing entities have assigned to ZOAH MUSIC HOUSEPUBLISHING and ZMH PUBLISHING (Zoah Music Group) the exclusive rights of licensing andadministration, including , without limitation, the exclusive right to license and administer the rights ofreproduction, distribution, public performance (the non–exclusive right only to public performance whenapplicable) and public display and (collect resulting income) in the share of the musical compositionsidentified on the provided and/or attached Schedule A (collectively, the“Works” )annexed hereto andmade a part of hereof, including, any other versions, covers or derivative works thereof, via the followingforms of media throughout the territory of the world
                        </Text>
                    </Text>
                </View>




                <Text style={{ fontSize: H(2), marginLeft: W(5), marginTop: H(3) }}>
                    <Text style={{ color: 'rgba(255, 255, 255, 1)' }}>ZOAH MUSIC GROUP LLC</Text>
                </Text>

                
                <View style={{ height: H(5), flexDirection: 'row', alignSelf: 'center', marginTop: H(2) }}>
                    <TextInput
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 22,
                            marginLeft: 10,
                            width: W(85),
                            color: 'rgba(255, 255, 255, 1)', // Set text color to 100% white,
                        }}
                    />
                </View>
                <Text style={{color:"#fff",alignSelf:'center',marginTop:-15,marginBottom:22}}>FULL NAME</Text>


                <View style={{ flexDirection: 'row', width: H(40), alignSelf: 'stretch' }}>
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

                
                <View style={{ height: H(4), flexDirection: 'row', alignSelf: 'center'  }}/>

                <View style={{ height: H(5), flexDirection: 'row', alignItems:'center', marginTop: H(1), marginLeft: W(5) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Date</Text>
                    <TextInput
                    editable={false}
                    value={new Date().toLocaleDateString()}
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 28,
                            paddingBottom:-10,
                            marginLeft: 10,
                            width: W(20),
                            color: 'rgba(255, 255, 255, 1)', // Set text color to 100% white,
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


                        <TouchableOpacity style={{
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
                    {loading ? (<ActivityIndicator size={'large'} color={'#fff'} />):
                    <TouchableOpacity onPress={()=> {captureView()}} style={{
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
            <Modal visible={showSuccess} animationType={'fade'} transparent={true}>
            <View style={{
                flex:1,
                backgroundColor:'#0004',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <View style={{
                    height:H(40),
                    width:W(88),
                    backgroundColor:BackgroundClr,
                    borderWidth:H(.1),
                    borderColor:'#fff',
                    borderRadius:H(1),
                }}>
                    <Image
                    style={{
                        width: W(44),
                        height: H(15),
                        resizeMode: 'contain',
                        alignSelf:'center'
                    }}
                    source={require('./assests/logo.png')}/>
                    <Text style={{color:'#fff',paddingLeft:H(3),paddingRight:H(3),textAlign:'justify'}}>Thank You for signing the two documents. Please check your email for the next steps. If you don't see an email from Zoah Music Group, Kindly check your spam or junk folder.</Text>
                    <Text style={{color:'#fff',paddingLeft:H(3),paddingRight:H(3),marginTop:H(2)}}>Best Regrads</Text>
                    <Text style={{color:'#fff',paddingLeft:H(3),paddingRight:H(3),marginBottom:H(3)}}>Zoah Music Group</Text>
                    <Button onPressButton={() => {
                        setShowSucces(false);
                        props?.navigation?.goBack();
                    }} alignSelf='center' txt='Close' />
                </View>
            </View>
           </Modal>

        </View>
    )
}
export default AgreementNewLetter