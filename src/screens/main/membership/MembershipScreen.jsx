import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import { membershipScreenStyle } from './Style';
import UserIcon from 'react-native-vector-icons/FontAwesome'

const MembershipScreen = () => {
  return (
    <SafeAreaView
      style={[globalStyle.px20, globalStyle.flex, globalStyle.bgwhite]}
    >
      <View style={[membershipScreenStyle.memberCard]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#87c483ff', '#5ca656ff', '#458f40ff','#2d7828ff']}
          style={membershipScreenStyle.background}
        >
          <View
            style={[
              globalStyle.row,
              globalStyle.justifyBetween,
              globalStyle.alignCenter,
            ]}
          >
            <Typography variant="body" color="#ffffff" weight='normal'>
              No Membership
            </Typography>
            <View style={membershipScreenStyle.bgwhitePadding10Radius}>
            <UserIcon name="user-o" color="#6d6969ff" size={30}/>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default MembershipScreen;
