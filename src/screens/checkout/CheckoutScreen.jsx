import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const CheckoutScreen = () => {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');

  return (
   <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={globalStyle.flex}
      >
        <ScrollView 
          contentContainerStyle={{ padding: 20, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >

          {/* Full Name */}
          <TextInput
            label="Full Name"
            mode="outlined"
            value={fullname}
            onChangeText={setFullname}
            style={{ marginBottom: 15 }}
          />

          {/* Email */}
          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={{ marginBottom: 15 }}
          />

          {/* Phone */}
          <TextInput
            label="Phone"
            mode="outlined"
            keyboardType="number-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
            style={{ marginBottom: 15 }}
          />

          {/* DOB */}
          <TextInput
            label="Date of Birth (DD/MM/YYYY)"
            mode="outlined"
            keyboardType="numeric"
            value={dob}
            onChangeText={setDob}
            style={{ marginBottom: 15 }}
          />

          {/* Gender */}
          <TextInput
            label="Gender"
            mode="outlined"
            value={gender}
            onChangeText={setGender}
            style={{ marginBottom: 15 }}
          />

          {/* City */}
          <TextInput
            label="City"
            mode="outlined"
            value={city}
            onChangeText={setCity}
            style={{ marginBottom: 15 }}
          />

        </ScrollView>

        {/* Sticky Bottom Button */}
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            left: 20,
          }}
        >
          <Button
            mode="contained"
            onPress={() => console.log('Proceed')}
            contentStyle={{ height: 50 }}
            style={{
              borderRadius: 10,
              backgroundColor: '#2d532c',
            }}
            labelStyle={{
              fontSize: 16,
              fontWeight: '600',
              color: '#fff',
            }}
          >
            Proceed
          </Button>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
