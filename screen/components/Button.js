import React from "react";
import { View, Image,Text } from "react-native";
import {H,W} from '../constant/Common';

const Button = (props) => {
    return (
        <View style={{alignSelf:props.alignSelf}}>
        <View style={{height:H(6), width:W(75), backgroundColor:'#FFD497', borderRadius:H(5), justifyContent:'center', alignItems:'center', borderWidth:H(0.2)}}><Text style={{fontWeight:'bold'}}> {props.txt} </Text></View>
        </View>
    )
}
export default Button