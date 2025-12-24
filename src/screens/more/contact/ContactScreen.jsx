import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, TouchableOpacity } from 'react-native';
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
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
      >
        <Typography
          variant="h6"
          weight="MMedium"
          color="#000"
          style={{ marginBottom: verticalScale(20) }}
        >
          If you have any inquiries get in touch with us. We’ll be happy to help
          you.
        </Typography>

        <LinearGradient
          colors={['#779d75ff', '#486d47ff']}
          style={{
            padding: 18,
            borderRadius: 30,
            marginBottom: 12,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <View
            style={[
              globalStyle.alignCenter,
              globalStyle.jusifyCenter,
              {
                height: horizontalScale(35),
                width: horizontalScale(35),
                backgroundColor: '#375a349c',
                borderRadius: horizontalScale(40),
              },
            ]}
          >
            <Ionicons name="chatbubbles-outline" size={23} color="#ffffff" />
          </View>

          <View>
            <Typography variant="h6" weight="SemiBold" color="#ffffff">
              Chat with us
            </Typography>

            <Typography variant="subtext" weight="MMedium" color="#ffffff">
              Chat with our assistant now
            </Typography>
          </View>
        </LinearGradient>

        {/* ---------- CALL CARD ---------- */}
        <LinearGradient
          colors={['#779d75ff', '#486d47ff']}
          style={{
            padding: 18,
            borderRadius: 30,
            marginBottom: 12,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <View
            style={[
              globalStyle.alignCenter,
              globalStyle.jusifyCenter,
              {
                height: horizontalScale(35),
                width: horizontalScale(35),
                backgroundColor: '#375a349c',
                borderRadius: horizontalScale(40),
              },
            ]}
          >
            <Ionicons name="call-outline" size={23} color="#ffffff" />
          </View>

          <View>
            <Typography variant="h6" weight="SemiBold" color="#ffffff">
              Call us
            </Typography>

            <Typography variant="subtext" weight="MMedium" color="#ffffff">
              We're available from 6 AM – 6 PM PST
            </Typography>
          </View>
        </LinearGradient>

        {/* ---------- EMAIL CARD ---------- */}
        <LinearGradient
          colors={['#779d75ff', '#486d47ff']}
          style={{
            padding: 18,
            borderRadius: 30,
            marginBottom: 18,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <View
            style={[
              globalStyle.alignCenter,
              globalStyle.jusifyCenter,
              {
                height: horizontalScale(35),
                width: horizontalScale(35),
                backgroundColor: '#375a349c',
                borderRadius: horizontalScale(40),
              },
            ]}
          >
            <Ionicons name="mail-outline" size={23} color="#ffffff" />
          </View>

          <View>
            <Typography variant="h6" weight="SemiBold" color="#ffffff">
              Email us
            </Typography>

            <Typography variant="subtext" weight="MMedium" color="#ffffff">
              We'll get back within 24hrs
            </Typography>
          </View>
        </LinearGradient>

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
          <Typography variant="h6" weight="SemiBold" color="#1c1c1c">
            Our social media
          </Typography>

          {/* Social item reusable row */}
          {[
            { icon: 'logo-whatsapp', label: 'whatsapp' },
            { icon: 'logo-instagram', label: 'Instagram' },
            { icon: 'logo-facebook', label: 'Facebook' },
            { icon: 'logo-linkedin', label: 'LinkedIn' },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                marginTop: 12,
                backgroundColor: '#ffffff',
                borderRadius: 16,
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Ionicons name={item.icon} size={22} color="#1c1c1c" />

              <Typography variant="subtext" weight="MSemiBold" color="#1c1c1c">
                {item.label}
              </Typography>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;
