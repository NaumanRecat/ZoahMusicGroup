import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { BackgroundClr, H, W } from '../constant/Common';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';

const Aggrementfnf = () => {
    const [disable, setDisable] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <Header icon />
            <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(4) }} >MUSICIAN AGREEMENT</Text>

            <ScrollView style={{ marginRight: W(3), padding: 5 }}>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop: H(2) }} >Date: July 27, 2024</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop: H(2) }} >Client/Company: Melody Events</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Address: 123 Harmony Lane, Music City, USA</Text>
                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3) }} >Contact: (123) 456-7890, melodyevents@example.co</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop: H(3) }} >Musician: John Doe (The Melody Maker)</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Address: 456 Rhythm Road, Music Town, USA</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Contact: (987) 654-3210, johndoe@example.com</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop: H(3) }} >Event: Summer Music Festival</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Date & Time: August 15, 2024, 7:00 PM - 9:00 PM</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Location: Central Park, Music City, USA</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop: H(3) }} >Fee: $2,000</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Payment: 50% upon signing, 50% upon completion</Text>

                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3), marginTop: H(3) }} >Expenses: Travel & accommodation covered by Client</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >1.Musician: Guitar, amplifier, microphone</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >2.Client/Company: PA system, stage lighting</Text>

                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3), marginTop: H(3) }} >Cancellation:</Text>
                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3) }} >1.Client/Company: 50% fee if canceled within 14 days</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >2.Musician: Refund if canceled within 14 days</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop: H(3) }} >Duration: Minimum 2 hours</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Arrival: 2 hours before performance</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop: H(3) }} >IP Rights: Musician retains. No Promotional use</Text>

                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3), marginTop: H(3) }} >Liability:</Text>
                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3) }} >Musician: Insurance for equipment and property</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginBottom: H(2) }} >Client/Company: Insurance for event and venue</Text>


                <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(2) }} >SIGNATURE</Text>
                <View style={{ padding: 20, backgroundColor: '#000', height:H(35)}}>
                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 10 }}>
                        Client/Company: Melody Events
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Signature:</Text>
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
                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 20 }}>
                        Name: Jane Smith, Event Coordinator
                    </Text>

                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 10 }}>
                        Musician: John Doe
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Signature:</Text>
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
                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 5 }}>
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
export default Aggrementfnf