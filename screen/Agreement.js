import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { BackgroundClr, H, W } from "./constant/Common";
import Header from "./components/Header";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';

const Aggrement = (props) => {
    const [disable, setDisable] = useState(true)
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <Header onBackPress={() => props.navigation.navigate('BottomTabNavigator')} icon />
            <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(4) }} >MUSICIAN AGREEMENT</Text>

            <ScrollView style={{ marginRight: W(3), padding: 5 }}>

                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(2) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Date:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> July 27, 2024</Text>
                </Text>

                <Text style={{ fontSize: H(2), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3), marginTop: H(2) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Client/Company:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Melody Events</Text>
                </Text>
                <Text style={{ fontSize: H(2), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Address:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> 123 Harmony Lane, Music City, USA</Text>
                </Text>
                <Text style={{ fontSize: H(1.9), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Contact:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> (123) 456-7890, melodyevents@example.co</Text>
                </Text>

                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Musician:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> John Doe (The Melody Maker)</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Address:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> 456 Rhythm Road, Music Town, USA</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Contact:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> (987) 654-3210, johndoe@example.com</Text>
                </Text>


                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Event:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Summer Music Festival</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Date & Time:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> August 15, 2024, 7:00 PM - 9:00 PM</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Location:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Central Park, Music City, USA</Text>
                </Text>

                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Fee:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> $2,000</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Payment:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> 50% upon signing, 50% upon completion</Text>
                </Text>

                <Text style={{ fontSize: H(1.9), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Expenses:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Travel & accommodation covered by Client</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>1. Musician:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Guitar, amplifier, microphone</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>2. Client/Company:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> PA system, stage lighting</Text>
                </Text>

                <Text style={{ fontSize: H(1.9), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Cancellation:</Text>
                </Text>
                <Text style={{ fontSize: H(1.9), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>1. Client/Company:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> 50% fee if canceled within 14 days</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>2. Musician:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Refund if canceled within 14 days</Text>
                </Text>


                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Duration:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Minimum 2 hours</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Arrival:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> 2 hours before performance</Text>
                </Text>

                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>IP Rights:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Musician retains. No Promotional use</Text>
                </Text>

                <Text style={{ fontSize: H(1.9), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Liability:</Text>
                </Text>
                <Text style={{ fontSize: H(1.9), marginLeft: W(3) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Musician:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Insurance for equipment and property</Text>
                </Text>
                <Text style={{ fontSize: H(2), marginLeft: W(3), marginBottom: H(2) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>Client/Company:</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Insurance for event and venue</Text>
                </Text>

                {/* Signature */}

                <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(2), fontWeight: 'bold' }}>
                    SIGNATURE
                </Text>
                <View style={{ padding: 20, backgroundColor: '#000', height: H(35) }}>
                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}>
                        Client/Company: Melody Events
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Signature:</Text>
                        <TextInput
                            style={{
                                backgroundColor: '#FFD497',
                                borderRadius: 5,
                                height: 40,
                                flex: 1,
                                marginLeft: 10,
                                paddingLeft: 10
                            }}
                        />
                    </View>
                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 20, fontWeight: 'bold' }}>
                        Name: Jane Smith, Event Coordinator
                    </Text>

                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}>
                        Musician: John Doe
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Signature:</Text>
                        <TextInput
                            style={{
                                backgroundColor: '#FFD497',
                                borderRadius: 5,
                                height: 40,
                                flex: 1,
                                marginLeft: 10,
                                paddingLeft: 10
                            }}
                        />
                    </View>
                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 5, fontWeight: 'bold' }}>
                        Name: John Doe
                    </Text>
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
export default Aggrement