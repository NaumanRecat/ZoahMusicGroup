import React from "react";
import { View, Image } from "react-native";
import {H,W} from '../constant/Common';

const SocialMediaIcons = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: W(60), alignSelf: 'center', marginTop: H(15) }}>
            <View><Image source={require('../assests/fblogo.jpg')} style={{ resizeMode: 'contain', height: H(4.5), width: W(16), borderRadius: H(10) }} /></View>
            <View><Image source={require('../assests/googlee.png')} style={{ resizeMode: 'contain', height: H(5.5), width: W(16), borderRadius: H(10) }} /></View>
            <View><Image source={require('../assests/apple.png')} style={{ resizeMode: 'contain', height: H(4.5), width: W(16), borderRadius: H(10) }} /></View>
        </View>
    )
}
export default SocialMediaIcons