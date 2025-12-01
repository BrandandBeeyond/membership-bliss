import React, { useState } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { verticalScale } from '../../../assets/styles/Scaling';

const Faq = ({ faqQuestion, faqAnswer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[globalStyle.mb20]}>
      <List.Accordion
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}
        title={faqQuestion}
        titleNumberOfLines={2}
        style={[globalStyle.rounded15,{backgroundColor:'#eef2ebff',height:verticalScale(38)}]}
      >
        <List.Item title={faqAnswer} titleNumberOfLines={10} />
      </List.Accordion>
    </View>
  );
};

export default Faq;
