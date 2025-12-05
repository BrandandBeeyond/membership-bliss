import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Swiper from 'react-native-swiper';

const FarmEdition = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <ScrollView>
        <View style={[globalStyle.px20, globalStyle.mt10]}>
          <Swiper
            autoplay={true}
            showsPagination={true}
            autoplayTimeout={3}
            height={250}
            dot={
              <View
                style={{
                  backgroundColor: '#ccc',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginHorizontal: 3,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  marginHorizontal: 3,
                }}
              />
            }
          >
            {/* {product?.images?.map(img => (
              <Imag
                source={{ uri: img.url }}
                key={img.id}
                style={ProductDetailStyle.wrapImage}
              />
            ))} */}
          </Swiper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FarmEdition;
