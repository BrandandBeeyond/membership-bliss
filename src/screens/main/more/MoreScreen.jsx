import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import MenuTabs from '../../../components/MenuTabs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/actions/UserAction';
import { persistor } from '../../../redux/store';

const MoreScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();

      dispatch(logoutUser());

      persistor.purge();


      navigation.reset({
        index: 0,
        routes: [{ name: 'AuthScreen' }],
      });
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <View style={globalStyle.mt10}>
        <Typography
          variant="caption"
          color="#656363ff"
          style={globalStyle.mb10}
        >
          General
        </Typography>
        <View style={[globalStyle.column, { columnGap: 15 }]}>
          <MenuTabs iconName="user-o" label="Profile" onPress={() => {}} />
          <MenuTabs
            iconName="information-circle-outline"
            label="About Us"
            onPress={() => {}}
          />
          <MenuTabs
            iconName="book-outline"
            label="Bookings"
            onPress={() => {}}
          />
          <MenuTabs
            iconName="headset-outline"
            label="Contact Us"
            onPress={() => {}}
          />
          <MenuTabs
            iconName="help-circle-outline"
            label="FAQs"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={globalStyle.mt10}>
        <Typography
          variant="caption"
          color="#656363ff"
          style={globalStyle.mb10}
        >
          Security
        </Typography>
        <View style={[globalStyle.column, { columnGap: 15 }]}>
          <MenuTabs
            iconName="shield-checkmark-outline"
            label="Terms & Conditions"
            onPress={() => {}}
          />
          <MenuTabs
            iconName="log-out-outline"
            label="Logout"
            onPress={handleLogout}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoreScreen;
