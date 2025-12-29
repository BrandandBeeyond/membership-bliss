import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import {
  FlatList,
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
    question: 'What is Touchwood Bliss?',
    answer: 'Touchwood Bliss is a nature-centric resort located in Igatpuri...',
  },
  {
    id: '2',
    question: 'Do you offer membership plans?',
    answer: 'Yes, we offer multiple membership plans with added benefits...',
  },
  {
    id: '3',
    question: 'Is the resort kid-friendly?',
    answer: 'Yes, we have kids activities, play areas, pools and more...',
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
            variant="subhead"
            weight="MSemiBold"
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
              variant="subline"
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
      style={[globalStyle.px20, globalStyle.bgslate, globalStyle.flex]}
    >
      <ScrollView>
        <FlatList
          renderItem={renderFaqs}
          data={faqData}
          keyExtractor={item => item._id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQs;
