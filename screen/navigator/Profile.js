import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { BackgroundClr, H } from '../constant/Common';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-crop-picker';

const Profile = (props) => {
    const [profile, setProfile]=useState('Tyler Mason')
    const [email, setEmail]=useState('tylermason309@gmail.com')
    const menuItems = [
        { title: 'Edit Profile', onPress: () => {props?.navigation?.navigate('EditProfile')}},
        { title: 'Delete Profile', onPress: () => {deleteProfile()} },
        { title: 'Signout', onPress: () => {logOut()} },
    ];
    const [userData, setUserData] = useState();
    const [img, setImg] = useState();

    useEffect(() => {
        const willFocusSubscription = props?.navigation.addListener('focus', () => {
            getProfile();
        });
        return willFocusSubscription;
    },[]);

    const imagePicker = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log('Image', image);
          setImg(image.path);
          uploadImage(image.path)
        });
    }

    const logOut = () => {
        AsyncStorage.removeItem('UserData', (error, Data) => {
            props?.navigation?.replace('LandingPage');
        });
    }

    const deleteProfile = () => {
        AsyncStorage.getItem('UserData', (error, Data) => {
            if(!error && Data){
            let getData = JSON.parse(Data);
            let body = {
                email:getData?.user?.email,
            }
            console.log('request Send',body);
            fetch('https://zoahmusicbackend.onrender.com/api/deleteuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            })
            .then(response => response.json())
            .then(res => {
                console.log('Login Response', res);
                logOut();
            })
            .catch(error => {
                // setLoading(false);
                console.log('Error', error);
            });
            }
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
            setUserData(res);
        })
        .catch(error => {
            // setLoading(false);
            console.log('Error', error);
        });
        }
    });
    }

    const uploadImage = (imageURL) => {
        console.log('request Send',);
        let formdata = new FormData();
        formdata.append('file', {
            type: 'image/jpg',
            uri: imageURL,
            name: 'image.jpg',
        });    
        formdata.append('email', userData?.email);
        formdata.append('firstName', userData?.firstName);
        formdata.append('lastName', userData?.lastName);
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
            getProfile()
            })
            .catch(error => {
            // alert(`Error Occured : ${error}`);
            console.log('Error', error);
            });
      };

    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
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
                <Image source={require('../assests/logo.png')}
                    style={{ width: 80, height: 80, borderRadius: 40,resizeMode:'contain', borderColor:'#FFD497', borderWidth:H(0.2), marginTop:H(3)}}
                />}
                </>}
                </TouchableOpacity>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, color: 'white' }}> {userData?.firstName} {userData?.lastName} </Text>
                <Text style={{ fontSize: 14, color: 'white', marginBottom: 10 }}>{userData?.email}</Text>
            </View>

            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#E5E5E5',
                            paddingHorizontal: 20,
                        }}
                        onPress={item.onPress}
                    >
                        <Text style={{ fontSize: 16, color: 'white' }}>{item.title}</Text>
                        <Text style={{ fontSize: 18, color: 'white' }}>›</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Profile;
