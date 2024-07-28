import React from "react";
import { Image, Text, View } from "react-native";
import {H,W, BackgroundClr} from './constant/Common';
import SocialMediaIcons from "./components/SocialMediaIcons";
import Button from "./components/Button";
import Input from "./components/Input";
Input


const LandingPage =()=>{
    return(
        <View style={{flex:1, backgroundColor:BackgroundClr}}>
            <View style={{height:H(38), marginTop:H(5)}}>
                <Image source={require('./assests/logo.png')} style={{resizeMode:'contain', height:H(40), width:W(60), alignSelf:'center'}} />
            </View>
           <SocialMediaIcons/>
            <View style={{alignSelf:'center', marginTop:H(5)}}>
                <Button txt={'SIGNUP'} />
                <View style={{height:H(6), width:W(75), borderRadius:H(5), justifyContent:'center', alignItems:'center', borderColor:'orange', borderWidth:H(0.2), marginTop:H(2)}}><Text style={{color:'orange'}} >LOGIN</Text></View>
            </View>
            <View style={{width:W(70), alignSelf:'center', marginTop:H(4)}}>
                <Text style={{color:'white', fontSize:H(1.6), alignSelf:'center'}}>By Creating an account , you agree to our </Text>
                <Text style={{color:'white', fontSize:H(1.6), alignSelf:'center'}}>Privacy Policy and Term to use </Text>
            </View>
        </View>
    )
}
export default LandingPage