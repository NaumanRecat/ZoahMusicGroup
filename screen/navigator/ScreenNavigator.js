import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from '../LandingPage';
import Login from '../Login';
import BottomTabNavigator from './BottomTabNavigator';
import Aggrement from '../Agreement';
import Document from './Document';
import Signup from '../Signup';
import AgreementNew from '../AgreementNew'; 




const Stack = createNativeStackNavigator();

const ScreenNavigator =()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="AgreementNew">
        <Stack.Screen name="AgreementNew" component={AgreementNew} options={{headerShown:false}}/> 
        <Stack.Screen name="Aggrement" component={Aggrement} options={{headerShown:false}}/> 
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown:false}}/> 
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/> 
        <Stack.Screen name="Document" component={Document} options={{headerShown:false}}/> 
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigator