import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from '../Login';
import LandingPage from '../LandingPage';
import Document from './Document';
import Profile from './Profile';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Document') {
            iconName = focused ? 'document-sharp' : 'document-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: 'black', // Set tab bar color to black
          borderTopWidth: 0, // Remove the grey line on the top of the bar
        },
      })}
    >
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Document" 
        component={Document} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Setting" 
        component={Setting} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
