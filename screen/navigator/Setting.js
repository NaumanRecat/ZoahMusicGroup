import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { BackgroundClr, H } from '../constant/Common';
import Icon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';

const Settings = (props) => {
    const [menuItems, setmenuItems] = useState([
        { title: 'Account', icon: 'user', onPress: () => {props.navigation.navigate('BottomTabNavigator',{screen:'Profile'});}, show:true },
        { title: 'About us', icon: 'info', onPress: () => {props?.navigation?.navigate('AboutUs')}, show:true},
        { title: 'All Documents', icon: 'cog', onPress: () => {props?.navigation?.navigate('AllDocuments')}, show:false }
    ]);
    const [refresh, setReferesh] = useState(0);
    const [userData, setUserData] = useState();

    useEffect(() => {getProfile()},[])

    const GetData = () => {
        AsyncStorage.getItem('UserData', (error, Data) => {
          if (!error && Data !== null) {
            if(
                JSON.parse(Data)?.user?.email === 'husnainzahid701@gmail.com' || 
                JSON.parse(Data)?.user?.email === 'BACKOFFICESUPPORT.publishing@zoahmusichouse.com' ||
                JSON.parse(Data)?.user?.email === 'gsyier.ceo@zoahmusichouse.com' || 
                JSON.parse(Data)?.user?.email === 'hitsongs@zoahmusichouse.com' || 
                JSON.parse(Data)?.user?.email === '⁠longevityfinancialsolutions@gmail.com' ||
                JSON.parse(Data)?.user?.email === 'yalifemedia@gmail.com'
            ){
                menuItems[2].show = true;
                let ref = refresh+1;
                setReferesh(ref);
            }
          }
        });
      };

      const getProfile = () => {
        AsyncStorage.getItem('UserData', (error, Data) => {
            if(!error && Data){
            let getData = JSON.parse(Data);
            let body = {
                email:getData?.user?.email,
            }
            console.log('request Send',body);
            fetch('https://zoahmusicbackend.onrender.com/api/getprofile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            })
            .then(response => response.json())
            .then(res => {
                console.log('Login Response', res);
                setUserData(res);
                if(res?.type === 'admin'){
                    menuItems[2].show = true;
                    let ref = refresh+1;
                    setReferesh(ref);    
                }
            })
            .catch(error => {
                // setLoading(false);
                console.log('Error', error);
            });
            }
        });
    };    
    
    const renderItem = ({ item }) => (
        <>
        {item?.show === true ? (
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
        ):null}
        </>
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
