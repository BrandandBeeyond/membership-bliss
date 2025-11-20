import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/main/homescreen/HomeScreen';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {verticalScale, horizontalScale } from '../../assets/styles/Scaling';
import { StyleSheet, TouchableOpacity } from 'react-native';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const CustomBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginRight: 20, marginLeft: 10 }}
    >
      <FontAwesome6 name="arrow-left-long" color={'#000000'} size={20} />
    </TouchableOpacity>
  );
};

// Bottom Tabs
const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: '#4b6637ff',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" color={color} size={24} />
        ),
        headerShown: false,
      }}
    />

 
  </Tab.Navigator>
);

// MAIN NAVIGATION
export const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      
    </Stack.Navigator>
  );
};

// STYLES
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 65,
    alignItems: 'center',
    backgroundColor: '#f1f7edd0',
    borderTopWidth: 0,
    bottom: verticalScale(30),
    elevation: verticalScale(1),
    borderRadius: horizontalScale(100),
    paddingTop: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
  },
});
