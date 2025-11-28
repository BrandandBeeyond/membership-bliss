import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import MenuTabs from '../../../components/MenuTabs';

const MoreScreen = () => {
  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <View style={globalStyle.mt5}>
        <Typography
          variant="caption"
          color="#656363ff"
          style={globalStyle.mb10}
        >
          General
        </Typography>
        <View style={[globalStyle.column, { columnGap: 15 }]}>
      
          <MenuTabs iconName="user-o" label="Profile" onPress={() => {}} />
          <MenuTabs iconName="information-circle-outline" label="About Us" onPress={() => {}} />
          <MenuTabs iconName="book-outline" label="Bookings" onPress={() => {}} />
          <MenuTabs iconName="headset-outline" label="Contact Us" onPress={() => {}} />
          <MenuTabs iconName="help-circle-outline" label="FAQs" onPress={() => {}} />
         
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
      
          <MenuTabs iconName="shield-checkmark-outline" label="Terms & Conditions" onPress={() => {}} />
          <MenuTabs iconName="log-out-outline" label="Logout" onPress={() => {}} />
          
         
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoreScreen;
