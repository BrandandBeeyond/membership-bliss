import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Image, ScrollView, View } from 'react-native';
import Highlights from '../../../components/highlights/Highlights';
import Topbar from '../../../components/Topbar';
import { Searchbar, TextInput } from 'react-native-paper';
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
    image: require('../../../../assets/images/slider1.jpg'),
  },
  {
    id: 2,
    image: require('../../../../assets/images/slider2.jpg'),
  },
  {
    id: 3,
    image: require('../../../../assets/images/slider3.jpg'),
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
      <View style={[globalStyle.px20]}>
        <Topbar navigation={navigation} />
        <TextInput
          mode="outlined"
          left={<TextInput.Icon icon="magnify" />}
          placeholder="Search"
          style={{
            marginTop: verticalScale(5),
            marginBottom: verticalScale(10),
            height: verticalScale(35),
            lineHeight: verticalScale(25),
            backgroundColor: '#ffffff',
          }}
          outlineColor="#c2e4bdff"
          activeOutlineColor="#588650ff"
          outlineStyle={{
            borderRadius: horizontalScale(15),
          }}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[globalStyle.px20,globalStyle.mt10]}>
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
                  resizeMode="contain"
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
