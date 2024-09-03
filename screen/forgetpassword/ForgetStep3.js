import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgetStep3 = (props) => {
  const { email } = props.route.params; // Retrieve the email from the previous screen
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordReset = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    console.log(email);
    console.log(password);

    try {
      const response = await fetch('https://zoahmusicbackend.onrender.com/api/resetpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Your password has been reset.');
        props.navigation.navigate('Login'); // Replace 'SomeNextScreen' with the actual next screen
      } else {
        Alert.alert('Error', data.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000', padding: 20 }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('ForgetStep2')} style={{ marginBottom: 20 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 10 }}>Back</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Image
          source={require('../assests/logo.png')}
          style={{ width: 250, height: 100, marginTop: 100 }}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, marginBottom: 10 }}>
          Create a Password
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <TextInput
            style={{ flex: 1, color: '#FFFFFF', height: 50 }}
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ padding: 10 }}
          >
            <Icon name="eye" size={20} color="#FFD497" style={{ marginRight: 10 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, marginBottom: 10 }}>
          Confirm Password
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <TextInput
            style={{ flex: 1, color: '#FFFFFF', height: 50 }}
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ padding: 10 }}
          >
            <Icon name="eye" size={20} color="#FFD497" style={{ marginRight: 10 }} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={handlePasswordReset}
        style={{
          backgroundColor: '#FFD497',
          borderRadius: 10,
          alignItems: 'center',
          paddingVertical: 15,
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#000000', fontSize: 18 }}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgetStep3;
