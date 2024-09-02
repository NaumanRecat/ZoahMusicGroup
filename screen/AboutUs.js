import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { BackgroundClr, H, W } from "./constant/Common";
import Header from "./components/Header";

const AboutUs = (props) => {
    return(
        <View style={{ flex: 1, backgroundColor: BackgroundClr, paddingHorizontal: 20}}>
            <Header onBackPress={() => props.navigation.navigate('BottomTabNavigator')} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Image
            style={{
              width: W(44),
              height: H(10),
              resizeMode: 'contain',
              alignSelf:'center'
            }}
            source={require('./assests/logo.png')}/>
            <Text style={{fontSize: H(1.8), color: 'rgba(255, 255, 255, 1)'}}>With close to 4 decades of chart topping hit songs, since 1988, the ZOAH Music House Publishing catalog has a rich history and formula for creating the hits.</Text>
            <Text style={{fontSize: H(1.8), color: 'rgba(255, 255, 255, 1)',marginTop:H(2)}}>G Syier Hawkins Brown, CEO and Creative Director of ZOAH Music Group, and Chairman of Iconic Multi Media Group began his career as a studio background vocalist at the age of seventeen under the direction of R&B producer Nick Martinelli and then Brown tried his hand at writing and co created ,</Text>
            <Text style={{fontSize: H(1.8), color: 'rgba(255, 255, 255, 1)',marginTop:H(2)}}>"THIS IS THE LAST TIME" by Teddy Pendergrass in 1988. The song was featured on the Grammy award winning Joy LP. The song was co written by Brown and Gabriel and Annette Hardeman. The trio teamed up again for Brown's very first #1 hit single "LOVE UNDERE NEW MANAGEMENT" by Miki Howard in 1989. This shot Brown into full writing motion and the hits kept coming. G Syier Hawkins Brown's pen as well as his productions can be heard on hit songs by; PATTI LaBELLE, JASMINE SULLIVAN,MAXWELL, DIANA ROSS, ARETHA FRANKLIN, ROBIN S., EDWIN HAWKINS, LEDISI, BOYZ II MEN, LeANN RIMES, PYLLIS HYMAN, TU PAC SHAKUR, and BEYONCE.</Text>
            </ScrollView>
        </View>
    )
}

export default AboutUs;