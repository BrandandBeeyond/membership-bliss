import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Swiper from 'react-native-swiper';
import { editionStyle } from './Style';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../../components/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getMembershipPlanOffers } from '../../../redux/actions/MembershipAction';
import ValueVoucherScreen from './ValueVoucherScreen';
import DiscountVoucherScreen from './DiscountVoucherScreen';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Button } from 'react-native-paper';

const EditionScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { plan } = route.params;

  const [loadingPayment, setLoadingPayment] = useState(false);
  const [activeTab, setActiveTab] = useState('value');
  const refRBSheet = useRef();
  const { offers, loading } = useSelector(state => state.membershipplans);

  useEffect(() => {
    if (plan._id) {
      dispatch(getMembershipPlanOffers(plan._id));
    }
  }, [dispatch, plan]);

  const valueVouchers = offers.filter(item => item.type === 'value') || [];
  const discountVouchers =
    offers.filter(item => item.type === 'discount') || [];

  const handleNavigatePayment = () => {
    setLoadingPayment(true);

    setTimeout(() => {
      navigation.navigate('PaymentScreen', { plan });
      setLoadingPayment(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <View style={globalStyle.flex}>
        <ScrollView showsHorizontalScrollIndicator={false}>
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
            </View>
          </View>

          <View
            style={[
              globalStyle.px20,
              { marginTop: verticalScale(20), marginBottom: verticalScale(60) },
            ]}
          >
            <View
              style={{
                flexDirection: 'row',
                borderWidth: horizontalScale(1),
                borderColor: '#2d532c',
                borderRadius: horizontalScale(13),
                overflow: 'hidden',
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor:
                    activeTab === 'value' ? '#305830ff' : 'transparent',
                  paddingVertical: verticalScale(3),
                }}
                onPress={() => setActiveTab('value')}
              >
                <Typography
                  weight="MSemiBold"
                  variant="body"
                  color={activeTab === 'value' ? '#fff' : '#2d532c'}
                  style={globalStyle.textCenter}
                >
                  Value Vouchers
                </Typography>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor:
                    activeTab === 'discount' ? '#305830ff' : 'transparent',
                  paddingVertical: verticalScale(3),
                }}
                onPress={() => setActiveTab('discount')}
              >
                <Typography
                  weight="MSemiBold"
                  variant="body"
                  style={globalStyle.textCenter}
                  color={activeTab === 'discount' ? '#fff' : '#2d532c'}
                >
                  Discount Vouchers
                </Typography>
              </TouchableOpacity>
            </View>

            <View style={globalStyle.mt20}>
              {activeTab === 'value' ? (
                <ValueVoucherScreen valueVouchers={valueVouchers} />
              ) : (
                <DiscountVoucherScreen discountVouchers={discountVouchers} />
              )}
            </View>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={{
          position: 'absolute',
          right: horizontalScale(0),
          top: '60%',
          transform: [{ translateY: -25 }],
          backgroundColor: '#4c5d49ff',
          paddingVertical: verticalScale(8),
          paddingHorizontal: horizontalScale(16),
          borderTopLeftRadius: horizontalScale(15),
          borderBottomLeftRadius: horizontalScale(15),
          zIndex: 20,
          elevation: 5,
        }}
      >
        <Typography variant="body" color="#fff" weight="MSemiBold">
          T & C
        </Typography>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={handleNavigatePayment}
        loading={loadingPayment} 
        disabled={loadingPayment} 
        style={[
          globalStyle.rounded10,
          editionStyle.buynow,
          { backgroundColor: '#fff', width: '36%' },
        ]}
        labelStyle={{ color: '#4c5d49ff' }}
      >
        {!loadingPayment && (
          <Typography variant="body" color="#4c5d49ff" weight="MSemiBold">
            Buy Now
          </Typography>
        )}
      </Button>

      <LinearGradient
        pointerEvents="none"
        colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.7)']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: verticalScale(120),
        }}
      />

      <RBSheet
        ref={refRBSheet}
        height={600}
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
        <View style={[globalStyle.py20, globalStyle.px10]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 20 }}
          >
            <Typography
              variant="h4"
              color="#000"
              weight="normal"
              style={globalStyle.textCenter}
            >
              Membership Terms & Guidelines
            </Typography>

            <View style={globalStyle.mt10}>
              {plan.policyDetails.map((item, index) => (
                <View
                  style={[globalStyle.row, globalStyle.cg5, globalStyle.mb10]}
                  key={item._id}
                >
                  <Typography
                    variant="caption"
                    weight="MMedium"
                    color="#393838ff"
                    style={{ marginRight: 6 }}
                  >
                    {index + 1}.
                  </Typography>
                  <Typography
                    variant="caption"
                    weight="MMedium"
                    color="#464646ff"
                    style={{ flex: 1, flexWrap: 'wrap' }}
                  >
                    {item.title}
                  </Typography>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default EditionScreen;
