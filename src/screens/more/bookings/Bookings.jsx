import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { FlatList, Image, ScrollView, View } from 'react-native';
import { verticalScale } from '../../../../assets/styles/Scaling';
import Typography from '../../../components/Typography';
import { Card, Chip } from 'react-native-paper';

const Bookings = () => {
  const renderItem = ({ item }) => (
    <Card
      style={{
        borderRadius: 20,
        marginBottom: verticalScale(16),
        backgroundColor: '#ffffff',
        elevation: 3,
      }}
    >
      <Image
        source={item.image}
        style={{
          height: verticalScale(140),
          width: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />

      <View style={{ padding: 14 }}>
        <Typography variant="h6" weight="SemiBold" color="#1c1c1c">
          {item.title}
        </Typography>

        <Typography variant="caption" color="#6b6b6b" style={{ marginTop: 4 }}>
          Booking ID: {item.bookingId}
        </Typography>

        <View
          style={[
            globalStyle.row,
            globalStyle.justifyBetween,
            { marginTop: verticalScale(12) },
          ]}
        >
          <View>
            <Typography variant="caption" color="#6b6b6b">
              Stay Date
            </Typography>
            <Typography variant="subtext" weight="MSemiBold">
              {item.date}
            </Typography>
          </View>

          <View>
            <Typography variant="caption" color="#6b6b6b">
              Duration
            </Typography>
            <Typography variant="subtext" weight="MSemiBold">
              {item.nights}
            </Typography>
          </View>

          <Chip
            style={{
              backgroundColor:
                item.status === 'Confirmed' ? '#e8f3eb' : '#f2f2f2',
              alignSelf: 'center',
            }}
            textStyle={{
              color: item.status === 'Confirmed' ? '#2f7a4a' : '#5c5c5c',
              fontWeight: '600',
            }}
          >
            {item.status}
          </Chip>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={[globalStyle.flex, { backgroundColor: '#f7f7f7' }]}>
      <View style={[globalStyle.px20, globalStyle.mt10]}>
        <Typography variant="h4" weight="SemiBold" color="#1c1c1c">
          My Bookings
        </Typography>

        <Typography
          variant="body"
          color="#6b6b6b"
          style={{ marginTop: verticalScale(6) }}
        >
          View and manage your upcoming stays
        </Typography>
      </View>

      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
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
