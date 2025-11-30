import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Image, ScrollView, View } from 'react-native';
import Highlights from '../../../components/highlights/Highlights';
import Topbar from '../../../components/Topbar';
import { Searchbar } from 'react-native-paper';
import { HomeScreenStyles } from './Style';
import Swiper from 'react-native-swiper';

const dummyHighLights = [
  {
    id: 1,
    title: 'Rooms',
    image: require('../../../../assets/images/amoravilla.jpg'),
  },
  {
    id: 2,
    title: 'Flavours bliss',
    image: require('../../../../assets/images/amoravilla.jpg'),
  },
  {
    id: 3,
    title: 'Roots Cafe',
    image: require('../../../../assets/images/rootscafe.jpg'),
  },
  {
    id: 4,
    title: 'Pool',
    image: require('../../../../assets/images/pool.jpg'),
  },
];

const bannerData = [
  {
    id: 1,
    image: require('../../../../assets/images/courtyard.webp'),
  },
  {
    id: 2,
    image: require('../../../../assets/images/amoravilla.jpg'),
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <View style={globalStyle.px20}>
        <Topbar navigation={navigation} />
        <Searchbar
          placeholder="Search"
          style={{
            backgroundColor: '#fcf9f9ff',
            borderColor: '#d9ebcfff',
            borderWidth: 1,
          }}
        />
      </View>

      <ScrollView>
        <View style={globalStyle.px20}>
          <View>
            <Highlights
              data={dummyHighLights}
              onPressHighlight={item =>
                navigation.navigate('HighlightDetailScreen', { item })
              }
            />
          </View>
        </View>

        <View style={[globalStyle.my10]}>
          <Swiper
            autoplay={true}
            showsPagination={true}
            autoplayTimeout={3}
            showPagination={false}
            height={300}
          >
            {bannerData.map((item, index) => (
              <Image
                key={index}
                source={item.image}
                style={HomeScreenStyles.imageBanner}
                resizeMode="cover"
              />
            ))}
          </Swiper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
