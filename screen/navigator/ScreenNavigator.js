import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from '../LandingPage';
import Login from '../Login';






const Stack = createNativeStackNavigator();

const ScreenNavigator =()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigator