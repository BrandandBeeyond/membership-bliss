import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../../components/Typography';
import { Button, Divider, TextInput } from 'react-native-paper';
import { horizontalScale } from '../../../assets/styles/Scaling';

const AuthScreen = () => {
  const [mobile, setMobile] = useState('');

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <ScrollView
        contentContainerStyle={[
          globalStyle.px20,
          globalStyle.py30,
          globalStyle.mt50,
        ]}
      >
        <Typography
          variant="h4"
          color="#1e1e1eff"
          weight="SemiBold"
          style={globalStyle.mb10}
        >
          Welcome to Touchwood Bliss
        </Typography>
        <Typography
          variant="subtext"
          color="#1e1e1eff"
          style={globalStyle.mb10}
        >
          Login to continue to your membership account
        </Typography>


        <TextInput
          label="Mobile Number"
          mode="outlined"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
          style={[globalStyle.my10,{borderRadius:horizontalScale(25)}]}
          theme={{
            colors:{
              placeholder: '#bbbbbb',
              outline:'#add5aaff',
            }
          }}
        />

        <Button
          mode="contained"
          buttonColor="#2d7828"
          textColor="#fff"
          disabled={mobile.length !== 10}
          style={[globalStyle.mt20,globalStyle.py3,{borderRadius:25}]}
        >
          Continue with OTP
        </Button>
        <View style={{ marginVertical: 50 }}>
          <Divider />
          <Text
            style={{
              textAlign: 'center',
              marginTop: -10,
              backgroundColor: '#fff',
              alignSelf: 'center',
              paddingHorizontal: 10,
              color: '#8c8c8c',
            }}
          >
            OR
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
