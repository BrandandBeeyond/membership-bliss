import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Image, ScrollView, View } from 'react-native';
import Highlights from '../../../components/highlights/Highlights';
import Topbar from '../../../components/Topbar';
import { Searchbar } from 'react-native-paper';
import { HomeScreenStyles } from './Style';
import Swiper from 'react-native-swiper';
import Trending from '../../../components/trending/Trending';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { Routes } from '../../../navigation/Routes';
import { useSelector } from 'react-redux';

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

const trendingData = [
  {
    id: 1,
    title: "Nature's Club farm edition",
    description:
      'Embark on a journey of togetherness, wellness and unforgettable memories!',
    thumbnail: require('../../../../assets/images/natures-club.png'),
  },
];

const HomeScreen = ({ navigation }) => {
  const { membershipplans } = useSelector(state => state.membershipplans);

  const farmPlan = membershipplans.find(plan => plan.name === 'Farm Edition');
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgslate]}>
      <View style={[globalStyle.px20, globalStyle.my20]}>
        <Topbar navigation={navigation} />
        <Searchbar
          placeholder="Search"
          style={{
            backgroundColor: '#ffffff',
            borderColor: '#d9ebcfff',
            borderWidth: horizontalScale(1),
            borderRadius: horizontalScale(20),
          }}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyle.px20}>
          <View style={[globalStyle.bgwhite, globalStyle.cardShadow]}>
            <Highlights
              data={dummyHighLights}
              onPressHighlight={item =>
                navigation.navigate('HighlightDetailScreen', { item })
              }
            />
          </View>
        </View>

        <View style={[globalStyle.px20, { paddingBottom: verticalScale(100) }]}>
          <View style={[globalStyle.mt8]}>
            <Swiper
              autoplay={true}
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
          <Trending
            data={trendingData}
            onPressTrending={() =>
              navigation.navigate(Routes.EditionScreen, { plan: farmPlan })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
