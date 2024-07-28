import React from "react";
import { View, Image, Text } from "react-native";
import { H, W, BackgroundClr } from './constant/Common'
import Header from "./components/Header";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Input from "./components/Input";
import Button from "./components/Button";

const Login = () => {
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <Header/>

            <View style={{ height: H(15), marginTop: H(5), alignSelf: 'center', marginRight: W(3) }}>
                <Text style={{ fontSize: H(4), color: 'red', marginLeft: W(3) }} >Welcome Back</Text>
                <Text style={{ fontSize: H(2.5), color: 'grey', marginTop: H(2), fontWeight: 'bold', marginLeft: W(3) }} >PLEASE ENTER YOUR</Text>
                <Text style={{ fontSize: H(2.5), color: 'grey', fontWeight: 'bold' }} >CREDENTIALS TO LOGIN</Text>
            </View>

            <SocialMediaIcons/>

            <Text style={{color:'white', marginLeft:W(10),marginBottom:H(1), marginTop:H(3)}}>Email</Text>
            <Input/>

            <Text style={{color:'white', marginLeft:W(10),marginBottom:H(1), marginTop:H(2)}}>Password</Text>
            <Input/>

            <View style={{
               alignItems:'flex-end',
               justifyContent:'flex-end',
                width:W(90),
                marginTop:H(2.5),
                marginBottom:H(2.5)
            }}>
            <Text style={{color:'orange', }}>Forget Password</Text>
            </View>

            <Button alignSelf='center' txt='LOGIN' />

            <View style={{flexDirection:'row', marginTop:H(5), alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white'}}>Don't have an account?</Text>
            <Text style={{color:'orange'}}>  Sign up</Text>
            
            </View>
            

        </View>
    )
}
export default Login