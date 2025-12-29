import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { verticalScale } from '../../../assets/styles/Scaling';
import { faqStyle } from './Style';

const Faq = ({ id, expandedId, setExpandedId, faqQuestion, faqAnswer }) => {
  const isExpanded = expandedId === id;

  return (
    <View style={faqStyle.wrapper}>
      <List.Accordion
        expanded={isExpanded}
        onPress={() => setExpandedId(isExpanded ? null : id)}
        title={faqQuestion}
        titleNumberOfLines={2}
        titleStyle={faqStyle.title}
        style={faqStyle.accordion}
        right={props => (
          <List.Icon
            {...props}
            icon={isExpanded ? 'chevron-up' : 'chevron-down'}
            color="#3E5F3C"
          />
        )}
      >
        <View style={faqStyle.answerWrapper}>
          <List.Item
            title={faqAnswer}
            titleNumberOfLines={10}
            titleStyle={faqStyle.answer}
          />
        </View>
      </List.Accordion>
    </View>
  );
};

export default Faq;
