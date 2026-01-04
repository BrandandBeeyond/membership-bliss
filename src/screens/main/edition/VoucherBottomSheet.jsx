import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
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

const VoucherBottomSheet = ({ refVoucherRBSheet, voucher, onClose }) => {
  if (!voucher) return null;

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
            <Chip
              style={{
                backgroundColor: '#b9d4afff',
                borderRadius: horizontalScale(18),
                height: verticalScale(27),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: verticalScale(5),
              }}
              contentstyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              textStyle={{
                color: '#1f3d1f',
                fontSize: scaleFontSize(18),
                fontWeight: '600',
              }}
            >
              {voucher.inventory}
            </Chip>
          </View>
          <View style={[globalStyle.column, globalStyle.jusifyCenter]}>
            <Typography variant="subline" weight="MMedium" color="#343333ff">
              Coupon Used
            </Typography>
            <Chip
              style={{
                backgroundColor: '#b9d4afff',
                borderRadius: horizontalScale(18),
                height: verticalScale(27),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: verticalScale(5),
              }}
              contentstyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              textStyle={{
                color: '#1f3d1f',
                fontSize: scaleFontSize(18),
                fontWeight: '600',
              }}
            >
              {voucher.usedCount}
            </Chip>
          </View>
          <View style={[globalStyle.column, globalStyle.jusifyCenter]}>
            <Typography variant="subline" weight="MMedium" color="#343333ff">
              Total Available
            </Typography>
            <Chip
              style={{
                backgroundColor: '#b9d4afff',
                borderRadius: horizontalScale(18),
                height: verticalScale(27),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: verticalScale(5),
              }}
              contentstyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              textStyle={{
                color: '#1f3d1f',
                fontSize: scaleFontSize(18),
                fontWeight: '600',
                textalign: 'center',
              }}
            >
              {voucher.inventory - voucher.usedCount}
            </Chip>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: horizontalScale(12),
            marginTop: verticalScale(24),
          }}
        >
          <TouchableOpacity
            onPress={onClose}
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#2b3527ff',
              borderRadius: 30,
              height:verticalScale(35),
              lineHeight:verticalScale(45),
              alignItems: 'center',
            }}
          >
            <Typography style={{fontSize:scaleFontSize(18)}} color="#2b3527ff">Cancel</Typography>
          </TouchableOpacity>

          <LinearGradient
            colors={['#649361ff', '#457542ff', '#385437ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: horizontalScale(30),
              paddingHorizontal: horizontalScale(18),
              paddingVertical: verticalScale(1),
              width:'50%',
              height: verticalScale(35),
              lineHeight: verticalScale(40),
            }}
          >
            <Button
              mode="contained"
              labelStyle={{
                color: '#ffffff',
                fontSize: scaleFontSize(16),
                lineHeight:verticalScale(18),
                fontWeight: '600',
              }}
              style={{
                backgroundColor: 'transparent',
              }}
            >
               Buy Now
            </Button>
          </LinearGradient>
        </View>
      </ScrollView>
    </RBSheet>
  );
};

export default VoucherBottomSheet;
