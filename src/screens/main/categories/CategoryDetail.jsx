import React, { useEffect, useState } from 'react';
import {
  Image,
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
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { categoryStyles } from './Style';
import { List, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMembershipPlans } from '../../../redux/actions/MembershipAction';

const CategoryDetail = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { name, image } = route.params;
  const [expanded, setExpanded] = useState(true);
  const { membershipplans } = useSelector(state => state.membershipplans);

  console.log("membership plans",membershipplans);
  
  useEffect(() => {
    dispatch(getAllMembershipPlans());
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
          <List.Accordion
            expanded={expanded}
            onPress={() => setExpanded(!expanded)}
            title="Why Nature's Club Membership?"
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
              titleStyle={{
                fontSize: scaleFontSize(15),
                lineHeight: verticalScale(22),
                color: '#333',
              }}
              titleNumberOfLines={200}
              title={
                <Text
                  style={{ fontSize: 15, lineHeight: 22, color: '#2D2D2D' }}
                >
                  Unlock{' '}
                  <Text style={{ fontWeight: '700', color: '#2a6f27' }}>
                    10,000+ premium benefits
                  </Text>{' '}
                  — all for just{' '}
                  <Text style={{ fontWeight: '700', color: '#2a6f27' }}>
                    ₹10,000.
                  </Text>
                  {'\n\n'}
                  Nature’s Club isn’t just a membership — it’s a{' '}
                  <Text style={{ fontWeight: '700', color: '#1c4d1a' }}>
                    lifestyle upgrade
                  </Text>{' '}
                  designed for people who love{' '}
                  <Text style={{ fontWeight: '700' }}>nature</Text>,{' '}
                  <Text style={{ fontWeight: '700' }}>wellness</Text>,{' '}
                  <Text style={{ fontWeight: '700' }}>travel</Text> and{' '}
                  <Text style={{ fontWeight: '700' }}>
                    exclusive member-only privileges.
                  </Text>
                </Text>
              }
            />
          </List.Accordion>
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
            {membershipplans && membershipplans?.map(plan => (
                <Pressable
                  key={plan._id}
                  style={[globalStyle.column, globalStyle.center]}
                  onPress={() => navigation.navigate('EditionScreen',{plan})}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={gradientMap[plan.colorScheme]}
                    style={globalStyle.BoxEdition}
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

                  <Typography weight="MMedium" variant="body" color="#212121ff">
                    {plan.name}
                  </Typography>
                </Pressable>
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryDetail;
