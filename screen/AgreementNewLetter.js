import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { BackgroundClr, H, W } from "./constant/Common";
import Header from "./components/Header";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';

const AgreementNewLetter = (props) => {
    const [disable, setDisable] = useState(true)
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <Header onBackPress={() => props.navigation.navigate('BottomTabNavigator')} icon />
            <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(4) }} >Letter of Direction</Text>

            <ScrollView style={{ marginRight: W(3), padding: 5 }}>

                <View style={{ height: H(5), flexDirection: 'row', alignSelf: 'center', marginTop: H(2) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>As of</Text>
                    <TextInput
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 10,
                            marginLeft: 10,
                            width: W(40),
                            color: 'rgba(255, 255, 255, 1)', // Set text color to 100% white
                        }}
                    />
                </View>

                <View style={{alignSelf:'center'}} >
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>TO: MG, Warner Music, Sony Records, MRI, HFA, Spotify, Apple Music, Amazon,</Text> 
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>You Tube, You Tube Music, and all others requiring a license to Reproduce,</Text>
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>Distribute, Publicly Perform, Digitally Transmit,Publicly Display any/or</Text>
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>create Derivatives as defined 17 U.S.C. 106–Exclusive Rights in Copyrighted</Text>
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>Works of ZOAH MUSIC HOUSE PUBLISHIG and or ZMH Publishing exclusively</Text>
                    <Text style={{color:'white', marginBottom:H(1), padding:H(0.5)}}>controlled Musical Compositions</Text>
                </View>

                <Text style={{color:'white', marginBottom:H(1), padding:H(0.5), marginLeft:W(3)}}>RE: Letter of Direction</Text>
                <Text style={{color:'white', marginBottom:H(1), padding:H(0.5), marginLeft:W(3)}}>To Whom It May Concern:</Text>

                <View style={{ padding: H(0.7) }}>
                    <Text style={{ fontSize: H(2), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3)}}>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        The undersigned and all of their publishing entities have assigned to ZOAH MUSIC HOUSEPUBLISHING and ZMH PUBLISHING (Zoah Music Group) the exclusive rights of licensing andadministration, including , without limitation, the exclusive right to license and administer the rights ofreproduction, distribution, public performance (the non–exclusive right only to public performance whenapplicable) and public display and (collect resulting income) in the share of the musical compositionsidentified on the provided and/or attached Schedule A (collectively, the“Works” )annexed hereto andmade a part of hereof, including, any other versions, covers or derivative works thereof, via the followingforms of media throughout the territory of the world
                        </Text>
                    </Text>
                </View>




                <Text style={{ fontSize: H(2), marginLeft: W(5), marginTop: H(3) }}>
                    <Text style={{ color: 'rgba(255, 255, 255, 1)' }}>ZOAH MUSIC GROUP LLC</Text>
                </Text>

                
                <View style={{ height: H(5), flexDirection: 'row', alignSelf: 'center', marginTop: H(2) }}>
                    <TextInput
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 10,
                            marginLeft: 10,
                            width: W(85),
                            color: 'rgba(255, 255, 255, 1)', // Set text color to 100% white
                        }}
                    />
                </View>

                <View style={{ height: H(5), flexDirection: 'row', marginTop: H(1), marginLeft: W(5) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>By</Text>
                    <TextInput
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 10,
                            marginLeft: 10,
                            width: W(40),
                            color: 'rgba(255, 255, 255, 1)', // Set text color to 100% white
                        }}
                    />
                </View>

                <View style={{ height: H(5), flexDirection: 'row', marginTop: H(1), marginLeft: W(5) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>By</Text>
                    <TextInput
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 10,
                            marginLeft: 10,
                            width: W(40),
                            color: 'rgba(255, 255, 255, 1)', // Set text color to 100% white
                        }}
                    />
                </View>

                <Text style={{ fontSize: H(2), marginLeft: W(5), marginTop: H(3) }}>
                    <Text style={{ color: 'rgba(255, 255, 255, 1)' }}>G Syier Hawkins Brown CEO</Text>
                </Text>

                
                <View style={{ height: H(5), flexDirection: 'row', alignSelf: 'center', marginTop: H(2) }}>
                    <TextInput
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 10,
                            marginLeft: 10,
                            width: W(85),
                            color: 'rgba(255, 255, 255, 1)', // Set text color to 100% white
                        }}
                    />
                </View>

                <View style={{ height: H(5), flexDirection: 'row', marginTop: H(1), marginLeft: W(5) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>By</Text>
                    <TextInput
                        style={{
                            borderBottomWidth: H(0.2),
                            borderColor: 'grey',
                            height: 10,
                            marginLeft: 10,
                            width: W(40),
                            color: 'rgba(255, 255, 255, 1)', // Set text color to 100% white
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#000',
                    padding: 10,
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        {
                            disable ? <TouchableOpacity style={{
                                backgroundColor: '#553A00',
                                borderRadius: H(2.5),
                                height: H(5),
                                padding: 10,
                                marginHorizontal: 10,
                            }}>
                                <Icon name="arrow-bold-left" size={15} color="black" />
                            </TouchableOpacity> : <TouchableOpacity style={{
                                backgroundColor: '#FFD497',
                                borderRadius: H(2.5),
                                height: H(5),
                                padding: 10,
                                marginHorizontal: 10,
                            }}>
                                <Icon name="arrow-bold-left" size={15} color="black" />
                            </TouchableOpacity>
                        }


                        <TouchableOpacity style={{
                            backgroundColor: '#FFD497',
                            borderRadius: H(2.5),
                            height: H(5),
                            padding: 10,
                            marginHorizontal: 4,
                        }}>
                            <Icon name="arrow-bold-right" size={15} color="black" />

                        </TouchableOpacity>

                    </View>


                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: '#FFD497',
                            borderRadius: 50,
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            marginHorizontal: 10,
                            marginLeft: W(10),
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Icon1 name="checkmark-circle-sharp" size={15} color="black" />
                            <Text style={{
                                color: '#000',
                                fontSize: 16,
                                fontWeight: 'bold',
                                marginLeft: W(1)
                            }}>Finish</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}
export default AgreementNewLetter