import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import Typography from '../../components/Typography';
import { Button, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const PaymentScreen = ({ route }) => {
  const { buyerdetails, membershipdetails } = route.params;

  const plan = membershipdetails;

  const [loadingPayment, setLoadingPayment] = useState(false);

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
