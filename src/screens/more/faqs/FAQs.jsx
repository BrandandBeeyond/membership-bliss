import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';
import Typography from '../../../components/Typography';
import { Chip } from 'react-native-paper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { faqStyle } from './Style';

const faqData = [
  {
    id: '1',
    question: 'What is Nature’s Club Membership?',
    answer:
      ' A year-round access to nature stays, celebrations, wellness and family experiences at Touchwood Bliss.',
  },
  {
    id: '2',
    question: 'How long is the membership valid?',
    answer: 'Membership validity is as mentioned at the time of activation.',
  },
  {
    id: '3',
    question: 'Can I share my membership benefits?',
    answer:
      'Some vouchers may be gifted to friends or family. Specific conditions apply.',
  },
  {
    id: '4',
    question: 'Do I need advance booking?',
    answer:
      ' Yes, advance reservation is recommended to ensure availability and a smooth experience.',
  },
  {
    id: '5',
    question: 'Are benefits applicable on weekends?',
    answer:
      '  Most benefits are valid on weekdays. Weekend usage may attract additional charges.',
  },
  {
    id: '6',
    question: 'Where can I get help?',
    answer: 'Simply tap Contact Us or speak to our team anytime.',
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleCollapse = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const renderFaqs = ({ item, index }) => {
    const isOpen = index === activeIndex;

    return (
      <View style={faqStyle.card}>
        {/* Header */}
        <TouchableOpacity
          onPress={() => toggleCollapse(index)}
          activeOpacity={0.8}
          style={faqStyle.header}
        >
          <Typography
            color="#2D532C"
            variant="fthead"
            weight="SemiBold"
            style={{ flex: 1 }}
          >
            {item.question}
          </Typography>

          <Ionicons
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={22}
            color="#2D532C"
          />
        </TouchableOpacity>

        {/* Body */}
        <Collapsible collapsed={!isOpen}>
          <View style={faqStyle.answerWrapper}>
            <View style={globalStyle.dashedLine} />

            <Typography
              color="#5C6F5B"
              variant="subhead"
              weight="MMedium"
              style={{ marginTop: 8 }}
            >
              {item.answer}
            </Typography>
          </View>
        </Collapsible>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[globalStyle.bgwhite, globalStyle.flex, globalStyle.relative]}
    >
      <ScrollView contentContainerStyle={globalStyle.px20}>
        <View>
          <FlatList
            renderItem={renderFaqs}
            data={faqData}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>

      <Image
        source={require('../../../../assets/images/bgblissgreen.png')}
        style={{
          position: 'absolute',
          bottom: verticalScale(-120),
          left: 0,
          height: verticalScale(440),
          width: '100%',
          zIndex: -1,
        }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default FAQs;
