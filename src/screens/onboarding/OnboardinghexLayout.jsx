import HexagonImage from '../../components/hexagon/HexagonImage';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';

const OnboardinghexLayout = () => {
  return (
    <View style={styles.container}>
      {/* Top hexagon */}
      <View style={styles.top1}>
        <HexagonImage
          uri={require('../../../assets/images/hex2.jpg')}
          size={horizontalScale(90)}
        />
      </View>

      {/* Center big hexagon */}
      <View style={styles.center}>
        <HexagonImage
          uri={require('../../../assets/images/hex1.jpg')}
          size={horizontalScale(160)}
        />
      </View>

      {/* Right hexagon */}
      <View style={styles.right}>
        <HexagonImage
          uri={require('../../../assets/images/hex3.png')}
          size={horizontalScale(90)}
        />
      </View>
      <View style={styles.right2}>
        <HexagonImage
          uri={require('../../../assets/images/rootscafe.jpg')}
          size={horizontalScale(90)}
        />
      </View>

      {/* Bottom hexagon */}
      <View style={styles.bottom}>
        <HexagonImage
          uri={require('../../../assets/images/amoravilla.jpg')}
          size={horizontalScale(90)}
        />
      </View>
    </View>
  );
};

export default OnboardinghexLayout;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(260),
  },
  top1: {
    position: 'absolute',
    top: verticalScale(-8),
    left: horizontalScale(-70),
  },
  center: {
    position: 'absolute',
    left: horizontalScale(-150),
  },
  right: {
    position: 'absolute',
    right: horizontalScale(-110),
    top: verticalScale(50),
  },
  right2: {
    position: 'absolute',
    right: horizontalScale(-110),
    top: verticalScale(140),
  },
  bottom: {
    position: 'absolute',
    bottom: verticalScale(-8),
    left: horizontalScale(-70),
  },
});
