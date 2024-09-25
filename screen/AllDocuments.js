import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { BackgroundClr, H, W } from "./constant/Common";
import Header from "./components/Header";
import Pdf from 'react-native-pdf';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Feather from 'react-native-vector-icons/dist/Feather';
import ReactNativeBlobUtil from 'react-native-blob-util'
import Share from 'react-native-share';

const AllDocuments = (props) => {
    const [data, setData] = useState([]);
    const [pdfView, setpdfView] = useState();
    const [showPDF, setshowPDF] = useState(false);

    useEffect(() => {getAllDoc(getAllDoc)},[]);

    const getAllDoc = () => {
        fetch('https://zoahmusicbackend.onrender.com/api/getalldocuments', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(res => {
            console.log('All Doc Response', res);
            setData(res?.data)
        })
        .catch(error => {
            setLoading(false);
            console.log('Error', error);
        });
    }

    const downloadFile = () => {
        let dirs = ReactNativeBlobUtil.fs.dirs;
        ReactNativeBlobUtil.config({
          fileCache: true,
          appendExt: 'pdf',
          path: `${dirs.DocumentDir}/${pdfView?.name} ${pdfView.title}.pdf`,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            title: pdfView.title,
            description: 'File downloaded by admin.',
            mime: 'application/pdf',
          },
        })
          .fetch('GET', pdfView.pdf)
          .then((res) => {
            // in iOS, we want to save our files by opening up the saveToFiles bottom sheet action.
            // whereas in android, the download manager is handling the download for us.
            if (Platform.OS === 'ios') {
              const filePath = res.path();
              console.log('FILE Save at ',filePath);
              let options = {
                type: 'application/pdf',
                url: filePath,
                // saveToFiles: true,
              };
              Share.open(options)
                .then((resp) => console.log(resp))
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => console.log('BLOB ERROR -> ', err));
      };

    return(
        <View style={{
            flex:1,
            backgroundColor:BackgroundClr
        }}>
            <Header title={'All Documents'} onBackPress={() => props.navigation.navigate('BottomTabNavigator')} />
            {data?.map((item,i) => {
                return(
                    <View key={i} style={{
                        width:W(92),
                        backgroundColor:'#1c1c1c',
                        alignSelf:'center',
                        borderRadius:H(1),
                        marginTop:H(1.5)
                    }}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            padding:H(1)
                        }}>
                            {item?.profilePicture ? (
                                <Image source={{uri:item?.profilePicture}} style={{height:44,width:44,borderRadius:44/2}}/>
                            ):
                                <Image source={require('./assests/logo.png')}
                                style={{ width: 44, height: 44, borderRadius: 44/2,resizeMode:'contain', borderColor:'#FFD497', borderWidth:H(0.2)}}
                            />}
                            <View>
                            <Text style={{color:'#fff',fontSize:18,fontWeight:'600',marginLeft:H(1)}}>{item?.name}</Text>
                            <Text style={{color:'#C3C3C3',fontSize:13,marginLeft:H(1)}}>{item?.email}</Text>
                            </View>
                        </View>
                        {item?.data?.map((res,ind) => {
                            return(
                                <TouchableOpacity
                                key={ind}
                                onPress={() => {
                                    res.name = item.name;
                                    res.profilePicture = item.profilePicture;
                                    setpdfView(res);
                                    setshowPDF(true);
                                }}
                                style={{
                                    height:H(5.5),
                                    width:W(86),
                                    alignSelf:'center',
                                    backgroundColor:BackgroundClr,
                                    borderRadius:H(1),
                                    marginBottom:H(1),
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    <Text style={{color:'#fff'}}>{res?.title}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                )
            })}
            <Modal visible={showPDF} animationType={'fade'} transparent={true}>
                <View style={{
                    flex:1,
                    backgroundColor:'#0004',
                    justifyContent:'center',
                }}>
                <View style={{ height:H(78), width:W(90), padding:H(1), borderWidth:H(.1), borderColor:'#1c1c1c', borderRadius:H(1), alignSelf:'center', backgroundColor: BackgroundClr }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:H(1),
                    marginLeft:H(1)
                }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                {pdfView?.profilePicture ? (
                    <Image source={{uri:pdfView?.profilePicture}} style={{height:44,width:44,borderRadius:44/2}}/>
                ):
                    <Image source={require('./assests/logo.png')}
                    style={{ width: 44, height: 44, borderRadius: 44/2,resizeMode:'contain', borderColor:'#FFD497', borderWidth:H(0.2)}}
                />}
                <View style={{marginLeft:H(1)}}>
                <Text style={{color:'#fff',fontSize:18,fontWeight:'600'}}>{pdfView?.name}</Text>
                <Text style={{color:'#C1C1C1',fontSize:13}}>{pdfView?.email}</Text>
                </View>
                </View>
                <View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={() => {downloadFile()}} style={{alignSelf:'flex-end', marginRight:H(2),marginBottom:H(2)}}>
                    <Feather name={'share'} size={20} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setshowPDF(false)}} style={{alignSelf:'flex-end', marginRight:H(1),marginBottom:H(2)}}>
                    <Entypo name={'cross'} size={24} color={'#fff'} />
                </TouchableOpacity>
                </View>
                </View>
                <Text style={{color:'#fff',alignSelf:'center',fontSize:16,marginTop:H(1),fontWeight:'600'}}>{pdfView?.title}</Text>
                {pdfView ? (
                <Pdf
                    style={{height:H(66), width:W(85),backgroundColor:BackgroundClr}}
                    onError={console.error}
                    fitWidth={true}
                    source={{
                        uri:pdfView?.pdf
                    }}
                />
                ):null}
                </View>
                </View>
            </Modal>
        </View>
    )
}

export default AllDocuments;