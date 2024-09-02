import React, { useEffect } from 'react';
import {
  Image,
  StatusBar,
  View,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { BackgroundClr, H, W } from './constant/Common';

const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => {
            GetData();
        }, 3000);
    },[])

  const GetData = () => {
    AsyncStorage.getItem('UserData', (error, Data) => {
      if (!error && Data !== null) {
        console.log('Data', Data);
        props.navigation.replace('BottomTabNavigator',{screen:'Document'});
      } else {
        props?.navigation?.replace('LandingPage');
      }
    });
  };

  return (
    <View
      style={{flex: 1, alignItems: 'center', backgroundColor: BackgroundClr}}>
      <StatusBar backgroundColor={BackgroundClr} />
      <SafeAreaView backgroundColor={BackgroundClr} style={{height:H(88), alignItems: 'center', justifyContent:'center'}}>
          <Image
            style={{
              width: W(77),
              height: H(36),
              resizeMode: 'contain',
              marginTop: -H(8),
            }}
            source={require('./assests/logo.png')}/>
      </SafeAreaView>
    </View>
  );
};

export default Splash;