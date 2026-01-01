import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { FlatList, Image, ScrollView, View } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import Typography from '../../../components/Typography';
import { Card, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMembership } from '../../../redux/actions/MembershipAction';
import { formatDate } from '../../../config/FormatDate';
import LinearGradient from 'react-native-linear-gradient';

const Bookings = () => {
  const dispatch = useDispatch();
  const { userbookings } = useSelector(state => state.membershipbookings);

  useEffect(() => {
    dispatch(getUserMembership());
  }, [dispatch]);

  const membershipImages = {
    'Farm Edition': require('../../../../assets/images/blissview.jpg'),
  };

  const renderItem = ({ item }) => {
    const planName = item.membershipPlanId?.name;

    const planImage = membershipImages[planName];

    return (
      <View
        style={[
          globalStyle.column,
          globalStyle.bgwhite,

          {
            borderRadius: horizontalScale(15),
            elevation: 2,
            padding: horizontalScale(12),
          },
        ]}
      >
        <Typography variant="h6" weight="SemiBold" color="#2d2d2dff">
          {item.membershipPlanId.categoryId.name} - {item.membershipPlanId.name}
        </Typography>
        <View style={[globalStyle.row, globalStyle.cg15, globalStyle.mt10]}>
          <Image
            source={planImage}
            style={{
              width: horizontalScale(120),
              height: verticalScale(70),
              borderRadius: horizontalScale(20),
            }}
            resizeMode="cover"
          />

          <View style={globalStyle.column}>
            <View style={[globalStyle.row, globalStyle.alignCenter]}>
              <Typography variant="subtitle" weight="Medium" color="#3d3d3dff">
                Booking Id -
              </Typography>
              <Typography
                variant="subtitle"
                weight="SemiBold"
                color="#252525ff"
              >
                {item.membershipNumber}
              </Typography>
            </View>
            <View
              style={[
                globalStyle.row,
                globalStyle.alignCenter,
                globalStyle.cg10,
              ]}
            >
              <Typography
                style={{ fontSize: scaleFontSize(13) }}
                weight="Medium"
                color="#3d3d3dff"
              >
                {formatDate(item.startDate)} -
              </Typography>
              <Typography
                style={{ fontSize: scaleFontSize(13) }}
                weight="Medium"
                color="#252525ff"
              >
                {formatDate(item.endDate)}
              </Typography>
            </View>

            <View style={[globalStyle.mt8, globalStyle.row, globalStyle.cg10]}>
              <LinearGradient
                colors={['#649361ff', '#457542ff', '#385437ff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: horizontalScale(10),
                  paddingHorizontal: horizontalScale(6),
                  paddingVertical: verticalScale(1),
                }}
              >
                <Chip
                  style={{ backgroundColor: 'transparent', color: '#ffffff' }}
                  textStyle={{ color: '#ffffff' }}
                >
                  Confirmed
                </Chip>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgslate]}>
      <View style={[globalStyle.px20, globalStyle.mt10]}>
        <Typography
          variant="h5"
          color="#454444ff"
          weight="MMedium"
          style={{ marginTop: verticalScale(6) }}
        >
          View and manage your upcoming stays
        </Typography>
      </View>

      <FlatList
        data={userbookings}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Bookings;
