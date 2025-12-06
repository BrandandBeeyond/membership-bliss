import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Swiper from 'react-native-swiper';
import { editionStyle } from './Style';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../../components/Typography';

const EditionScreen = ({ route, navigation }) => {
  const { plan } = route.params;

  const benefitIcons = [
    require('../../../../assets/images/nature.png'),
    require('../../../../assets/images/invitation.png'),
    require('../../../../assets/images/meditation.png'),
    require('../../../../assets/images/platform.png'),
    require('../../../../assets/images/discount.png'),
  ];

  console.log('selected plan', plan);
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <ScrollView>
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
        <View style={[globalStyle.relative]}>
          <Swiper
            autoplay={true}
            showsPagination={true}
            autoplayTimeout={3}
            height={260}
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
                  backgroundColor: '#75976bff',
                  width: 20,
                  height: 8,
                  borderRadius: 5,
                  marginHorizontal: 3,
                }}
              />
            }
          >
            {plan?.images?.map(img => (
              <View style={globalStyle.relative} key={img.id}>
                <Image
                  source={{ uri: img.url }}
                  style={editionStyle.wrapImage}
                />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: verticalScale(150),
                  }}
                />
              </View>
            ))}
          </Swiper>
          <View style={editionStyle.wrapLogo}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#172113ff', '#202e1aeb', '#2d4124ca']}
              style={globalStyle.BoxEdition}
            >
              <Image
                source={require('../../../../assets/images/natures-club-membershiplogo.png')}
                style={{
                  width: horizontalScale(80),
                  height: verticalScale(80),
                  resizeMode: 'contain',
                }}
              />
            </LinearGradient>
          </View>
        </View>

        <View
          style={[globalStyle.px20, globalStyle.mtmin40, globalStyle.center]}
        >
          <Typography variant="h3" weight="MSemiBold" color="#2d532c">
            {plan.name}
          </Typography>
          <Typography variant="h6" weight="MMedium" color="#303330ff">
            By Touchwood Bliss
          </Typography>
          <Typography variant="body" weight="Medium" color="#303330ff">
            India's 1st & Only Family wellness membership
          </Typography>

          <View style={globalStyle.my10}>
            <Image
              source={require('../../../../assets/images/blisslogo.png')}
              style={{
                height: verticalScale(100),
                width: horizontalScale(100),
                resizeMode: 'contain',
              }}
            />
          </View>

          <View style={[globalStyle.mt20,globalStyle.center]}>
            <Typography variant="h4" weight="MSemiBold" color="#2d532c">
              Benefits
            </Typography>

            <View
              style={[
                globalStyle.row,
                globalStyle.mt10,
                globalStyle.flexWrap,
                globalStyle.jusifyCenter,
                {backgroundColor: '#fafff9ff',padding:horizontalScale(10),borderRadius:horizontalScale(14)}
              ]}
            >
              {plan?.benefits?.map((item, index) => (
                <View
                  key={index}
                  style={[
                    globalStyle.column,
                    globalStyle.alignCenter,
                    globalStyle.my5,
                    globalStyle.jusifyCenter,
                    globalStyle.textCenter,
                    {  width: '50%' },
                  ]}
                >
                  <Image
                    source={benefitIcons[index]}
                    style={{ width: horizontalScale(40), height: verticalScale(40) }}
                    resizeMode="contain"
                  />

                  <Typography variant="subtext" weight="Medium" color="#303330ff" style={globalStyle.textCenter} >
                    {item}
                  </Typography>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditionScreen;
