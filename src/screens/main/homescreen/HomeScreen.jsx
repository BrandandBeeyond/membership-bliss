import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { ScrollView, Text, View } from 'react-native';
import Typography from '../../../components/Typography';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyle.px20}>
      <ScrollView>
        <Typography variant="h1" weight="Bold" color="#333">
          Welcome to the Home Screen
        </Typography>
        <Typography
          variant="body"
          weight="Regular"
          color="#666"
          style={{ marginTop: 10 }}
        >
          This is the main landing page of the app.
        </Typography>
        <Text>Hello</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
