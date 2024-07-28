import React from "react";
import { View, Image, Text } from "react-native";
import { H, W } from '../constant/Common';

const Header = () => {
    return (
        <View style={{alignItems:'center'}}>
            <View style={{
                height: H(6),
                width: W(95),
                // backgroundColor: 'pink',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:'center',
            }}>
                <View style={{ flexDirection: 'row', alignItems:'center' }}>
                    <Text style={{color:'white'}}>---</Text>
                    <Text style={{color:'white'}}>Back</Text>
                </View>

                <View>
                    <View style={{
                        height: H(5),
                        width: W(30),
                        backgroundColor: 'orange',
                        borderRadius: H(1),
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection:'row',
                        alignItems:'center'
                    }}>
                        <View>
                            <Text>Save Draft</Text>
                        </View>
                        <View>
                            <Text>Icon</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}
export default Header