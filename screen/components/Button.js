import React from "react";
import { View, Image,Text } from "react-native";
import {H,W} from '../constant/Common';

const Button = () => {
    return (
        <View style={{height:H(6), width:W(75), backgroundColor:'orange', borderRadius:H(5), justifyContent:'center', alignItems:'center', borderWidth:H(0.2)}}><Text style={{fontWeight:'bold'}}>SIGNUP</Text></View>
    )
}
export default Button