import React, { useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Swiper from 'react-native-swiper';
import { editionStyle } from './Style';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../../components/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getMembershipPlanOffers } from '../../../redux/actions/MembershipAction';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ValueVoucherScreen from './ValueVoucherScreen';
import DiscountVoucherScreen from './DiscountVoucherScreen';

const Tab = createMaterialTopTabNavigator();

const EditionScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { plan } = route.params;

  const { offers, loading } = useSelector(state => state.membershipplans);

  useEffect(() => {
    if (plan._id) {
      dispatch(getMembershipPlanOffers(plan._id));
    }
  }, [dispatch, plan]);

  console.log('this is the plan offers', offers);

  const valueVouchers = offers.filter(item => item.type === 'value') || [];
  const discountVouchers =
    offers.filter(item => item.type === 'discount') || [];

  // const benefitIcons = [
  //   require('../../../../assets/images/nature.png'),
  //   require('../../../../assets/images/invitation.png'),
  //   require('../../../../assets/images/meditation.png'),
  //   require('../../../../assets/images/platform.png'),
  //   require('../../../../assets/images/discount.png'),
  // ];

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <View style={globalStyle.flex}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              top: verticalScale(25),
              left: horizontalScale(20),
              zIndex: 10,
              backgroundColor: 'rgba(0,0,0,0.4)',
              padding: 8,
              borderRadius: 50,
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={[globalStyle.relative]}>
            <Swiper
              autoplay={true}
              showsPagination={true}
              autoplayTimeout={3}
              height={260}
              dot={
                <View
                  style={{
                    backgroundColor: '#ccc',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 3,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: '#75976bff',
                    width: 20,
                    height: 8,
                    borderRadius: 5,
                    marginHorizontal: 3,
                  }}
                />
              }
            >
              {plan?.images?.map(img => (
                <View style={globalStyle.relative} key={img.id}>
                  <Image
                    source={{ uri: img.url }}
                    style={editionStyle.wrapImage}
                  />
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.6)']}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: verticalScale(150),
                    }}
                  />
                </View>
              ))}
            </Swiper>
            <View style={editionStyle.wrapLogo}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#172113ff', '#202e1aeb', '#2d4124ca']}
                style={globalStyle.BoxEdition}
              >
                <Image
                  source={require('../../../../assets/images/natures-club-membershiplogo.png')}
                  style={{
                    width: horizontalScale(80),
                    height: verticalScale(80),
                    resizeMode: 'contain',
                  }}
                />
              </LinearGradient>
            </View>
          </View>

          <View
            style={[globalStyle.px20, globalStyle.mtmin40, globalStyle.center]}
          >
            <Typography variant="h3" weight="MSemiBold" color="#2d532c">
              {plan.name}
            </Typography>
            <Typography variant="h6" weight="MMedium" color="#303330ff">
              By Touchwood Bliss
            </Typography>
            <Typography variant="body" weight="Medium" color="#303330ff">
              India's 1st & Only Family wellness membership
            </Typography>

            <View style={globalStyle.my10}>
              <Image
                source={require('../../../../assets/images/blisslogo.png')}
                style={{
                  height: verticalScale(100),
                  width: horizontalScale(100),
                  resizeMode: 'contain',
                }}
              />
            </View>

            <View style={[globalStyle.mt20, globalStyle.center]}>
              <Typography variant="h4" weight="MSemiBold" color="#2d532c">
                Explore Benefits
              </Typography>

              {/* <View
              style={[
                globalStyle.row,
                globalStyle.mt10,
                globalStyle.flexWrap,
                globalStyle.jusifyCenter,
                {backgroundColor: '#fafff9ff',padding:horizontalScale(10),borderRadius:horizontalScale(14)}
              ]}
            >
              {plan?.benefits?.map((item, index) => (
                <View
                  key={index}
                  style={[
                    globalStyle.column,
                    globalStyle.alignCenter,
                    globalStyle.my5,
                    globalStyle.jusifyCenter,
                    globalStyle.textCenter,
                    {  width: '50%' },
                  ]}
                >
                  <Image
                    source={benefitIcons[index]}
                    style={{ width: horizontalScale(40), height: verticalScale(40) }}
                    resizeMode="contain"
                  />

                  <Typography variant="subtext" weight="Medium" color="#303330ff" style={globalStyle.textCenter} >
                    {item}
                  </Typography>
                </View>
              ))}
            </View> */}
            </View>
          </View>
        </ScrollView>

        <View style={{ flex: 1, marginTop: verticalScale(-100) }}>
          <Tab.Navigator
            style={globalStyle.px20}
            screenOptions={{
              tabBarStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderRadius: horizontalScale(12),
                borderWidth: horizontalScale(1),
                borderColor: '#2d532c',
                height: verticalScale(30),
              },
              tabBarItemStyle: {
                height: verticalScale(30),
                justifyContent: 'center',
              },
              tabBarLabelStyle: {
                marginTop: verticalScale(-3),
                fontSize: scaleFontSize(14),
                paddingVertical: 0,
              },

              // 🎯 ACTIVE / INACTIVE COLORS
              tabBarActiveTintColor: '#ffffff',
              tabBarInactiveTintColor: '#2d532c',

              tabBarIndicatorStyle: {
                backgroundColor: '#305830ff',
                height: '100%',
                borderRadius: horizontalScale(12),
              },
            }}
          >
            <Tab.Screen
              name="Value Vouchers"        
            >
               {()=><ValueVoucherScreen valueVouchers={valueVouchers}/>}
            </Tab.Screen>
            <Tab.Screen
              name="Discount Vouchers"
              
              initialParams={{ discountVouchers }}
            >
               {()=><DiscountVoucherScreen discountVouchers={discountVouchers}/>}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditionScreen;
