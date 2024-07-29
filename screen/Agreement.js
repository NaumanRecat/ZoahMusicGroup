import React from "react";
import { View, Text, ScrollView } from "react-native";
import { BackgroundClr, H, W } from "./constant/Common";
import Header from "./components/Header";

const Aggrement =()=>{
    return(
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <Header icon />
            <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop:H(4) }} >MUSICIAN AGREEMENT</Text>

            <ScrollView style={{marginRight: W(3), padding:5 }}>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop:H(2) }} >Date: July 27, 2024</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop:H(2) }} >Client/Company: Melody Events</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Address: 123 Harmony Lane, Music City, USA</Text>
                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3) }} >Contact: (123) 456-7890, melodyevents@example.co</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop:H(3) }} >Musician: John Doe (The Melody Maker)</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Address: 456 Rhythm Road, Music Town, USA</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Contact: (987) 654-3210, johndoe@example.com</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop:H(3) }} >Event: Summer Music Festival</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Date & Time: August 15, 2024, 7:00 PM - 9:00 PM</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Location: Central Park, Music City, USA</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop:H(3) }} >Fee: $2,000</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Payment: 50% upon signing, 50% upon completion</Text>

                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3), marginTop:H(3) }} >Expenses: Travel & accommodation covered by Client</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >1.Musician: Guitar, amplifier, microphone</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >2.Client/Company: PA system, stage lighting</Text>

                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3), marginTop:H(3) }} >Cancellation:</Text>
                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3) }} >1.Client/Company: 50% fee if canceled within 14 days</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >2.Musician: Refund if canceled within 14 days</Text>
                
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop:H(3) }} >Duration: Minimum 2 hours</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3) }} >Arrival: 2 hours before performance</Text>

                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop:H(3) }} >IP Rights: Musician retains. No Promotional use</Text>

                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3), marginTop:H(3)}} >Liability:</Text>
                <Text style={{ fontSize: H(1.9), color: 'white', marginLeft: W(3) }} >Musician: Insurance for equipment and property</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginBottom:H(2) }} >Client/Company: Insurance for event and venue</Text>

          
            <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop:H(2) }} >SIGNATURE</Text>
                <Text style={{ fontSize: H(2), color: 'white', marginLeft: W(3), marginTop:H(1),  marginBottom:H(2) }} >Client/Company: Melody Events</Text>

                </ScrollView>

        </View>
    )
}
export default Aggrement