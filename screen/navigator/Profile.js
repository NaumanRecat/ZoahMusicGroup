import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { BackgroundClr, H } from '../constant/Common';

const Profile = (props) => {
    const [profile, setProfile]=useState('Tyler Mason')
    const [email, setEmail]=useState('tylermason309@gmail.com')
    const menuItems = [
        { title: 'Edit Profile', onPress: () => alert('Edit Profile') },
        { title: 'LogOut', onPress: () => props.navigation.navigate('Login') },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <Image source={require('../assests/profiledummy.png')}
                    style={{ width: 80, height: 80, borderRadius: 40, borderColor:'#FFD497', borderWidth:H(0.2), marginTop:H(3)}}
                />

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, color: 'white' }}> {profile} </Text>
                <Text style={{ fontSize: 14, color: 'white', marginBottom: 10 }}>{email}</Text>
            </View>

            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#E5E5E5',
                            paddingHorizontal: 20,
                        }}
                        onPress={item.onPress}
                    >
                        <Text style={{ fontSize: 16, color: 'white' }}>{item.title}</Text>
                        <Text style={{ fontSize: 18, color: 'white' }}>›</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Profile;
