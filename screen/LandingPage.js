import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { H, W, BackgroundClr } from './constant/Common';
import SocialMediaIcons from "./components/SocialMediaIcons";
import Button from "./components/Button";

const LandingPage = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>

            <View style={{ height: H(33), marginTop: H(5) }}>
                <Image source={require('./assests/logo.png')} style={{ resizeMode: 'contain', height: H(40), width: W(60), alignSelf: 'center' }} />
            </View>

            {/* <SocialMediaIcons /> */}

            <View style={{ alignSelf: 'center', marginTop: H(18) }}>
                <Button onPressButton={() => props.navigation.navigate('Signup')} txt={'SIGNUP'} />
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ height: H(6), width: W(75), borderRadius: H(5), justifyContent: 'center', alignItems: 'center', borderColor: '#FFD497', borderWidth: H(0.2), marginTop: H(2) }}><Text style={{ color: '#FFD497' }} >LOGIN</Text></TouchableOpacity>
            </View>

           <View style={{alignItems:'center', marginTop:H(2)}}>
            <Text style={{color:'white', fontSize:H(1.7)}}>By creating an account, you agree to our</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'white', fontSize:H(1.7), color:'#FFD497'}}>Privacy Policy{' '}</Text>
            <Text style={{color:'white', fontSize:H(1.7)}}>and</Text>
            <Text style={{color:'white', fontSize:H(1.7), color:'#FFD497'}}>{' '}Terms of use</Text>

            </View>
           </View>

        </View>
    )
}
export default LandingPage