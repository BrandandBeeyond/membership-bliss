import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
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
import {
  getMembershipPlanOffers,
  getMymembershipDetail,
} from '../../../redux/actions/MembershipAction';
import ValueVoucherScreen from './ValueVoucherScreen';
import DiscountVoucherScreen from './DiscountVoucherScreen';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Button } from 'react-native-paper';
import VoucherBottomSheet from './VoucherBottomSheet';

const EditionScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { plan } = route.params;

  const [loadingPayment, setLoadingPayment] = useState(false);
  const [activeTab, setActiveTab] = useState('value');
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const refRBSheet = useRef();
  const refVoucherRBSheet = useRef();

  const { isAuthenticated } = useSelector(state => state.user);
  const { activeMembership } = useSelector(state => state.membershipbookings);
  const { offers, loading } = useSelector(state => state.membershipplans);

  const hasMembership = Boolean(activeMembership);
  const isCurrentEditionActive =
    hasMembership && activeMembership?.membershipPlanId === plan._id;

  useEffect(() => {
    if (plan._id) {
      dispatch(getMembershipPlanOffers(plan._id));
    }
  }, [dispatch, plan]);

  useEffect(() => {
    dispatch(getMymembershipDetail());
  }, [dispatch]);

  const valueVouchers = offers.filter(item => item.type === 'value') || [];
  const discountVouchers =
    offers.filter(item => item.type === 'discount') || [];

  const handleNavigateCheckout = () => {
    if (!isAuthenticated) {
      navigation.navigate('AuthScreen', { redirectTo: 'CheckoutScreen', plan });
      return;
    }

    setLoadingPayment(true);

    setTimeout(() => {
      navigation.navigate('CheckoutScreen', { plan });
      setLoadingPayment(false);
    }, 1500);
  };

  const openVoucherBottomSheet = (voucherItem, imageUrl) => {
    setSelectedVoucher({
      ...voucherItem,
      thumbnail: { url: imageUrl },
    });

    requestAnimationFrame(() => {
      if (refVoucherRBSheet.current) {
        refVoucherRBSheet.current.open();
      }
    });
  };

  const closeVoucherBottomSheet = () => {
    refVoucherRBSheet.current.close();
    setSelectedVoucher(null);
  };
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <View style={globalStyle.flex}>
        <FlatList
          data={[{ key: 'content' }]}
          renderItem={null}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
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

              {/* IMAGE SWIPER */}
              <View style={globalStyle.relative}>
                <Swiper
                  autoplay
                  showsPagination
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

                {/* LOGO */}
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

              {/* PLAN INFO */}
              <View
                style={[
                  globalStyle.px20,
                  globalStyle.mtmin40,
                  globalStyle.center,
                ]}
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

                <Typography variant="h4" weight="MSemiBold" color="#2d532c">
                  Explore Benefits
                </Typography>
              </View>

              {/* TABS */}
              <View
                style={[globalStyle.px20, { marginTop: verticalScale(20) }]}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
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
                      paddingVertical: verticalScale(6),
                    }}
                    onPress={() => setActiveTab('value')}
                  >
                    <Typography
                      variant="body"
                      weight="MSemiBold"
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
                      paddingVertical: verticalScale(6),
                    }}
                    onPress={() => setActiveTab('discount')}
                  >
                    <Typography
                      variant="body"
                      weight="MSemiBold"
                      color={activeTab === 'discount' ? '#fff' : '#2d532c'}
                      style={globalStyle.textCenter}
                    >
                      Discount Vouchers
                    </Typography>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          }
          ListFooterComponent={
            <View
              style={[
                globalStyle.px20,
                globalStyle.mt20,
                { paddingBottom: 100 },
              ]}
            >
              {activeTab === 'value' ? (
                <ValueVoucherScreen
                  openVoucherBottomSheet={openVoucherBottomSheet}
                  valueVouchers={valueVouchers}
                />
              ) : (
                <DiscountVoucherScreen
                  openVoucherBottomSheet={openVoucherBottomSheet}
                  discountVouchers={discountVouchers}
                />
              )}
            </View>
          }
        />
      </View>

      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={{
          position: 'absolute',
          right: horizontalScale(0),
          top: '60%',
          transform: [{ translateY: -25 }],
          borderWidth: 2,
          borderColor: '#4c5d49ff',
          backgroundColor: '#fff',
          paddingVertical: verticalScale(5),
          paddingHorizontal: horizontalScale(16),
          borderTopLeftRadius: horizontalScale(15),
          borderBottomLeftRadius: horizontalScale(15),
          zIndex: 20,
        }}
      >
        <Typography variant="h6" color="#4c5d49ff" weight="MSemiBold">
          T & C
        </Typography>
      </TouchableOpacity>

      {!isCurrentEditionActive && (
        <Button
          mode="contained"
          onPress={handleNavigateCheckout}
          loading={loadingPayment}
          disabled={loadingPayment}
          contentStyle={{ height: verticalScale(36) }}
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
      )}

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
      <VoucherBottomSheet
        loadingPayment={loadingPayment}
        refVoucherRBSheet={refVoucherRBSheet}
        voucher={selectedVoucher}
        handleNavigateCheckout={handleNavigateCheckout}
        activeMembership={activeMembership}
        isCurrentEditionActive={isCurrentEditionActive}
        onClose={closeVoucherBottomSheet}
      />
    </SafeAreaView>
  );
};

export default EditionScreen;
