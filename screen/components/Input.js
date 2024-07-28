import React from "react";
import {TextInput } from "react-native";
import {H,W} from '../constant/Common';

const Input = () => {
    return (
       <TextInput placeholder="Type Your Text" placeholderTextColor={'grey'} style={{height:H(7), width:W(80), borderWidth:H(0.25), borderColor:'grey', alignSelf:'center', borderRadius:H(1.5)}} />
    )
}
export default Input