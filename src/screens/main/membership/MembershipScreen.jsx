import {SafeAreaView} from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';
import {globalStyle} from '../../../../assets/styles/globalStyle';
import {membershipScreenStyle} from './Style';

const MembershipScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.px20,globalStyle.flex,globalStyle.bgwhite]}>
      <View style={[membershipScreenStyle.memberCard,globalStyle.bgTheme]}>
           <View style={[globalStyle.row,globalStyle.justifyBetween,globalStyle.alignCenter]}>
                 <Typography variant='body' color='#000000ff'>No Membership</Typography>
           </View>
      </View>
    </SafeAreaView>
  );
};

export default MembershipScreen;
