import React from "react";
import { View, Text } from "react-native";
import { H, W, BackgroundClr } from './constant/Common';
import Header from "./components/Header";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Input from "./components/Input";
import Button from "./components/Button";

const Signup = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>

            <Header onBackPress={() => props.navigation.navigate('LandingPage')} />

            <View style={{ height: H(5), alignSelf: 'center', marginRight: W(3) }}>
                <Text style={{ fontSize: H(4), color: 'red', marginLeft: W(3) }}>Create Account</Text>
                <Text style={{ fontSize: H(2.5), color: 'grey', marginTop: H(1), fontWeight: 'bold', marginLeft: W(3) }}>SIGN UP TO GET STARTED</Text>
            </View>

            <SocialMediaIcons />

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(3) }}>Full Name</Text>
            <Input placeholdertxt="Enter your Full name" />

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(2) }}>Email</Text>
            <Input placeholdertxt="Enter your email" />

            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(2) }}>Password</Text>
            <Input placeholdertxt="Enter your password" />


            <Text style={{ color: 'white', marginLeft: W(10), marginBottom: H(1), marginTop: H(2) }}>Confirm Password</Text>
            <Input placeholdertxt="Confirm your password" />


            <View style={{marginTop:H(2)}}>
            <Button onPressButton={() => { props.navigation.navigate('BottomTabNavigator') }} alignSelf='center' txt='SIGN UP' />
            </View>
        


            <View style={{ flexDirection: 'row', marginTop: H(3), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Already have an account?</Text>
                <Text style={{ color: '#FFD497', marginLeft: W(1) }} onPress={() => props.navigation.navigate('Login')}>Login</Text>
            </View>
        </View>
    )
}

export default Signup;
