import React, { useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import { BackgroundClr, H, W } from "../constant/Common";
import Icon from 'react-native-vector-icons/Feather';

const Document = (props) => {
    const [data, setData] = useState([
        { title: 'All', status: 'All' },
        { title: 'Pending', status: 'Pending' },
        { title: 'Draft', status: 'Draft' },
        { title: 'Declined', status: 'Decline' },
        { title: 'Done', status: 'Done' }
    ]);

    const [show, setShow] = useState([
        { title: 'Musician Agreement', image: require('../assests/Ellipse1.png') },
        { title: 'Letter of Direction', image: require('../assests/Ellipse1.png') }
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

    const getItemCount = (status) => {
        if (status === 'All') {
            return show.length;
        }
        return show.filter(item => item.status === status).length;
    };

    const renderItem = ({ item }) => {
        const isSelected = selectedStatus === item.status;
        const itemCount = getItemCount(item.status);

        return (
            <TouchableOpacity 
                onPress={() => setSelectedStatus(item.status)} // Set the selected status
                style={{
                    marginLeft: W(2),
                    height:H(5),
                    backgroundColor: isSelected ? '#FFD497' : '#1c1c1c', 
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:H(1),
                }}>
                {/* Number Badge */}
                {itemCount !== 0 ? (
                <View style={{
                    position: 'absolute',
                    top: -8,
                    right: -8,
                    backgroundColor: isSelected ? '#FFD497' : '#3a3a3a', 
                    borderRadius: 10,
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    zIndex: 1,
                }}>
                    <Text style={{ color: '#000', fontSize: 10, fontWeight: 'bold' }}>
                        {itemCount}
                    </Text>
                </View>
                ):null}

                <Text style={{ color: isSelected ? '#000' : '#FFD497', fontSize: 16, fontWeight: 'bold', paddingLeft:H(2),paddingRight:H(2) }}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    };

    const renderItemshow = ({ item }) => {
        const statusColor = getStatusColor(item.status);

        return (
            <TouchableOpacity 
                onPress={() => {
                   if(item?.title === 'Musician Agreement'){
                        props.navigation.navigate('AgreementNew');
                   } else {
                        props.navigation.navigate('AgreementNewLetter');
                   }
                }}  
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
                    showsHorizontalScrollIndicator={false}
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
