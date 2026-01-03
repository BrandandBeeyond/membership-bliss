import React from 'react';
import { Modal, View } from 'react-native';
import { Button } from 'react-native-paper';
import { globalStyle } from '../../../assets/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../assets/styles/Scaling';
import Typography from '../Typography';
import LinearGradient from 'react-native-linear-gradient';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SuccessPopup = ({ visible, onClose, title, message }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={[
          globalStyle.flex,
          globalStyle.jusifyCenter,
          globalStyle.alignCenter,
          {
            backgroundColor: 'rgba(0,0,0,0.8)',
          },
        ]}
      >
        <View
          style={[
            globalStyle.column,
            globalStyle.cg15,
            {
              width: horizontalScale(280),
              backgroundColor: '#ffffff',
              borderRadius: horizontalScale(20),
              padding: horizontalScale(20),
            },
          ]}
        >
          <View style={globalStyle.alignCenter}>
            <IonIcons name="checkmark-circle" size={60} color="#34412aff" />
          </View>
          <View style={[globalStyle.column, globalStyle.mt10]}>
            <Typography
              variant="h6"
              weight="Bold"
              color="#2d2d2d"
              style={{ marginBottom: verticalScale(8) }}
            >
              {title}
            </Typography>

            <Typography
              variant="subline"
              weight="MMedium"
              color="#555555"
              style={{
                marginBottom: verticalScale(20),
              }}
            >
              {message}
            </Typography>
            <LinearGradient
              colors={['#649361ff', '#457542ff', '#385437ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: horizontalScale(30),
                paddingHorizontal: horizontalScale(10),
                paddingVertical: verticalScale(1),
                height: verticalScale(28),
                lineHeight: verticalScale(34),
              }}
            >
              <Button
                mode="contained"
                onPress={onClose}
                labelStyle={{
                  color: '#ffffff',
                  fontSize: scaleFontSize(13),
                  fontWeight: '600',
                }}
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                OK
              </Button>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessPopup;
