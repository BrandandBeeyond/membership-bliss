import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Pressable,
  Linking,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Typography from '../../../components/Typography';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';

const ContactScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgslate]}>
      {' '}
      <ScrollView
        contentContainerStyle={globalStyle.px20}
        showsVerticalScrollIndicator={false}
      >
        <View style={[globalStyle.mb20]}>
          <Typography variant="h5" weight="SemiBold" color="#313131ff">
            We’re here for you, always
          </Typography>
          <Typography
            variant="subhead"
            weight="MMedium"
            color="#5e5c5cff"
            style={[{ marginTop: verticalScale(10) }]}
          >
            Whether you’re planning a visit, redeeming a membership benefit, or
            simply wish to know more, our team is happy to assist you with
            warmth and care.
          </Typography>
        </View>

        <View
          style={[
            globalStyle.mt20,
            {
              backgroundColor: 'rgba(134, 163, 126, 0.83)',
              padding: 16,
              borderRadius: 28,
              marginBottom: 30,
            },
          ]}
        >
          {[
            {
              id: '1',
              icon: 'logo-whatsapp',
              title: 'Chat with us',
              description: 'Chat with our assistant now',
              slug: 'https://api.whatsapp.com/send/?phone=917030060905&text=Hello',
            },
            {
              id: '2',
              icon: 'call-outline',
              title: 'Call us',
              description: '+91 70306 66222',
              slug: 'tel:+917030666222',
            },
            {
              id: '3',
              icon: 'call-outline',
              title: 'Call us',
              description: '+91 70306 66444',
              slug: 'tel:+917030666444',
            },
            {
              id: '4',
              icon: 'mail-outline',
              title: 'Email us',
              description: 'reservations@touchwoodbliss.com',
              slug: 'mailto:reservations@touchwoodbliss.com',
            },
          ].map(item => (
            <Pressable
              key={item.id}
              onPress={() => Linking.openURL(item.slug)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.9 : 1,
                  marginBottom: verticalScale(12),
                },
              ]}
            >
              <View
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 22,
                  paddingVertical: verticalScale(4),
                  paddingHorizontal: horizontalScale(14),
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 0.6,
                  borderColor: '#a7a7a5',
                }}
              >
                {/* ICON */}
                <View
                  style={{
                    height: 44,
                    width: 44,
                    borderRadius: 22,
                    backgroundColor: '#5e8958d9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 14,
                  }}
                >
                  <Ionicons name={item.icon} size={22} color="#ffffff" />
                </View>

                {/* TEXT */}
                <View style={{ flex: 1 }}>
                  <Typography variant="h6" weight="SemiBold" color="#2d2d2d">
                    {item.title}
                  </Typography>

                  <Typography
                    variant="subtext"
                    weight="MMedium"
                    color="#5f5f5f"
                    style={{ marginTop: 2 }}
                  >
                    {item.description}
                  </Typography>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        <View
          style={[
            globalStyle.mt20,
            {
              backgroundColor: '#dfe8d8',
              padding: 18,
              borderRadius: 30,
              marginBottom: 30,
            },
          ]}
        >
          <Typography
            variant="h5"
            weight="SemiBold"
            color="#1c1c1c"
            style={globalStyle.textCenter}
          >
            Connect us on
          </Typography>

          {/* ICON ROW */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: horizontalScale(24), // spacing between icons
              marginTop: verticalScale(16),
            }}
          >
            {[
              {
                icon: require('../../../../assets/images/icons/whatsapp.png'),
                slug: 'https://api.whatsapp.com/send/?phone=917030060905&text=Hello',
              },
              {
                icon: require('../../../../assets/images/icons/instagram.png'),
                slug: 'https://www.instagram.com/touchwoodbliss',
              },
              {
                icon: require('../../../../assets/images/icons/globe.png'),
                slug: 'https://www.touchwoodbliss.com',
              },
            ].map((item, index) => (
              <Pressable
                key={index}
                onPress={() => Linking.openURL(item.slug)}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.7 : 1,
                })}
              >
                <Image
                  source={item.icon}
                  resizeMode="contain"
                  style={{
                    height: verticalScale(30),
                    width: horizontalScale(30),
                  }}
                />
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;
