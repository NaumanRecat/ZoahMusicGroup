import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { BackgroundClr, H } from '../constant/Common';

const Profile = (props) => {
    const menuItems = [
        { title: 'Personal information', onPress: () => alert('Personal information') },
        { title: 'Notifications', onPress: () => alert('Notifications') },
        { title: 'Time spent', onPress: () => alert('Time spent') },
        { title: 'Following', onPress: () => alert('Following') },
        { title: 'Privacy policy', onPress: () => alert('Privacy policy') },
        { title: 'Terms & Conditions', onPress: () => alert('Terms & Conditions') },
        { title: 'FAQ & Help', onPress: () => alert('FAQ & Help') },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <Image
                    source={{ uri: 'https://your-image-url.com' }} // Replace with user's profile picture URL
                    style={{ width: 80, height: 80, borderRadius: 40, borderColor:'#FFD497', borderWidth:H(0.2), marginTop:H(3)}}
                />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 60,
                        right: 135,
                        backgroundColor: '#FFF',
                        borderRadius: 15,
                        padding: 5,
                    }}
                    onPress={() => alert('Edit Profile Picture')}
                >
                    <Text>✏️</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, color: 'white' }}>Tyler Mason</Text>
                <Text style={{ fontSize: 14, color: 'white', marginBottom: 10 }}>tylermason309@gmail.com</Text>
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
