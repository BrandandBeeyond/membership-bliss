import React, { use, useState } from 'react';
import { Alert, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import Typography from '../../components/Typography';
import { Button, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import {
  createMembershipBooking,
  createPaymentOrder,
} from '../../redux/actions/MembershipAction';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { buyerdetails, membershipdetails } = route.params;

  const plan = membershipdetails;

  const [loadingPayment, setLoadingPayment] = useState(false);

  const handleMembershipPayment = async () => {
    try {
      setLoadingPayment(true);

      const orderData = await dispatch(
        createPaymentOrder(plan.price),
      );

      console.log('pay Order Data:', orderData);

      if (!orderData) {
        Alert.alert('Error', 'Failed to create order');
        return;
      }

      const options = {
        key: 'rzp_test_D7EJNKkg5iH19i',
        description: 'Payment for Membership booking',
        currency: 'INR',
        amount: orderData.amount,
        order_id: orderData.id,
        prefill: {
          name: buyerdetails.fullname,
          email: buyerdetails.email,
          contact: buyerdetails.phone,
        },
        theme: { color: '#4c5d49ff' },
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
        },
      };
      console.log('Step 2: Opening Razorpay Checkout...');
      RazorpayCheckout.open(options)
        .then(async response => {
          console.log('Payment success:', response);

          const bookingPayload = {
            membershipPlanId: plan._id,
            razorpay_orderId: orderData.id,
            razorpay_paymentId: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            memberDetails: buyerdetails,
          };

          const booking = await dispatch(
            createMembershipBooking(bookingPayload),
          );

          Alert.alert('Success', 'Membership booked successfully!');

          console.log('Membership booking successful:', booking);

          navigation.replace('MembershipSuccess', { booking });
        })
        .catch(error => {
          console.error('Razorpay Checkout Error:', error);
          Alert.alert('Payment Failed', 'Transaction was not completed.');
        });
    } catch (error) {
      console.error('Membership payment error:', error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoadingPayment(false);
    }
  };

  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.px20, globalStyle.bgwhite]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Typography
          color="#2f2e2eff"
          variant="h5"
          weight="MSemiBold "
          style={globalStyle.mb20}
        >
          Step 2: Payment
        </Typography>
        <View
          style={[
            globalStyle.row,
            globalStyle.alignCenter,
            globalStyle.cg20,
            {
              borderWidth: horizontalScale(1),
              borderColor: '#cbcbcbff',
              borderRadius: horizontalScale(12),
              padding: horizontalScale(5),
            },
          ]}
        >
          <Image
            source={{ uri: plan.images?.[1]?.url }}
            style={{
              width: horizontalScale(70),
              height: verticalScale(40),
              borderRadius: horizontalScale(12),
            }}
          />
          <View style={globalStyle.column}>
            <Typography variant="fthead" color="#2d532c" weight="MSemiBold">
              {plan.categoryId.name} {plan.name}
            </Typography>
            <Typography variant="body" color="#556355ff" weight="MMedium">
              Rs. {plan.price}
            </Typography>
          </View>
        </View>

        <View style={[globalStyle.mt20, globalStyle.relative]}>
          <TextInput
            label="Enter Promo code"
            mode="outlined"
            placeholder="Promo Code (Optional)"
            outlineColor="#b0aeaeff"
            activeOutlineColor="#588650ff"
            outlineStyle={{
              borderRadius: horizontalScale(12),
            }}
            style={[
              { height: verticalScale(40), borderRadius: horizontalScale(55) },
            ]}
          />

          <TouchableOpacity style={globalStyle.applyBtn}>
            <Typography variant="h6" weight="MSemiBold" color="#588650ff">
              APPLY
            </Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View
        style={[
          globalStyle.px20,
          globalStyle.row,
          globalStyle.alignCenter,
          {
            position: 'absolute',
            bottom: verticalScale(25),
            left: horizontalScale(25),
            width: '100%',
            justifyContent: 'space-between',
            zIndex: 22,
          },
        ]}
      >
        <View style={globalStyle.column}>
          <Typography variant="subtext" weight="MSemiBold" color="#000">
            Total
          </Typography>
          <Typography variant="fthead" weight="MMedium" color="#486743ff">
            Rs. {plan.price}
          </Typography>
        </View>

        <Button
          onPress={handleMembershipPayment}
          mode="contained"
          loading={loadingPayment}
          disabled={loadingPayment}
          contentStyle={{ height: verticalScale(36) }}
          style={[globalStyle.rounded10, { backgroundColor: '#4c5d49ff' }]}
          labelStyle={{ color: '#fff' }}
        >
          {!loadingPayment && (
            <Typography variant="body" color="#fff" weight="MSemiBold">
              Pay now
            </Typography>
          )}
        </Button>
      </View>

      <LinearGradient
        pointerEvents="none"
        colors={[
          'transparent',
          'rgba(232, 255, 226, 0.4)',
          'rgba(188, 218, 181, 0.4)',
        ]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: verticalScale(100),
        }}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;
