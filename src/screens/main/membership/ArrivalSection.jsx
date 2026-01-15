import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import LinearGradient from 'react-native-linear-gradient';
import { Image, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Typography from '../../../components/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { requestUserArrivalAction } from '../../../redux/actions/MembershipAction';

const ArrivalSection = ({ booking, setSuccessVisible }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const [loadingRequest, setLoadingRequest] = useState(false);

  const handleDateConfirm = selectedDate => {
    setDate(selectedDate);
    setIsDatePickerVisible(false);
  };

  const formatInputDate = date =>
    date
      ? new Date(date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      : '';

  const handleSubmitArrivalRequest = async () => {
    setLoadingRequest(true);

    try {
      const ISOdate = new Date(date).toISOString();

      const res = await dispatch(
        requestUserArrivalAction(booking._id, ISOdate),
      );

      if (res?.success) {
        setSuccessVisible(true);

        booking.arrivalStatus = 'Pending';
      }
    } catch (error) {
      console.error('error setting arrival date', error);
    } finally {
      setLoadingRequest(false);
    }
  };

  return (
    <>
      {booking.arrivalStatus === 'Approved' ? (
        <>
          {' '}
          <View
            style={{
              borderWidth: horizontalScale(0.5),
              borderColor: '#adadadff',
              backgroundColor: '#f8f8f8',
              borderRadius: horizontalScale(20),
              width: '100%',
              background: 'transparent',
              padding: horizontalScale(10),
              marginTop: verticalScale(30),
            }}
          >
            <View
              style={[
                {
                  borderWidth: horizontalScale(0.5),
                  borderColor: '#adadadff',
                  backgroundColor: '#f1f0f0',
                  borderRadius: horizontalScale(20),
                  width: '100%',
                  background: 'transparent',
                  overflow: 'hidden',
                },
              ]}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[
                  'rgb(101, 122, 94)',
                  'rgb(91, 116, 85)',
                  '#3a5135ff',
                  '#2c3c28ff',
                ]}
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg10,
                  {
                    height: verticalScale(60),
                    padding: verticalScale(10),
                  },
                ]}
              >
                <Image
                  source={require('../../../../assets/images/icons/membership-approve.png')}
                  style={{ width: horizontalScale(90) }}
                  resizeMode="contain"
                />

                <View style={globalStyle.column}>
                  <Typography variant="h6" weight="MSemiBold" color="#d8d8cc">
                    Arrival Status
                  </Typography>
                  <View
                    style={{
                      backgroundColor: 'rgb(211, 214, 194)',
                      width: horizontalScale('100%'),
                      height: verticalScale(20),
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: horizontalScale(20),
                    }}
                  >
                    <Typography
                      style={{ fontSize: scaleFontSize(13) }}
                      color="#323f29ff"
                      weight="MSemiBold"
                    >
                      Approved
                    </Typography>
                  </View>
                </View>
              </LinearGradient>
              <Typography
                style={globalStyle.textCenter}
                variant="h5"
                weight="SemiBold"
                color="#5c4f2f"
              >
                Your Arrival is Approved !
              </Typography>
            </View>
          </View>
        </>
      ) : booking.arrivalStatus === 'Pending' ? (
        <>
          <View
            style={[
              globalStyle.mt20,
              globalStyle.p7,
              {
                borderWidth: horizontalScale(0.5),
                borderColor: '#adadadff',
                borderRadius: horizontalScale(20),
                width: '100%',
                backgroundColor: '#ffffff',
              },
            ]}
          >
            <View
              style={[
                globalStyle.row,
                globalStyle.alignCenter,
                globalStyle.cg10,
              ]}
            >
              <View style={globalStyle.flex}>
                <Typography variant="fthead" color="#4e6c45ff" weight="Bold">
                  Arrival Date Pending for Approval
                </Typography>
                <Typography
                  variant="subline"
                  color="#5c5c5cff"
                  weight="MMedium"
                >
                  Please wait for admin response.your arrival date is waiting to
                  be approved.
                </Typography>
              </View>
              <Image
                source={require('../../../../assets/images/membershipreq.png')}
                style={{
                  height: verticalScale(110),
                  width: horizontalScale(110),
                }}
                resizeMode="contain"
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <View
            style={[
              globalStyle.mt20,
              globalStyle.p7,
              {
                borderWidth: horizontalScale(0.5),
                borderColor: '#adadadff',
                borderRadius: horizontalScale(20),
                width: '100%',
                backgroundColor: '#ffffff',
              },
            ]}
          >
            <View
              style={[
                globalStyle.row,
                globalStyle.alignCenter,
                globalStyle.cg10,
              ]}
            >
              <Image
                source={require('../../../../assets/images/giftbox.png')}
                style={{
                  height: verticalScale(80),
                  width: horizontalScale(80),
                }}
              />
              <View style={globalStyle.flex}>
                <Typography variant="fthead" color="#383838ff" weight="Bold">
                  Congratulations on your membership
                </Typography>
                <Typography
                  variant="subline"
                  color="#5c5c5cff"
                  weight="MMedium"
                >
                  Let us know your arrival date to make your visit smooth &
                  memorable
                </Typography>
              </View>
            </View>

            <TouchableOpacity
              style={globalStyle.my10}
              activeOpacity={0.8}
              onPress={() => setIsDatePickerVisible(true)}
            >
              <TextInput
                left={
                  <TextInput.Icon icon="calendar-check" color="#3b5f34ff" />
                }
                mode="outlined"
                value={formatInputDate(date)}
                placeholder="Select Your Arrival Date"
                editable={false}
                outlineColor="#b0aeaeff"
                activeOutlineColor="#588650ff"
                outlineStyle={{
                  borderRadius: horizontalScale(30),
                }}
                style={{
                  marginBottom: verticalScale(6),
                  height: verticalScale(30),
                  lineHeight: verticalScale(20),
                }}
              />
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              minimumDate={new Date()}
              onConfirm={handleDateConfirm}
              onCancel={() => setIsDatePickerVisible(false)}
            />

            <View style={{ alignItems: 'center' }}>
              <LinearGradient
                colors={['#649361ff', '#457542ff', '#385437ff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: horizontalScale(30),
                  paddingHorizontal: horizontalScale(26),
                  paddingVertical: verticalScale(1),
                  height: verticalScale(28),
                  lineHeight: verticalScale(34),
                }}
              >
                <Button
                  mode="contained"
                  disabled={loadingRequest}
                  loading={loadingRequest}
                  onPress={handleSubmitArrivalRequest}
                  labelStyle={{
                    color: '#ffffff',
                    fontSize: scaleFontSize(13),
                    fontWeight: '600',
                  }}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  Confirm
                </Button>
              </LinearGradient>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default ArrivalSection;
