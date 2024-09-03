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
import AgreementNewLetter from '../AgreementNewLetter';
import Splash from '../Splash';
import EditProfile from '../EditProfile';
import AboutUs from '../AboutUs';
import ForgetStep1 from '../forgetpassword/ForgetStep1';
import ForgetStep2 from '../forgetpassword/ForgetStep2';
import ForgetStep3 from '../forgetpassword/ForgetStep3';








const Stack = createNativeStackNavigator();

const ScreenNavigator =()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/> 
        <Stack.Screen name="AgreementNewLetter" component={AgreementNewLetter} options={{headerShown:false}}/> 
        <Stack.Screen name="AgreementNew" component={AgreementNew} options={{headerShown:false}}/> 
        <Stack.Screen name="Aggrement" component={Aggrement} options={{headerShown:false}}/> 
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown:false}}/> 
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/> 
        <Stack.Screen name="Document" component={Document} options={{headerShown:false}}/> 
        <Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown:false}}/> 
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/> 
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/> 
        <Stack.Screen name="ForgetStep1" component={ForgetStep1} options={{headerShown:false}}/> 
        <Stack.Screen name="ForgetStep2" component={ForgetStep2} options={{headerShown:false}}/> 
        <Stack.Screen name="ForgetStep3" component={ForgetStep3} options={{headerShown:false}}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigator