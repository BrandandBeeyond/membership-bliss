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
import LoadingScreen from '../screens/Loading/LoadingScreen';
import FAQs from '../screens/more/faqs/FAQs';
import CategoryDetail from '../screens/main/categories/CategoryDetail';
import EditionScreen from '../screens/main/edition/EditionScreen';
import PaymentScreen from '../screens/payment/PaymentScreen';
import CheckoutScreen from '../screens/checkout/CheckoutScreen';
import MembershipSuccess from '../screens/main/membership/MembershipSuccess';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import AppEntryScreen from '../screens/appflow/AppEntryScreen';
import AboutScreen from '../screens/more/about/AboutScreen';
import ContactScreen from '../screens/more/contact/ContactScreen';
import ProfileScreen from '../screens/more/profile/ProfileScreen';
import Signupscreen from '../screens/auth/Signupscreen';
import OtpScreen from '../screens/auth/otp/OtpScreen';
import Termsandconditions from '../screens/more/security/Termsandconditions';
import Privacypolicy from '../screens/more/security/Privacypolicy';
import Bookings from '../screens/more/bookings/Bookings';

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
      name="MembershipScreen"
      component={MembershipScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? 'accessibility' : 'accessibility-outline'}
            color={color}
            size={24}
          />
        ),
        headerTitle: 'Membership',
        headerTitleAlign: 'center',
        headerStyle: { elevation: 0, shadowOpacity: 0 },
      }}
    />
    <Tab.Screen
      name="Updates"
      component={UpdatesScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? 'bookmarks' : 'bookmarks-outline'}
            color={color}
            size={24}
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { elevation: 0, shadowOpacity: 0 },
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
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppEntryScreen"
        component={AppEntryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
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
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: '#fdfcf8',
          },
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signupscreen"
        component={Signupscreen}
        options={{
          headerTitle: 'Sign Up',
          headerTitleAlign: 'center',
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
        name="Bookings"
        component={Bookings}
        options={({ navigation }) => ({
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: 'center',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          headerTitle: () => null,
          headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerTitle: 'Payment', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="MembershipSuccess"
        component={MembershipSuccess}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={({ navigation }) => ({
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: 'center',
          headerTitle: 'About Us',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: 'center',
          headerTitle: 'My Profile',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={({ navigation }) => ({
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: 'center',
          headerTitle: 'Contact Us',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Termsandconditions"
        component={Termsandconditions}
        options={({ navigation }) => ({
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: 'center',
          headerTitle: 'Terms & Conditions',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Privacypolicy"
        component={Privacypolicy}
        options={({ navigation }) => ({
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: 'center',
          headerTitle: 'Privacy Policy',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
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
