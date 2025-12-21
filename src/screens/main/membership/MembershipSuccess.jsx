import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { ScrollView, View } from 'react-native';
import Typography from '../../../components/Typography';
import LottieView from 'lottie-react-native';
import { Button, Card, Divider } from 'react-native-paper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';

const MembershipSuccess = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <ScrollView>
        <View
          style={[
            globalStyle.dflex,
            globalStyle.jusifyCenter,
            globalStyle.alignCenter,
            globalStyle.mt50,
          ]}
        >
          <LottieView
            source={require('../../../asset/loader/Success.json')}
            style={{ width: horizontalScale(170), height: verticalScale(170) }}
            autoPlay
          />
        </View>

        <View
          style={[
            globalStyle.dflex,
            globalStyle.jusifyCenter,
            globalStyle.alignCenter,
          ]}
        >
          <Typography variant="h4" weight="SemiBold" color="#374034ff">
            Membership Booked Successfully!
          </Typography>
        </View>
        <Card
          mode="outlined"
          style={[
            globalStyle.px5,
            { marginTop: verticalScale(20), borderColor: '#7ca97aff', elevation: 3 },
          ]}
        >
          <Card.Content>
            <Typography variant="subhead" weight="MSemiBold" color="#383737ff">
              Wed 18 Dec
            </Typography>
          </Card.Content>
          <Divider
            style={[globalStyle.my5, { marginHorizontal: horizontalScale(6) }]}
          />
          <Card.Content>
            <View
              style={[
                globalStyle.row,
                globalStyle.cg10,
                globalStyle.alignCenter,
              ]}
            >
              <Typography
                variant="subtext"
                weight="MSemiBold"
                color="#383737ff"
              >
                BookingId -
              </Typography>
              <Typography variant="subtext" weight="MMedium" color="#383737ff">
                TWB- 52441488
              </Typography>
            </View>

            <Typography variant="subtext" weight="MSemiBold" color="#383737ff">
              Booking Details{' '}
            </Typography>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-start',marginVertical:verticalScale(10) }}>
            <Button
              mode="outlined"
  
              style={{ borderRadius: horizontalScale(15), borderColor: '#2d532c', height: verticalScale(35),lineHeight: verticalScale(20) }}
              labelStyle={{
                color: '#2d532c',
                fontWeight: '600',
                fontSize: scaleFontSize(12),
              }}
            >
              Get Digital Membership Card
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 20, right: 20, left: 20 }}>
        <Button
          mode="contained"
          contentStyle={{ height: 50 }}
          style={{ borderRadius: 10, backgroundColor: '#2d532c' }}
          labelStyle={{ color: '#fff', fontWeight: '600' }}
        >
          Go to Bookings
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default MembershipSuccess;
