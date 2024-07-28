import React, { useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import { BackgroundClr, H, W } from "../constant/Common";

const Document = () => {
    const [data, setData] = useState([
        { title: 'All' },
        { title: 'Pending' },
        { title: 'Draft' },
        { title: 'Declined' },
        { title: 'Done' }
    ]);

    const [show, setShow] = useState([
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },
        { title: 'Label Aggrement 2024-2025', image: require('../assests/fblogo.jpg') },

     
    ]);

    const [selectedIndex, setSelectedIndex] = useState(null);

    const renderItem = ({ item, index }) => {
        const isSelected = selectedIndex === index;
        return (
            <TouchableOpacity 
                onPress={() => setSelectedIndex(index)}
                style={{
                    marginLeft:W(1),
                    padding: 12,
                    borderBottomWidth: 1,
                    borderRadius: isSelected ? 20 : 0, // Circle around the selected item
                    backgroundColor: isSelected ? 'orange' : 'transparent', // Circle color
                    borderWidth: isSelected ? 2 : 0 // Circle border width
                }}
            >
                <Text style={{ color: isSelected ? 'black' : 'orange' }}> {item.title} </Text>

            </TouchableOpacity>
        );
    };

    const renderItemshow = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#1e1e1e',
                borderRadius: 10,
                marginBottom: 10
            }}>
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
                            backgroundColor: '#5c3b21',
                            borderRadius: 5,
                            paddingVertical: 2,
                            paddingHorizontal: 8,
                            marginRight: 5,
                        }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 12,
                            }}>
                                Draft
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#3a3a3a',
                            borderRadius: 5,
                            paddingVertical: 2,
                            paddingHorizontal: 8,
                        }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 12,
                            }}>
                                28/8/2024
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: BackgroundClr }}>

           <View style={{height:H(7), marginTop:H(1)}}>
           <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
            />
           </View>

           <View style={{height:H(100), marginTop:H(1)}}>
           <FlatList
                data={show}
                renderItem={renderItemshow}
                keyExtractor={(item, index) => index.toString()}
            />
           </View>

        </View>
    );
};

export default Document;
