import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { ScrollView } from 'react-native';
import Faq from '../../../components/faqs/Faq';

const FAQs = () => {
  const faqData = [
    {
      question: 'What is Touchwood Bliss?',
      answer:
        'Touchwood Bliss is a nature-centric resort located in Igatpuri...',
    },
    {
      question: 'Do you offer membership plans?',
      answer: 'Yes, we offer multiple membership plans with added benefits...',
    },
    {
      question: 'Is the resort kid-friendly?',
      answer: 'Yes, we have kids activities, play areas, pools and more...',
    },
  ];
  return (
    <SafeAreaView style={[globalStyle.px20,globalStyle.bgwhite,globalStyle.flex]}>
      <ScrollView>
        {faqData.map((item, index) => (
          <Faq
            key={index}
            faqQuestion={item.question}
            faqAnswer={item.answer}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQs;
