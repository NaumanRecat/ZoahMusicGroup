import React from "react";
import { View, Image, Text } from "react-native";
import { H, W } from '../constant/Common';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            
            <View style={{
                height: H(6),
                width: W(95),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="arrowleft" size={20} color="#FFD497" />
                    <Text style={{ color: '#FFD497' }}>Back</Text>
                </View>

                {
                    props?.icon ? 

                    <View>
                    <View style={{
                        height: H(4.5),
                        width: W(28),
                        backgroundColor: '#FFD497',
                        borderRadius: H(1.5),
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View>
                            <Icon name="save" size={20} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', color: 'black' }} > Save Draft</Text>
                        </View>
                    </View>
                </View> : null
                }

               

            </View>
        </View>
    )
}
export default Header