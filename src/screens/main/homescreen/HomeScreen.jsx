import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Image, ScrollView, View } from 'react-native';
import Highlights from '../../../components/highlights/Highlights';
import Topbar from '../../../components/Topbar';
import { TextInput } from 'react-native-paper';
import { HomeScreenStyles } from './Style';
import Swiper from 'react-native-swiper';
import Trending from '../../../components/trending/Trending';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { Routes } from '../../../navigation/Routes';
import { useDispatch, useSelector } from 'react-redux';
import Reviews from '../../../components/reviews/Reviews';
import { getAllMembershipPlans } from '../../../redux/actions/MembershipAction';

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

const reviewData = [
  {
    id: 1,
    customername: 'Harshad Ahire',
    reviewdesc:
      'Touchwood Bliss feels like home, not a resort. Every visit feels personal, warm, and familiar. As members, we truly feel a sense of belonging here.',
  },
  {
    id: 2,
    customername: 'Pankaj jain',
    reviewdesc:
      'The calm, the food, the people — everything heals. From pure vegetarian meals to the peaceful mountain surroundings, Touchwood Bliss helps us reset every time.',
  },
  {
    id: 3,
    customername: 'Raaj Kolte',
    reviewdesc:
      'Best place for family time away from city chaos. No noise, no rush — just nature, open spaces, and meaningful moments together.',
  },
  {
    id: 4,
    customername: 'Aasha dalvi',
    reviewdesc:
      'Nature, warmth, and genuine hospitality define Touchwood Bliss. The staff, the greenery, and the overall vibe make every stay comforting and memorable.',
  },
  {
    id: 5,
    customername: 'Vedant sonje',
    reviewdesc:
      'A place where you truly slow down and reconnect. Mornings feel peaceful, evenings feel calm, and life feels balanced here.',
  },
  {
    id: 6,
    customername: 'Santosh hire',
    reviewdesc:
      'Once you visit, you keep coming back. Touchwood Bliss becomes a part of your life, not just a destination you visit once.',
  },
];

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { membershipplans } = useSelector(state => state.membershipplans);
  const { activeMembership } = useSelector(state => state.membershipbookings);

  const hasMemberShip = Boolean(activeMembership);

  console.log("activemembership is",activeMembership);
  console.log("user has membership ?",hasMemberShip);
  

  useEffect(() => {
    dispatch(getAllMembershipPlans());
  }, [dispatch]);

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
        <View style={[globalStyle.px20, globalStyle.mt10]}>
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
              dot={
                <View
                  style={{
                    backgroundColor: '#a2cda8ff',
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
                    backgroundColor: '#3c5a3fd0',
                    width: 40,
                    height: 8,
                    borderRadius: 5,
                    marginHorizontal: 3,
                  }}
                />
              }
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

          {hasMemberShip ? (
            <>
              <View style={[globalStyle.p7,globalStyle.bgwhite,{elevation:horizontalScale(2)}]}>
                    <Image source={require('../../../../assets/images/icons/activelabel.png')} style={{height:verticalScale(20)}}/>
              </View>
            </>
          ) : (
            <Trending
              data={trendingData}
              onPressTrending={() =>
                navigation.navigate(Routes.EditionScreen, { plan: farmPlan })
              }
            />
          )}

          <Reviews data={reviewData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
