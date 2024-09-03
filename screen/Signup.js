import React, { useState } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import { H, W, BackgroundClr } from './constant/Common';
import Header from "./components/Header";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Input from "./components/Input";
import Button from "./components/Button";
import AsyncStorage from "@react-native-community/async-storage";
var validator = require("email-validator");
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Signup = (props) => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    const [loading, setLoading] = useState(false);

    const validation = () => {
        const valid = validator.validate(email); // true
        if(fName === '' || lName === '' || email === '' || password === '' || confirmPass === ''){
            alert("Please Fill All Data")
        } else if(!valid){
            alert("Please Enter Correct Email")
        } else if(password !== confirmPass){
            alert("Password and ConfirmPassword must match")
        } else {
            signupAPI();
        }
    }

    const signupAPI = () => {
        setLoading(true);
        let body = {
            firstName:fName,
            lastName:lName,
            email:email,
            password:password
        }
        console.log('request Send');
        fetch('https://zoahmusicbackend.onrender.com/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(res => {
            console.log('SignUp Response', res);
            if(res?.message === 'User already registered'){
                alert(res?.message);
                setLoading(false);
            } else if (res.error) {
                alert(res.error);
                setLoading(false);
            } else {
                setTimeout(() => {
                    loginAPI();                    
                }, 2000);
                // AsyncStorage.setItem('UserData', JSON.stringify(res), () => {
                //     props.navigation.replace('BottomTabNavigator',{screen:'Document'});
                // });
            }
        })
        .catch(error => {
            setLoading(false);
            console.log('Error', error);
        });
    }

    const loginAPI = () => {
        setLoading(true);
        let body = {
            email:email,
            password:password
        }
        console.log('request Send',body);
        fetch('https://zoahmusicbackend.onrender.com/api/signin', {
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
            if(res?.message === 'User does not exist..!'){
                alert(res?.message);
            } else {;
                AsyncStorage.setItem('UserData', JSON.stringify(res), () => {
                    props.navigation.replace('BottomTabNavigator',{screen:'Document'});
                });
            }
        })
        .catch(error => {
            setLoading(false);
            console.log('Error', error);
        });        
    }

    return (
        <KeyboardAwareScrollView style={{ flex: 1, flexGrow:1, backgroundColor: BackgroundClr }}>

            <Header onBackPress={() => props.navigation.navigate('LandingPage')} />

            <View style={{ height: H(5), alignSelf: 'center', marginRight: W(3) }}>
                <Text style={{ fontSize: H(4), color: 'red', marginLeft: W(3) }}>Create Account</Text>
                <Text style={{ fontSize: H(2.5), color: 'grey', marginTop: H(1), fontWeight: 'bold', marginLeft: W(3) }}>SIGN UP TO GET STARTED</Text>
            </View>

            <SocialMediaIcons />

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={{width:W(38)}}>
                <Text style={{ color: 'white', marginBottom: H(1), marginTop: H(1) }}>First Name</Text>
                <Input onChangeText={(fName) => setfName(fName)} placeholdertxt="Enter First Name" width={W(38)} />
                </View>
                <View style={{width:W(39),marginLeft:H(1)}}>
                <Text style={{ color: 'white', marginBottom: H(1), marginTop: H(1) }}>Last Name</Text>
                <Input onChangeText={(lName) => setlName(lName)} placeholdertxt="Enter Last name" width={W(38)}  />
                </View>
            </View>

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(1) }}>Email</Text>
            <Input onChangeText={(email) => setEmail(email)} placeholdertxt="Enter your email" />

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(1) }}>Password</Text>
            <Input secureTextEntry={true} onChangeText={(password) => setPassword(password)} placeholdertxt="Enter your password" />


            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(1) }}>Confirm Password</Text>
            <Input secureTextEntry={true} onChangeText={(confirmPass) => setconfirmPass(confirmPass)} placeholdertxt="Confirm your password" />

            <View style={{marginTop:H(2)}}>
            {loading ? (
            <ActivityIndicator size={'large'} color={'#fff'} />
            ):<Button onPressButton={() => {validation()}} alignSelf='center' txt='SIGN UP' />}
            </View>
        


            <View style={{ flexDirection: 'row', marginTop: H(3), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Already have an account?</Text>
                <Text style={{ color: '#FFD497', marginLeft: W(1) }} onPress={() => props.navigation.navigate('Login')}>Login</Text>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Signup;