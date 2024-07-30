import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from '../LandingPage';
import Login from '../Login';
import BottomTabNavigator from './BottomTabNavigator';
import Aggrement from '../Agreement';
import Aggrementfnf from './Agreementfnf';
import Document from './Document';




const Stack = createNativeStackNavigator();

const ScreenNavigator =()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="Aggrementfnf" component={Aggrementfnf} options={{headerShown:false}}/> 
        <Stack.Screen name="Aggrement" component={Aggrement} options={{headerShown:false}}/> 
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown:false}}/> 
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/> 
        <Stack.Screen name="Document" component={Document} options={{headerShown:false}}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigator