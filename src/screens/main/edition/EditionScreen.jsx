import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Swiper from 'react-native-swiper';
import { editionStyle } from './Style';

const EditionScreen = ({ route }) => {
  const { plan } = route.params;

  console.log('selected plan', plan);
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <ScrollView>
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
          {plan?.images?.map(img => (
              <Image
                source={{ uri: img.url }}
                key={img.id}
                style={editionStyle.wrapImage}
              />
            ))}
        </Swiper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditionScreen;
