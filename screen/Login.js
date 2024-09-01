import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { H, W, BackgroundClr } from './constant/Common'
import Header from "./components/Header";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Input from "./components/Input";
import Button from "./components/Button";
import AsyncStorage from "@react-native-community/async-storage";
var validator = require("email-validator");
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const validation = () => {
        const valid = validator.validate(email); // true
        if(email === '' || password === ''){
            alert("Please Fill All Data");
        } else if(!valid){
            alert("Please Enter Correct Email")
        } else {
            loginAPI();
        }
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

            <View style={{ height: H(15), marginTop: H(5), alignSelf: 'center', marginRight: W(3) }}>
                <Text style={{ fontSize: H(4), color: 'red', marginLeft: W(3) }} >Welcome Back</Text>
                <Text style={{ fontSize: H(2.5), color: 'grey', marginTop: H(2), fontWeight: 'bold', marginLeft: W(3) }} >PLEASE ENTER YOUR</Text>
                <Text style={{ fontSize: H(2.5), color: 'grey', fontWeight: 'bold' }} >CREDENTIALS TO LOGIN</Text>
            </View>

            <SocialMediaIcons />

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(3) }}>Email</Text>
            <Input onChangeText={(email) => setEmail(email)} placeholdertxt="Valid email addres" />

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(2) }}>Password</Text>
            <Input secureTextEntry={true} onChangeText={(password) => setPassword(password)} placeholdertxt="Use a strong password" />

            <View style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: W(90),
                marginTop: H(2.5),
                marginBottom: H(2.5)
            }}>
                <Text style={{ color: '#FFD497', }}>Forget Password</Text>
            </View>

            {loading ? (
                <ActivityIndicator size={'large'} color={'#fff'} />
            ):<Button onPressButton={() => {validation()}} alignSelf='center' txt='LOGIN' />}

            <View style={{ flexDirection: 'row', marginTop: H(5), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} ><Text style={{ color: '#FFD497' }}>  Sign up</Text></TouchableOpacity>
            </View>


        </KeyboardAwareScrollView>
    )
}
export default Login;