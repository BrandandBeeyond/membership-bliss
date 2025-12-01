import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import { membershipScreenStyle } from './Style';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import CrownIcon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useRef } from 'react';

const MembershipScreen = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView
      style={[globalStyle.px20, globalStyle.flex, globalStyle.bgwhite]}
    >
      <View style={[membershipScreenStyle.memberCard]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#4b6144ff', '#465f3fff', '#3a5135ff', '#2c3c28ff']}
          style={membershipScreenStyle.background}
        >
          <View
            style={[
              globalStyle.row,
              globalStyle.justifyBetween,
              globalStyle.alignCenter,
            ]}
          >
            <Typography variant="body" color="#ffffff" weight="normal">
              No Membership
            </Typography>
            <View style={membershipScreenStyle.bgwhitePadding10Radius}>
              <UserIcon name="user-o" color="#6d6969ff" size={30} />
            </View>
          </View>

          <View style={[globalStyle.row, globalStyle.cg20, globalStyle.mt10]}>
            <Typography variant="small" color="#ffffff" weight="normal">
              Valid {'\n'} From --
            </Typography>
            <Typography variant="small" color="#ffffff" weight="normal">
              Valid {'\n'} To --
            </Typography>
          </View>
        </LinearGradient>
      </View>

      <View
        style={[globalStyle.dflex, globalStyle.alignCenter, globalStyle.mt20]}
      >
        <Button
          mode="contained"
          style={[
            globalStyle.rounded10,
            { backgroundColor: '#202b1d', width: '40%' },
          ]}
          onPress={() => refRBSheet.current.open()}
        >
          <View
            style={[globalStyle.row, globalStyle.alignCenter, globalStyle.cg5]}
          >
            <Typography variant="body" color="#fff" weight="normal">
              Join Now
            </Typography>
            <CrownIcon name="flash-outline" color="#fff" size={20} />
          </View>
        </Button>

        <RBSheet
          ref={refRBSheet}
          height={450}
          useNativeDriver={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 20,
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}
          customModalProps={{
            animationType: 'slide',
            statusBarTranslucent: true,
          }}
          customAvoidingViewProps={{
            enabled: false,
          }}
        >
            <View style={globalStyle.py20}>
                <Typography variant='h2' color='#000' weight='normal'>Hello</Typography>
            </View>
        </RBSheet>
      </View>
    </SafeAreaView>
  );
};

export default MembershipScreen;
