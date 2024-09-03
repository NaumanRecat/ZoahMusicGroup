import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const ForgetStep2 = (props) => {
  const { email } = props.route.params; // Get email and OTP from navigation params
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleNext = () => {
    const enteredOtp = code.join('');
    console.log(enteredOtp);
    console.log(props.route.params?.code);
    if (enteredOtp === props.route.params?.code) {
      Alert.alert('Success', 'OTP verified successfully!');
      props.navigation.navigate('ForgetStep3', { email });
    } else {
      Alert.alert('Error', 'Incorrect OTP. Please try again.');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000', // Black background
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      {/* Back button */}
      <TouchableOpacity onPress={() => props.navigation.navigate('ForgetStep1')}  style={{ position: 'absolute', top: 40, left: 30 }}>
        <Text style={{ color: '#fff' }}>Back</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../assests/logo.png')} // Replace with your logo path
        style={{
          width: 250, // Adjust size as needed
          height: 100,
          marginBottom: 30,
        }}
      />

      {/* Verification code prompt */}
      <Text
        style={{
          fontSize: 18,
          color: '#fff',
          marginBottom: 10,
        }}
      >
        Enter 4-digit Verification code
      </Text>

      {/* Code send info */}
      <Text
        style={{
          fontSize: 14,
          color: '#aaa',
          marginBottom: 15,
          textAlign: 'center',
        }}
      >
        Code sent to {email}
      </Text>

      {/* 4-digit code input */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
          width: '80%',
        }}
      >
        {code.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            maxLength={1}
            keyboardType="numeric"
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#1C1C1C',
              borderRadius: 10,
              color: '#fff',
              textAlign: 'center',
              fontSize: 24,
            }}
          />
        ))}
      </View>

      {/* Next button */}
      <TouchableOpacity
        onPress={handleNext}
        style={{
          backgroundColor: '#FFD497', // Gold color
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 10,
          marginBottom: 15,
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

      {/* Resend OTP button */}
      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('ForgetStep1')} // Logic for resending OTP can be implemented here
        style={{
          backgroundColor: '#FFBF00', // Gold color
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          Resend OTP
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ForgetStep2;
