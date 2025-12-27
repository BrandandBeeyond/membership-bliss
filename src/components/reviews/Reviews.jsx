import React from 'react';
import { Image, View } from 'react-native';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../Typography';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';

const Reviews = () => {
  return (
    <View style={[globalStyle.relative, globalStyle.mt20]}>
      <Typography variant="h5" weight="Bold">
        User Reviews
      </Typography>

      <View style={globalStyle.reviewcard}>
        <View style={[globalStyle.column]}>
          <View style={[globalStyle.row, globalStyle.cg10,globalStyle.alignCenter]}>
            <Image
               resizeMode='contain'
              source={require('../../../assets/images/user.png')}
              style={{ height: verticalScale(30), width: horizontalScale(30) }}
            />
            <Typography variant='subhead' color='#000' weight='MSemiBold'>Mr mark</Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Reviews;
