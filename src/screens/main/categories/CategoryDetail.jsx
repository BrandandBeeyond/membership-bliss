import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Typography from '../../../components/Typography';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { categoryStyles } from './Style';
import { List, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllMembershipPlans,
  getMymembershipDetail,
} from '../../../redux/actions/MembershipAction';
import { formatDate } from '../../../config/FormatDate';
import Loader from '../../../components/Loader';

const CategoryDetail = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { name, image } = route.params;
  const [expanded, setExpanded] = useState(true);
  const { membershipplans } = useSelector(state => state.membershipplans);
  const { loading,activeMembership } = useSelector(state => state.membershipbookings);

  const hasMembership = Boolean(activeMembership);
  const activePlanId = activeMembership?.membershipPlanId?._id;

  useEffect(() => {
    dispatch(getAllMembershipPlans());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMymembershipDetail());
  }, [dispatch]);

  const gradientMap = {
    green: ['#5A6654', '#2d3628ff'],
    brown: ['#C3905F', '#744d26ff'],
    skyblue: ['#A6DFF1', '#629db0ff'],
  };

  return (
    <ScrollView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: verticalScale(25),
          left: horizontalScale(20),
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: 8,
          borderRadius: 50,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Image
        source={{ uri: image }}
        style={{
          width: '100%',
          height: 300,
          resizeMode: 'cover',
        }}
      />
      
      {loading ? (<Loader/>) : (<>{hasMembership && (
        <>
          <View style={[globalStyle.bgslate, globalStyle.py5]}>
            <View
              style={{
                paddingHorizontal: horizontalScale(30),
                borderRadius: horizontalScale(20),
                overflow: 'hidden',
              }}
            >
              <ImageBackground
                style={[
                  {
                    height: verticalScale(50),
                    marginVertical: verticalScale(5),
                    borderRadius: horizontalScale(15),
                    overflow: 'hidden',
                  },
                ]}
                imageStyle={{ borderRadius: horizontalScale(15) }}
                source={require('../../../../assets/images/bgfarmedition.png')}
                resizeMode="cover"
              >
                <View
                  style={[
                    globalStyle.row,
                    globalStyle.cg15,
                    globalStyle.px20,
                    globalStyle.alignCenter,
                  ]}
                >
                  <Image
                    source={require('../../../../assets/images/crown.png')}
                    style={{
                      height: verticalScale(45),
                      width: horizontalScale(45),
                    }}
                    resizeMode="contain"
                  />
                  <View style={globalStyle.column}>
                    <Typography variant="fthead" weight="SemiBold" color="#fff">
                      {activeMembership?.membershipPlanId.name} Member
                    </Typography>
                    <Typography
                      variant="scaption"
                      weight="SemiBold"
                      color="#fff"
                    >
                      Valid from {formatDate(activeMembership?.startDate)} to{' '}
                      {formatDate(activeMembership?.endDate)}
                    </Typography>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </>
      )}

      <View style={[globalStyle.px20, globalStyle.py20]}>
        <View
          style={[
            globalStyle.row,
            globalStyle.alignCenter,
            globalStyle.justifyBetween,
          ]}
        >
          <Typography variant="h4" color="#4b6144ff" weight="MSemiBold">
            {name}
          </Typography>

          <View
            style={[globalStyle.row, globalStyle.alignCenter, globalStyle.cg20]}
          >
            <Pressable
              style={categoryStyles.iconPill}
              onPress={() =>
                Linking.openURL(
                  'https://www.google.com/maps/place/Touchwood+Bliss+Nature+Retreat/@19.6607727,73.5829163,17z/data=!4m9!3m8!1s0x3bdd847511196047:0x4f1bcb471ac6267b!5m2!4m1!1i2!8m2!3d19.6605353!4d73.5855931!16s%2Fg%2F11b5ys1h9h?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D',
                )
              }
            >
              <Ionicons name="location-outline" size={20} color="#4b6144ff" />
            </Pressable>
            <Pressable
              style={categoryStyles.iconPill}
              onPress={() => Linking.openURL('tel:+9170300 60522')}
            >
              <Ionicons name="call-outline" size={20} color="#4b6144ff" />
            </Pressable>
          </View>
        </View>

        <View style={globalStyle.mt20}>
          {hasMembership ? (
            <>
              <View
                style={[
                  globalStyle.bgslate,
                  globalStyle.p7,
                  {
                    height: verticalScale(45),
                    marginVertical: verticalScale(5),
                    borderRadius: horizontalScale(15),
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#f5f5f5ff',
                  },
                ]}
              >
                <View
                  style={[
                    globalStyle.row,
                    globalStyle.alignCenter,
                    globalStyle.justifyBetween,
                  ]}
                >
                  <View style={[globalStyle.row, globalStyle.cg15]}>
                    <View
                      style={{
                        height: horizontalScale(35),
                        width: horizontalScale(35),
                        backgroundColor: '#505f3bff',
                        borderRadius: horizontalScale(10),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Ionicons
                        name="calendar-clear-outline"
                        color="#fff"
                        size={22}
                      />
                    </View>
                    <View style={globalStyle.column}>
                      <Typography
                        variant="subhead"
                        weight="SemiBold"
                        color="#2c2c2cff"
                      >
                        Arrival Date pending
                      </Typography>
                      <Typography
                        variant="caption"
                        weight="SemiBold"
                        color="#6a6868ff"
                      >
                        Waiting for admin approval
                      </Typography>
                    </View>
                  </View>

                  <FontAwesome6
                    name="angle-right"
                    color="#2c2c2cff"
                    size={20}
                  />
                </View>
              </View>
              <View>
                <ImageBackground
                  style={[
                    {
                      height: verticalScale(45),
                      marginVertical: verticalScale(5),
                      borderRadius: horizontalScale(15),
                      overflow: 'hidden',
                      borderWidth: 1,
                      borderColor: '#cdcdcdff',
                    },
                  ]}
                  imageStyle={{ borderRadius: horizontalScale(15) }}
                  source={require('../../../../assets/images/whitethemebg.png')}
                  resizeMode="cover"
                >
                  <View
                    style={[
                      globalStyle.row,
                      globalStyle.cg10,
                      globalStyle.px5,
                      globalStyle.alignCenter,
                    ]}
                  >
                    <Image
                      source={require('../../../../assets/images/cardvector.png')}
                      style={{
                        height: horizontalScale(60),
                        width: horizontalScale(70),
                      }}
                      resizeMode="contain"
                    />
                    <View style={globalStyle.column}>
                      <Typography
                        variant="subhead"
                        weight="SemiBold"
                        color="#324f2dff"
                      >
                        Request physical membership card
                      </Typography>
                      <Typography
                        variant="scaption"
                        weight="SemiBold"
                        color="#4c5c49ff"
                      >
                        Quick & easy delivery of your physical card
                      </Typography>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </>
          ) : (
            <List.Accordion
              expanded={expanded}
              onPress={() => setExpanded(!expanded)}
              title="Why Choose Nature's Club Membership?"
              titleNumberOfLines={2}
              titleStyle={{
                fontSize: scaleFontSize(16),
                fontWeight: '700',
                color: '#2d532c',
              }}
              style={[
                globalStyle.rounded15,
                { backgroundColor: '#f9fbf8ff', minHeight: verticalScale(40) },
              ]}
            >
              <List.Item
                titleNumberOfLines={300}
                title={
                  <Text
                    style={{ fontSize: 15, lineHeight: 22, color: '#2D2D2D' }}
                  >
                    Because some things in life deserve to be lived{' '}
                    <Text style={{ fontWeight: '700', color: '#2a6f27' }}>
                      slowly.
                    </Text>
                    {'\n\n'}
                    Nature’s Club Membership is thoughtfully created for
                    families who value{' '}
                    <Text style={{ fontWeight: '700' }}>
                      peace, presence and togetherness
                    </Text>{' '}
                    over rush and routine. It is not about discounts or deals,
                    but about meaningful moments in nature, quality time with
                    loved ones and experiences that truly refresh the heart.
                    {'\n\n'}
                    With Nature’s Club, you enjoy{' '}
                    <Text style={{ fontWeight: '700' }}>
                      year-round access
                    </Text>{' '}
                    to nature stays, wellness experiences, joyful celebrations
                    and family-friendly activities — all thoughtfully curated at{' '}
                    <Text style={{ fontWeight: '700', color: '#1c4d1a' }}>
                      Touchwood Bliss.
                    </Text>{' '}
                    Every visit feels familiar, welcoming and personal.
                    {'\n\n'}
                    More than a membership, it is a{' '}
                    <Text style={{ fontWeight: '700' }}>
                      like-minded community
                    </Text>{' '}
                    that chooses calm over chaos and connection over screens.
                    {'\n\n'}
                    If nature feels like home to you,
                    {'\n'}
                    <Text style={{ fontWeight: '700', color: '#2a6f27' }}>
                      this membership was made for you.
                    </Text>
                  </Text>
                }
              />
            </List.Accordion>
          )}
        </View>

        <View
          style={[
            globalStyle.mt20,
            globalStyle.row,
            globalStyle.alignCenter,
            globalStyle.jusifyCenter,
          ]}
        >
          <Image
            source={require('../../../../assets/images/arrow2.png')}
            style={{ height: verticalScale(14), width: horizontalScale(90) }}
          />
          <Typography
            variant="h6"
            color="#4b6144ff"
            weight="MMedium"
            style={globalStyle.mx5}
          >
            Explore Our Editions
          </Typography>
          <Image
            source={require('../../../../assets/images/arrow1.png')}
            style={{ height: verticalScale(14), width: horizontalScale(90) }}
          />
        </View>

        <View style={globalStyle.my20}>
          <View style={[globalStyle.row, globalStyle.cg15]}>
            {membershipplans &&
              membershipplans?.map(plan => {
                const isActive = plan._id === activePlanId;

                return (
                  <Pressable
                    key={plan._id}
                    style={[globalStyle.column, globalStyle.center]}
                    onPress={() =>
                      navigation.navigate('EditionScreen', { plan })
                    }
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={gradientMap[plan.colorScheme]}
                      style={[globalStyle.BoxEdition]}
                    >
                      <Image
                        source={{ uri: plan.thumbnail.url }}
                        style={{
                          width: horizontalScale(60),
                          height: verticalScale(60),
                          resizeMode: 'contain',
                        }}
                      />
                    </LinearGradient>

                    <Typography
                      weight="MMedium"
                      variant="body"
                      color="#212121ff"
                    >
                      {plan.name}
                    </Typography>
                    {isActive && (
                      <View
                        style={{
                          paddingHorizontal: horizontalScale(19),
                          paddingVertical: verticalScale(1),
                          borderRadius: 20,
                          backgroundColor: '#5F7D46',
                        }}
                      >
                        <Typography color="#fff">Active</Typography>
                      </View>
                    )}
                  </Pressable>
                );
              })}
          </View>
        </View>
      </View></>)}

      
    </ScrollView>
  );
};

export default CategoryDetail;
