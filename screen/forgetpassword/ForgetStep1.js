import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgetStep1 = (props) => {
  const [email, setEmail] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const generateOtp = () => {
    let digits = '0123456789'; 
    let OTP = ''; 
    let len = digits.length;
    for (let i = 0; i < 4; i++) { 
      OTP += digits[Math.floor(Math.random() * len)];
    }
    console.log('Generated OTP:', OTP);
    return OTP;
  };

  const handleNext = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email.');
      return;
    }

    try {
      const code = generateOtp();
      console.log(code);

      const response = await fetch('https://zoahmusicbackend.onrender.com/api/sendotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (response.ok) {
        props.navigation.navigate('ForgetStep2', { email, code });
      } else {
        Alert.alert('Error', data.message || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Image
        source={require('../assests/logo.png')}
        style={{
          width: 250,
          height: 100,
          marginBottom: 30,
        }}
      />

      <Text
        style={{
          fontSize: 18,
          color: '#fff',
          marginBottom: 10,
        }}
      >
        What's Your Email?
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#1C1C1C',
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 20,
        }}
      >
        <Icon name="envelope" size={20} color="#FFD497" style={{ marginRight: 10 }} />
        <TextInput
          style={{
            flex: 1,
            height: 40,
            color: '#fff',
          }}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity 
        onPress={handleNext} 
        style={{
          backgroundColor: '#FFD497',
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetStep1;
