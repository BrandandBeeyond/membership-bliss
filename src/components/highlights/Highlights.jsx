import React from 'react';
import { TouchableOpacity, View, Image, FlatList } from 'react-native';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../Typography';
import { HighlightStyle } from './Style';

const Highlights = ({ data, onPressHighlight }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={HighlightStyle.storyContainer}
        activeOpacity={0.8}
        onPress={() => onPressHighlight(item)}
      >
        <View style={HighlightStyle.storyOuterRing}>
          <Image
            source={item.image}
            style={HighlightStyle.storyImage}
          />
        </View>
        <Typography
          variant="caption"
          weight="Normal"
          style={HighlightStyle.storyText}
        >
          {item.title}
        </Typography>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={[globalStyle.mt10, globalStyle.pt10]}>
        <Typography variant="subtitle" weight="SemiBold" >
          Experience Bliss Living
        </Typography>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          style={globalStyle.mt10}
        />
      </View>
    </>
  );
};

export default Highlights;
