import React, { useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import { BackgroundClr, H, W } from "../constant/Common";
import Icon from 'react-native-vector-icons/Feather';

const Document = (props) => {
    const [data, setData] = useState([
        { title: 'All' },
        { title: 'Pending' },
        { title: 'Draft' },
        { title: 'Decline' },
        { title: 'Done' }
    ]);

    const [show, setShow] = useState([
        { title: 'Label Agreement 2024-2025', image: require('../assests/Ellipse.png'), status: 'Draft' },
        { title: 'Label Agreement 2024-2025', image: require('../assests/Ellipse1.png'), status: 'Pending' },
        { title: 'Label Agreement 2024-2025', image: require('../assests/Ellipse2.png'), status: 'Decline' },
        { title: 'Label Agreement 2024-2025', image: require('../assests/Ellipse.png'), status: 'Done' },
        { title: 'Label Agreement 2024-2025', image: require('../assests/Ellipse1.png'), status: 'Draft' },
        { title: 'Label Agreement 2024-2025', image: require('../assests/Ellipse2.png'), status: 'Done' },
    ]);

    const [selectedStatus, setSelectedStatus] = useState('All'); // Default selected status is 'All'

    const getStatusColor = (status) => {
        switch (status) {
            case 'Draft':
                return '#FF7A00';
            case 'Done':
                return '#21943A';
            case 'Decline':
                return '#FF1B1B';
            case 'Pending':
                return '#2C2C2C';
            default:
                return '#000000'; // Fallback color
        }
    };

    const renderItem = ({ item }) => {
        const isSelected = selectedStatus === item.title;
        return (
            <TouchableOpacity 
                onPress={() => setSelectedStatus(item.title)} // Set the selected status
                style={{
                    marginLeft: W(1),
                    padding: 12,
                    borderBottomWidth: 1,
                    borderRadius: isSelected ? 20 : 0, 
                    backgroundColor: isSelected ? '#FFD497' : 'transparent',
                    borderWidth: isSelected ? 2 : 0 
                }}
            >
                <Text style={{ color: isSelected ? 'black' : '#FFD497' }}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    const renderItemshow = ({ item }) => {
        const statusColor = getStatusColor(item.status);

        return (
            <TouchableOpacity 
                onPress={() => props.navigation.navigate('Aggrement')}  
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: '#0D0D0D',
                    borderRadius: 10,
                    marginBottom: 10,
                    width: W(95),
                    alignSelf: "center",
                    height: H(12)
                }}
            >
                <Image
                    source={item.image}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 10,
                    }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={{
                        color: '#ffffff',
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 5,
                    }}>
                        {item.title}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: statusColor, 
                            borderRadius: 10,
                            paddingVertical: 2,
                            paddingHorizontal: 8,
                            marginRight: 5,
                        }}>
                            <Icon name="edit" size={12} color="#FFFFFF" />
                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: 12,
                            }}>{item.status}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#3a3a3a',
                            borderRadius: 5,
                            paddingVertical: 2,
                            paddingHorizontal: 8,
                        }}>
                            <Icon name="calendar" size={12} color="#FFFFFF" />
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 12,
                            }}> 28/8/2024</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const filteredData = selectedStatus === 'All' 
        ? show 
        : show.filter(item => item.status === selectedStatus); // Filter data based on selected status

    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>

           <View style={{ height: H(7), marginTop: H(1) }}>
               <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                />
           </View>

           <View style={{ height: H(100), marginTop: H(1) }}>
               <FlatList
                    data={filteredData} // Display filtered data
                    renderItem={renderItemshow}
                    keyExtractor={(item, index) => index.toString()}
                />
           </View>

        </View>
    );
};

export default Document;
