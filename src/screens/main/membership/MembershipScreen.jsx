import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, View } from 'react-native';
import Typography from '../../../components/Typography';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import { membershipScreenStyle } from './Style';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator, Button, MD2Colors } from 'react-native-paper';
import CrownIcon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useEffect, useRef, useState } from 'react';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMembershipPlans } from '../../../redux/actions/MembershipAction';
import { useNavigation } from '@react-navigation/native';

const MembershipScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const refMemberships = useRef();
  const { membershipplans, loading } = useSelector(
    state => state.membershipplans,
  );

  const [buttonLoading, setButtonLoading] = useState(null);

  useEffect(() => {
    dispatch(getAllMembershipPlans());
  }, [dispatch]);

  const gradientMap = {
    green: ['#5A6654', '#2d3628ff'],
    brown: ['#C3905F', '#744d26ff'],
    skyblue: ['#A6DFF1', '#629db0ff'],
  };

  const handleBookNow = plan => {
    setButtonLoading(plan._id);

    setTimeout(() => {
      refMemberships.current?.close();
      setButtonLoading(null);
      navigation.navigate('EditionScreen', { plan });
    }, 2000);
  };

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
          onPress={() => refMemberships.current.open()}
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
          ref={refMemberships}
          height={550}
          useNativeDriver={false}
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[globalStyle.py20, globalStyle.px10]}>
              <Typography
                variant="h4"
                color="#2d532c"
                weight="MSemiBold"
                style={globalStyle.textCenter}
              >
                Choose Edition
              </Typography>
            </View>

            {loading ? (
              <>
                <ActivityIndicator
                  color={MD2Colors.green600}
                  animating={true}
                />
              </>
            ) : (
              <>
                {membershipplans.map(plan => {
                  return (
                    <View
                      style={[
                        membershipScreenStyle.editionCard,
                        globalStyle.row,
                        globalStyle.mb20,
                        { columnGap: horizontalScale(60) },
                      ]}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={gradientMap[plan.colorScheme]}
                        style={globalStyle.BoxEditionU}
                      >
                        <Image
                          source={{ uri: plan.thumbnail.url }}
                          style={{
                            width: horizontalScale(45),
                            height: verticalScale(45),
                            resizeMode: 'contain',
                          }}
                        />
                      </LinearGradient>

                      <View>
                        <Typography
                          variant="h6"
                          weight="MSemiBold"
                          color="#465346ff"
                        >
                          {plan.name}
                        </Typography>

                        <Button
                          onPress={() => handleBookNow(plan)}
                          mode="contained"
                          loading={buttonLoading === plan._id}
                          disabled={buttonLoading === plan._id}
                          contentStyle={{
                            height: verticalScale(24),
                          }}
                          style={{
                            backgroundColor: '#5A6654',
                            width: horizontalScale(100),
                            alignSelf: 'flex-start',
                            borderRadius: 6,
                          }}
                          labelStyle={{
                            fontSize: scaleFontSize(12),
                            textTransform: 'none',
                            color:'#fff'
                          }}
                        >
                          Book now
                        </Button>
                      </View>
                    </View>
                  );
                })}
              </>
            )}
          </ScrollView>
        </RBSheet>
      </View>

      <LinearGradient
        pointerEvents="none"
        colors={[
          'transparent',
          'rgba(247, 252, 246, 0.4)',
          'rgba(231, 241, 229, 0.4)',
          'rgba(195, 215, 191, 0.46)',
          'rgba(218, 238, 212, 0.55)',
        ]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: verticalScale(190),
        }}
      />

      <Image
        source={require('../../../../assets/images/bottomplant2.png')}
        style={{
          position: 'absolute',
          bottom: verticalScale(0),
          left: horizontalScale('50%'),
          height: verticalScale(150),
          zIndex: 222,
          objectFit: 'contain',
          transform: [{ rotate: '65deg' }],
        }}
      />
      <Image
        source={require('../../../../assets/images/bottomplant2.png')}
        style={{
          position: 'absolute',
          bottom: verticalScale(0),
          left: horizontalScale(140),
          height: verticalScale(150),
          zIndex: 222,
          objectFit: 'contain',
          transform: [{ scaleX: -1 }, { rotate: '15deg' }],
        }}
      />
    </SafeAreaView>
  );
};

export default MembershipScreen;
