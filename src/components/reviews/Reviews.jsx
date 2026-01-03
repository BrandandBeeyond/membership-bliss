import React from 'react';
import { Image, View } from 'react-native';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../Typography';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Reviews = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={globalStyle.reviewcard}>
        <View style={[globalStyle.column]}>
          <View
            style={[globalStyle.row, globalStyle.cg20, globalStyle.alignCenter]}
          >
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/userreview.png')}
              style={{ height: verticalScale(30), width: horizontalScale(30) }}
            />
            <View style={globalStyle.column}>
              <Typography variant="subtext" color="#000" weight="MSemiBold" style={{textWrap:'wrap'}}>
                {item.customername}
              </Typography>
              <Image
                source={require('../../../assets/images/rating.png')}
                style={{
                  height: verticalScale(13),
                  width: horizontalScale(40),
                }}
                resizeMode="contain"
              />
            </View>
          </View>

          <Typography variant="subline" weight="MMedium" color="#444444ff">
            {item.reviewdesc}
          </Typography>
        </View>
      </View>
    );
  };
  return (
    <View style={[globalStyle.relative, globalStyle.mt20]}>
      <Typography variant="h5" weight="Bold">
        User Reviews
      </Typography>

      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        showPagination={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={globalStyle.mt10}
       
      />
    </View>
  );
};

export default Reviews;
