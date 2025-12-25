import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Typography from '../../../components/Typography';

import WhatsNewTab from './WhatsNewTab';
import RetreatsEventsTab from './RetreatsEventsTab';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';

const Tab = createMaterialTopTabNavigator();

const UpdatesScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgslate]}>
      {/* Header */}
      <View style={styles.header}>
        <Typography variant="h6" color="#424d3eff" weight="MSemiBold">
          Stay informed with what’s happening at our retreat
        </Typography>
      </View>

      {/* Tabs */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          screenContainerStyle: {
            backgroundColor: '#ffffff',
          },
          tabBarItemStyle: {
            borderRadius: horizontalScale(40),
          },
          tabBarLabelStyle: {
            fontSize: scaleFontSize(13),
            paddingVertical: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#2f5f2f',
            height: '80%',
            marginVertical: verticalScale(3),
            marginHorizontal: horizontalScale(4),
            borderRadius: horizontalScale(40),
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#2f4f2f',
          tabBarPressOpacity: 1,
        }}
      >
        <Tab.Screen
          name="WhatsNew"
          component={WhatsNewTab}
          options={{ title: 'What’s New' }}
        />
        <Tab.Screen
          name="Retreats"
          component={RetreatsEventsTab}
          options={{ title: 'Retreats & Events' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default UpdatesScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
  subText: {
    color: '#5f6f5f',
    marginTop: 4,
  },
  tabBar: {
    marginHorizontal: horizontalScale(13),
    borderRadius: horizontalScale(60),
    backgroundColor: '#ffffff',
    padding: horizontalScale(3),
  },
  tabItem: {
    borderRadius: horizontalScale(40),
  },
});
