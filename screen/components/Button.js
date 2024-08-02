import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
import {BackgroundClr, H,W} from '../constant/Common';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressButton} style={{alignSelf:props.alignSelf}}>
        <View style={{height:H(6), width:W(75), backgroundColor:'#FFD497', borderRadius:H(5), justifyContent:'center', alignItems:'center', borderWidth:H(0.2)}}><Text style={{fontWeight:'bold', color:BackgroundClr}}> {props.txt} </Text></View>
        </TouchableOpacity>
    )
}
export default Button