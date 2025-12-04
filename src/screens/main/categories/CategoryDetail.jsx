import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
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

const CategoryDetail = ({ route }) => {
  const navigation = useNavigation();
  const { name, image } = route.params;
  const [expanded, setExpanded] = useState(true);

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
          <Typography variant="h4" color="#4b6144ff" weight="700">
            {name}
          </Typography>

          <View
            style={[globalStyle.row, globalStyle.alignCenter, globalStyle.cg20]}
          >
            <View style={categoryStyles.iconPill}>
              <Ionicons name="location-outline" size={25} color="#4b6144ff" />
            </View>
            <View style={categoryStyles.iconPill}>
              <Ionicons name="call-outline" size={25} color="#4b6144ff" />
            </View>
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
              { backgroundColor: '#eef2ebff', minHeight: verticalScale(48) },
            ]}
          >
            <List.Item
              titleStyle={{
                fontSize: 15,
                lineHeight: 22,
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
      </View>
    </ScrollView>
  );
};

export default CategoryDetail;
