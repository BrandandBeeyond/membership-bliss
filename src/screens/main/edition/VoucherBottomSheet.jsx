import React, { act, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import Typography from '../../../components/Typography';
import { Button, Chip } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import {
  checkVoucherReedemtion,
  RequestVoucherRedeem,
} from '../../../redux/actions/VoucherAction';
import VoucherCodeSuccess from './VoucherCodeSuccess';

const VoucherBottomSheet = ({
  refVoucherRBSheet,
  voucher,
  onClose,
  handleNavigateCheckout,
  loadingPayment,
  activeMembership,
  isCurrentEditionActive,
}) => {
  const dispatch = useDispatch();
  const maxQty = useMemo(() => {
    if (!voucher) return 0;
    return Math.max((voucher?.inventory ?? 0) - (voucher?.usedCount ?? 0), 0);
  }, [voucher]);

  const [qty, setQty] = useState(1);
  const [redeemLoading, setRedeemLoading] = useState(false);

  const [pendingRedeemption, setPendingRedeemption] = useState(null);
  const [otpMode, setOtpMode] = useState(false);
  const [otpData, setOtpData] = useState(null); 

  useEffect(() => {
    setQty(1);
    setOtpMode(false);
    setOtpData(null);
    setPendingRedeemption(null);
  }, [voucher]);

  const increment = () => {
    setQty(prev => (prev < maxQty ? prev + 1 : prev));
  };

  const decrement = () => {
    setQty(prev => (prev > 1 ? prev - 1 : prev));
  };

  useEffect(() => {
    if (!voucher || !activeMembership) return;

    dispatch(checkVoucherReedemtion(activeMembership._id, voucher._id)).then(
      res => {
        console.log('res is ', res);

        if (!res) {
          setPendingRedeemption(null);
          setOtpMode(false);
          setOtpData(null);
          return;
        }

        if (res.status === 'Pending') {
          const code = res?.otpCode?.toString();

          setPendingRedeemption({
            redemptionId: res?.redemptionId,
            otpCode: code,
            status: 'Pending',
            expiresAt: res.expiresAt,
          });

          setOtpData(code);
          setOtpMode(true);
        } else {
          setPendingRedeemption(null);
        }
      },
    );
  }, [dispatch, voucher, activeMembership]);

  const handleRedeem = async () => {
    try {
      setRedeemLoading(true);

      const res = await dispatch(
        RequestVoucherRedeem(activeMembership?._id, voucher?._id, qty),
      );

      setOtpData(res?.otpCode?.toString() ?? '');
      setOtpMode(true);

      if (res?.success) {
        setPendingRedeemption({
          redemptionId: res.redemptionId,
          otpCode: res.otpCode,
          status: 'Pending',
        });
      }
    } catch (error) {
      console.log('redeem error', error);
    } finally {
      setRedeemLoading(false);
    }
  };

  if (!voucher) {
    return (
      <RBSheet ref={refVoucherRBSheet} height={200}>
        <View style={[globalStyle.center, { padding: 20 }]}>
          <ActivityIndicator size="small" />
          <Typography style={{ marginTop: 8 }}>Loading voucher…</Typography>
        </View>
      </RBSheet>
    );
  }

  return (
    <RBSheet
      ref={refVoucherRBSheet}
      height={520}
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
      {otpMode || pendingRedeemption ? (
        <VoucherCodeSuccess
          otpCode={otpData}
          setOtpData={setOtpData}
          onClose={onClose}
          pendingRedeemption={pendingRedeemption}
          setPendingRedeemption={setPendingRedeemption}
          expiresAt={pendingRedeemption?.expiresAt}
        />
      ) : (
        <ScrollView
          style={[globalStyle.flex]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[{ padding: horizontalScale(20) }]}>
            <Typography
              variant="fthead"
              weight="MSemiBold"
              color="#4c5d49ff"
              style={[globalStyle.textCenter]}
            >
              {voucher.name}
            </Typography>
          </View>
          <Image
            source={{ uri: voucher.thumbnail?.url }}
            style={{
              width: '100%',
              height: verticalScale(140),
              borderRadius: horizontalScale(15),
              marginVertical: verticalScale(10),
            }}
          />

          <View
            style={[
              globalStyle.row,
              globalStyle.justifyBetween,
              globalStyle.my10,
            ]}
          >
            <View style={[globalStyle.column, globalStyle.jusifyCenter]}>
              <Typography variant="subline" weight="MMedium" color="#343333ff">
                Coupon Quantity
              </Typography>
              <View
                style={[
                  {
                    backgroundColor: '#dbefd3ff',
                    borderRadius: horizontalScale(18),
                    height: verticalScale(27),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: verticalScale(5),
                    width: horizontalScale(90),
                  },
                ]}
              >
                <Typography
                  style={{ fontSize: scaleFontSize(16) }}
                  color="#323f29ff"
                  weight="MSemiBold"
                >
                  {voucher.inventory}
                </Typography>
              </View>
            </View>
            <View style={[globalStyle.column, globalStyle.jusifyCenter]}>
              <Typography variant="subline" weight="MMedium" color="#343333ff">
                Coupon Used
              </Typography>
              <View
                style={[
                  {
                    backgroundColor: '#dbefd3ff',
                    borderRadius: horizontalScale(18),
                    height: verticalScale(27),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: verticalScale(5),
                    width: horizontalScale(90),
                  },
                ]}
              >
                <Typography
                  style={{ fontSize: scaleFontSize(16) }}
                  color="#323f29ff"
                  weight="MSemiBold"
                >
                  {voucher.usedCount}
                </Typography>
              </View>
            </View>
            {isCurrentEditionActive ? (
              <View style={[globalStyle.column, globalStyle.jusifyCenter]}>
                <Typography
                  variant="subline"
                  weight="MMedium"
                  color="#343333ff"
                >
                  Redeem Quantity
                </Typography>
                <View
                  style={[
                    globalStyle.row,
                    globalStyle.alignCenter,
                    { columnGap: horizontalScale(1) },
                  ]}
                >
                  <TouchableOpacity
                    onPress={decrement}
                    style={{
                      backgroundColor: '#dbefd3ff',
                      width: horizontalScale(30),
                      height: verticalScale(27),
                      borderTopLeftRadius: horizontalScale(15),
                      borderBottomLeftRadius: horizontalScale(15),
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: verticalScale(5),
                    }}
                  >
                    <Ionicons name="remove-outline" size={20} color="#000" />
                  </TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: '#dbefd3ff',
                      width: horizontalScale(35),
                      height: verticalScale(27),
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: verticalScale(5),
                    }}
                  >
                    <Typography
                      style={{ fontSize: scaleFontSize(16) }}
                      color="#323f29ff"
                      weight="MSemiBold"
                    >
                      {qty}
                    </Typography>
                  </View>
                  <TouchableOpacity
                    onPress={increment}
                    style={{
                      backgroundColor: '#dbefd3ff',
                      width: horizontalScale(30),
                      height: verticalScale(27),
                      borderTopRightRadius: horizontalScale(15),
                      borderBottomRightRadius: horizontalScale(15),
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: verticalScale(5),
                    }}
                  >
                    <Ionicons name="add-outline" size={20} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={[globalStyle.column, globalStyle.jusifyCenter]}>
                <Typography
                  variant="subline"
                  weight="MMedium"
                  color="#343333ff"
                >
                  Total Available
                </Typography>
                <View
                  style={[
                    {
                      backgroundColor: '#dbefd3ff',
                      borderRadius: horizontalScale(18),
                      height: verticalScale(27),
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: verticalScale(5),
                      width: horizontalScale(90),
                    },
                  ]}
                >
                  <Typography
                    style={{ fontSize: scaleFontSize(16) }}
                    color="#323f29ff"
                    weight="MSemiBold"
                  >
                    {voucher.inventory - voucher.usedCount}
                  </Typography>
                </View>
              </View>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: horizontalScale(12),
              marginVertical: verticalScale(24),
            }}
          >
            <Button
              mode="outlined"
              onPress={onClose}
              textColor="#2b3527ff"
              style={{
                flex: 1,
                borderRadius: 30,
                height: verticalScale(35),
                justifyContent: 'center',
              }}
              labelStyle={{
                fontSize: scaleFontSize(16),
                fontWeight: '600',
              }}
            >
              Cancel
            </Button>

            <LinearGradient
              colors={['#649361ff', '#457542ff', '#385437ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: horizontalScale(30),
                paddingHorizontal: horizontalScale(18),
                paddingVertical: verticalScale(1),
                width: '50%',
                height: verticalScale(35),
                lineHeight: verticalScale(40),
              }}
            >
              {isCurrentEditionActive ? (
                <Button
                  mode="contained"
                  disabled={redeemLoading}
                  loading={redeemLoading}
                  onPress={handleRedeem}
                  labelStyle={{
                    color: '#ffffff',
                    fontSize: scaleFontSize(16),
                    lineHeight: verticalScale(18),
                    fontWeight: '600',
                  }}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  Redeem
                </Button>
              ) : (
                <Button
                  mode="contained"
                  disabled={loadingPayment}
                  loading={loadingPayment}
                  onPress={handleNavigateCheckout}
                  labelStyle={{
                    color: '#ffffff',
                    fontSize: scaleFontSize(16),
                    lineHeight: verticalScale(18),
                    fontWeight: '600',
                  }}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  Buy Now
                </Button>
              )}
            </LinearGradient>
          </View>
        </ScrollView>
      )}
    </RBSheet>
  );
};

export default VoucherBottomSheet;
