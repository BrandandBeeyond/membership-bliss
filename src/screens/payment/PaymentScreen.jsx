import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import Typography from '../../components/Typography';

const PaymentScreen = ({ route }) => {
  const { plan } = route.params;

  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.px20, globalStyle.bgwhite]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[globalStyle.row, globalStyle.alignCenter, globalStyle.cg20,{borderWidth:horizontalScale(1),borderColor:'#cbcbcbff',borderRadius:horizontalScale(12),padding:horizontalScale(5)}]}
        >
          <Image
            source={{ uri: plan.images?.[1]?.url }}
            style={{ width: horizontalScale(70), height: verticalScale(40),borderRadius:horizontalScale(12) }}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
