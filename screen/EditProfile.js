import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { BackgroundClr, H, W } from './constant/Common';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import Input from './components/Input';
import Header from './components/Header';
import Button from './components/Button';

const EditProfile = (props) => {
    const [userData, setUserData] = useState();
    const [img, setImg] = useState();
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {getProfile()},[])

    const imagePicker = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log('Image', image);
          setImg(image.path);
        //   uploadImage(image.path);
        });
    }

    const getProfile = () => {
    AsyncStorage.getItem('UserData', (error, Data) => {
        if(!error && Data){
        let getData = JSON.parse(Data);
        let body = {
            email:getData?.user?.email,
        }
        console.log('request Send',body);
        fetch('https://zoahmusicbackend.onrender.com/api/getprofile', {
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
            setUserData(res);
            setfName(res?.firstName);
            setlName(res?.lastName);
            setEmail(res?.email);
        })
        .catch(error => {
            setLoading(false);
            console.log('Error', error);
        });
        }
    });
    }

    const uploadImage = () => {
        setLoading(true);
        console.log('request Send');
        let formdata = new FormData();
        if(img){
            formdata.append('file', {
                type: 'image/jpg',
                uri: img,
                name: 'image.jpg',
            });
        }
        formdata.append('email', email);
        formdata.append('firstName', fName);
        formdata.append('lastName', lName);
        fetch('https://zoahmusicbackend.onrender.com/api/editprofile', {
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
            getProfile();
            alert('User Updated Successfully')
            })
            .catch(error => {
            // alert(`Error Occured : ${error}`);
            setLoading(false);
            console.log('Error', error);
            });
      };

    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <Header onBackPress={() => props.navigation.navigate('BottomTabNavigator')} />
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <TouchableOpacity onPress={() => {imagePicker()}}>
                {img? (
                <Image source={{uri:img}}
                    style={{ width: 80, height: 80, borderRadius: 40, borderColor:'#FFD497', borderWidth:H(0.2), marginTop:H(3)}}
                />
                ):
                <>
                {userData?.profilePicture ? (
                <Image source={{uri:userData?.profilePicture}}
                    style={{ width: 80, height: 80, borderRadius: 40, borderColor:'#FFD497', borderWidth:H(0.2), marginTop:H(3)}}
                />
                ):
                <Image source={require('./assests/logo.png')}
                    style={{ width: 80, height: 80, borderRadius: 40,resizeMode:'contain', borderColor:'#FFD497', borderWidth:H(0.2), marginTop:H(3)}}
                />}
                </>}
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:W(38)}}>
                    <Text style={{ color: 'white', marginBottom: H(1), marginTop: H(1) }}>First Name</Text>
                    <Input value={fName} onChangeText={(fName) => setfName(fName)} placeholdertxt="Enter First Name" width={W(38)} />
                    </View>
                    <View style={{width:W(39),marginLeft:H(1)}}>
                    <Text style={{ color: 'white', marginBottom: H(1), marginTop: H(1) }}>Last Name</Text>
                    <Input value={lName} onChangeText={(lName) => setlName(lName)} placeholdertxt="Enter Last name" width={W(38)}  />
                    </View>
                </View>

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(2) }}>Email</Text>
            <Input editable={false} value={email} placeholdertxt="Enter your email" />
            <View style={{height:H(4)}} />
            {loading ? (
            <ActivityIndicator size={'large'} color={'#fff'} />
            ):<Button onPressButton={() => {uploadImage()}} alignSelf='center' txt='Submit' />}
        </View>
    );
};

export default EditProfile;