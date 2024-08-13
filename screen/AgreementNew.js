import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { BackgroundClr, H, W } from "./constant/Common";
import Header from "./components/Header";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';

const AgreementNew = (props) => {
    const [disable, setDisable] = useState(true)
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <Header onBackPress={() => props.navigation.navigate('BottomTabNavigator')} icon />
            <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(4) }} >Administrative Publishing Agreement</Text>

            <ScrollView style={{ marginRight: W(3), padding: 5 }} showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(2) }}>
                    <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>ADMINISTRATION AGREEMENT</Text>
                </Text>

                <View style={{ padding: H(0.7) }}>
                    <Text style={{ fontSize: H(2), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3), marginTop: H(2) }}>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>ZOAH MUSIC GROUP serves as the parent company for ZOAH MUSIC HOUSE PUBLISHING, an affiliate of (ASCAP),
                            and ZMH Publishing, an affiliate of (BMI). Both companies are in the business of music publishing,
                            and both companies are signed to an administrator publisher for the purpose of collecting royalties
                            for any and all works assigned to the ZOAH MUSIC HOUSE or ZMH Publishing catalogs. By virtue of this
                            general AGREEMENT, ZOAH MUSIC GROUP hereby offers the services of ADMINISTRATIVE PUBLISHER to the
                            below-named individual/company for the expressed purpose of:</Text>
                    </Text>
                </View>


                <View style={{ fontSize: H(2), color: 'rgba(255, 255, 255, 1)', marginLeft: W(3), marginTop: H(2), padding: H(0.7) }}>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>i.</Text> Placing your song(s) under the Zoah Music Group catalog
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>ii.</Text> Inputting your song(s) metadata into our database for correct splits and ownership information, to ensure that all future distributions are accurate.
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>iii.</Text> Acting in a legal capacity as your Administrative Publisher in that capacity, ZOAH MUSIC GROUP shall represent the publishing needs of the individual/company named below as it pertains to the song(s) listed on the attached SONG REGISTRATION form.
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>iv.</Text> Individual/Company named below shall have the legal right to assign all works to this AGREEMENT by either owning or controlling all or a portion of the Copyright, by owning or controlling all or a portion of the publishing, or by being a legal representative of one who owns and or controls a portion of the Copyright or Publishing.
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>v.</Text> Individual/Company may be only a composer, author, or both of the work(s), this gives the Individual/Company the legal right to assign work(s) to ZOAH MUSIC GROUP.
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>vi.</Text> When assigning work(s) to ZOAH MUSIC GROUP you hereby grant to ZOAH MUSIC GROUP the right to collect and distribute royalties on your behalf in consideration for a 20% payment on all gross royalties collected via ZOAH MUSIC GROUP on behalf of Individual/Company named below.
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>vii.</Text> Understanding that ZOAH MUSIC GROUP receives royalties every quarter around the 15th of February, May, August, and November, from its administrators (Blue Water and Word Collections) music publishers, ZOAH MUSIC GROUP will payout to its members on the 20th of February, May, August, and November.
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>viii.</Text> Royalties will be paid in the form of ACH or Check based on your preference.
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>ix.</Text> The term of this contract shall be up and until you end it, understanding that when you officially inform ZOAH MUSIC GROUP in writing that you wish to end this contract/AGREEMENT, it will be legally concluded 45 days after receipt of such. Up until the 45 day mark, ZOAH MUSIC GROUP will continue to collect and serve as ADMINISTRATIVE PUBLISHER as we close out your metadata.
    </Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: H(1) }}>
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>x.</Text> Individual/Company may at any time resume the services of ZOAH MUSIC GROUP after a sixty-day period has passed from the time of any AGREEMENT ending.
    </Text>
</View>



                <Text style={{ fontSize: H(2.8), color: 'red', marginLeft: W(3), marginTop: H(2), fontWeight: 'bold' }}>
                    SIGNATURE
                </Text>



                <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(3) }}>
                    <Text style={{ color: 'rgba(255, 255, 255, 1)' }}>
                        This AGREEMENT is governed by the laws of the state of Georgia, and all breaches of contract shall be mediated in the state of Georgia</Text>
                </Text>

                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: H(3), marginLeft: W(3) }}>I accept and agree to all statements made herein.</Text>
                <View style={{ flexDirection: 'row', width: H(40), marginTop: H(2), alignSelf: 'stretch' }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: W(3) }}>Signature:</Text>
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 5,
                            height: 70,
                            flex: 1,
                            marginLeft: 10,
                            paddingLeft: 10,
                        }}
                    />
                </View>

                <View>
            <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(3) }}>
                <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>G SYIER HAWKINS</Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Date </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 1)' }} onPress={() => setOpen(true)}>
                    {date.toLocaleDateString()}
                </Text>
            </Text>

            <Text style={{ fontSize: H(2), marginLeft: W(3), marginTop: H(1) }}>
                <Text style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}>ZOAH MUSIC HOUSE PUBLISHING</Text>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}> Date </Text>
                <Text style={{ color: 'rgba(255, 255, 255, 1)' }} onPress={() => setOpen(true)}>
                    {date.toLocaleDateString()}
                </Text>
            </Text>

            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(selectedDate) => {
                    setOpen(false);
                    setDate(selectedDate);
                }}
                onCancel={() => {
                    setOpen(false);
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


                        <TouchableOpacity onPress={()=>props.navigation.navigate('AgreementNewLetter')} style={{
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
export default AgreementNew