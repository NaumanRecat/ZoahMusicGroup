import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { BackgroundClr, H } from '../constant/Common';
import Icon from 'react-native-vector-icons/Entypo';

const Settings = () => {
    const menuItems = [
        { title: 'Account', icon: 'user', onPress: () => alert('Account') },
        { title: 'Notifications', icon: 'bell', onPress: () => alert('Notifications'), badge: 3 },
        { title: 'Privacy', icon: 'lock', onPress: () => alert('Privacy') },
        { title: 'Help center', icon: 'help', onPress: () => alert('Help center') },
        { title: 'General', icon: 'cog', onPress: () => alert('General') },
        { title: 'About us', icon: 'info', onPress: () => alert('About us') },
    ];


    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                paddingVertical: 15, 
                borderBottomWidth: 1, 
                borderBottomColor: '#E5E5E5',
            }} 
            onPress={item.onPress}
        >
            <View style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 20, 
                justifyContent: 'center', 
                alignItems: 'center', 
            }}>
              <Icon name={item.icon} size={22} color="#FFD497" />

            </View>
            <Text style={{ 
                fontSize: 16, 
                color: 'white', 
                marginLeft: 15, 
                flex: 1 
            }}>
                {item.title}
            </Text>
            {item.badge && (
                <View style={{ 
                    backgroundColor: 'red', 
                    borderRadius: 10, 
                    paddingHorizontal: 6, 
                    paddingVertical: 2, 
                    marginRight: 10 
                }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{item.badge}</Text>
                </View>
            )}
            <Text style={{ fontSize: 18, color: 'white' }}>›</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr, paddingHorizontal: 20}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 20, color: 'white', marginTop:H(5) }}>Settings</Text>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.title}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Settings;
