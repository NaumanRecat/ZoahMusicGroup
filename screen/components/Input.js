import React from "react";
import {TextInput } from "react-native";
import {H,W} from '../constant/Common';

const Input = (props) => {
    return (
       <TextInput placeholder={props.placeholdertxt} placeholderTextColor={'grey'} secureTextEntry={props.secureTextEntry} style={{height:H(6), paddingLeft:H(1.5), width:W(80), borderWidth:H(0.25), borderColor:'grey', alignSelf:'center', borderRadius:H(1.5),color: 'white'}} />
    )
}
export default Input