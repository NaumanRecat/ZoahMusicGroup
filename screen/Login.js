import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { H, W, BackgroundClr } from './constant/Common'
import Header from "./components/Header";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Input from "./components/Input";
import Button from "./components/Button";
import Document from "./navigator/Document";


const Login = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>

            <Header onBackPress={() => props.navigation.navigate('LandingPage')} />

            <View style={{ height: H(15), marginTop: H(5), alignSelf: 'center', marginRight: W(3) }}>
                <Text style={{ fontSize: H(4), color: 'red', marginLeft: W(3) }} >Welcome Back</Text>
                <Text style={{ fontSize: H(2.5), color: 'grey', marginTop: H(2), fontWeight: 'bold', marginLeft: W(3) }} >PLEASE ENTER YOUR</Text>
                <Text style={{ fontSize: H(2.5), color: 'grey', fontWeight: 'bold' }} >CREDENTIALS TO LOGIN</Text>
            </View>

            <SocialMediaIcons />

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(3) }}>Email</Text>
            <Input placeholdertxt="Valid email addres" />

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(2) }}>Password</Text>
            <Input placeholdertxt="Use a strong password" />

            <View style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: W(90),
                marginTop: H(2.5),
                marginBottom: H(2.5)
            }}>
                <Text style={{ color: '#FFD497', }}>Forget Password</Text>
            </View>

            <Button onPressButton={() => { props.navigation.navigate('BottomTabNavigator') }} alignSelf='center' txt='LOGIN' />

            <View style={{ flexDirection: 'row', marginTop: H(5), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} ><Text style={{ color: '#FFD497' }}>  Sign up</Text></TouchableOpacity>
            </View>


        </View>
    )
}
export default Login