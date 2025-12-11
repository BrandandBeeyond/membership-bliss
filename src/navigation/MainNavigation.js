import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/main/homescreen/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { verticalScale, horizontalScale } from '../../assets/styles/Scaling';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CategoryScreen from '../screens/main/categories/CategoryScreen';
import MembershipScreen from '../screens/main/membership/MembershipScreen';
import UpdatesScreen from '../screens/main/updates/UpdatesScreen';
import Morescreen from '../screens/main/more/MoreScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import { useSelector } from 'react-redux';
import LoadingScreen from '../screens/Loading/LoadingScreen';
import FAQs from '../screens/more/faqs/FAQs';
import CategoryDetail from '../screens/main/categories/CategoryDetail';
import EditionScreen from '../screens/main/edition/EditionScreen';
import PaymentScreen from '../screens/payment/PaymentScreen';
import CheckoutScreen from '../screens/checkout/CheckoutScreen';

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
      tabBarInactiveTintColor: '#2b2d2aff',
      tabBarActiveTintColor: '#4b6637ff',
      tabBarLabelStyle: { fontSize: 9.5, fontWeight: '600', marginBottom: 5 },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            color={color}
            size={24}
          />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Category"
      component={CategoryScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? 'grid' : 'grid-outline'}
            color={color}
            size={24}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Membership"
      component={MembershipScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? 'accessibility' : 'accessibility-outline'}
            color={color}
            size={24}
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { elevation: 0, shadowOpacity: 0 },
      }}
    />
    <Tab.Screen
      name="updates"
      component={UpdatesScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? 'bookmarks' : 'bookmarks-outline'}
            color={color}
            size={24}
          />
        ),
      }}
    />
    <Tab.Screen
      name="More"
      component={Morescreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? 'apps' : 'apps-outline'}
            color={color}
            size={24}
          />
        ),
        headerTitle: 'MENU',
        headerTitleAlign: 'center',
        headerStyle: { elevation: 0, shadowOpacity: 0 },
      }}
    />
  </Tab.Navigator>
);

export const MainNavigation = () => {
  const { isAuthenticated, user, token } = useSelector(state => state.user);

  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? 'HomeTabs' : 'AuthScreen'}
    >
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

      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
      />

      <Stack.Screen
        name="EditionScreen"
        component={EditionScreen}
        options={{
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FAQs"
        component={FAQs}
        options={({ navigation }) => ({
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: 'center',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ headerTitle: 'Checkout', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerTitle: 'Payment', headerTitleAlign: 'center' }}
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
    backgroundColor: '#f1f5eed0',
    borderTopWidth: 0,
    bottom: verticalScale(30),
    elevation: verticalScale(1),
    borderRadius: horizontalScale(100),
    paddingTop: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
  },
});
