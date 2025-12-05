import React from 'react';
import { FlatList, View } from 'react-native';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../Typography';
import { Card, Text } from 'react-native-paper';
import { verticalScale } from '../../../assets/styles/Scaling';

const Trending = ({ data, onPressTrending }) => {
  const renderItem = ({ item }) => {
    return (
      <Card style={[globalStyle.trendingItem,globalStyle.bgThemeLight]}>
        <Card.Cover source={item.thumbnail} style={globalStyle.innerImageTrending}/>
        <Card.Content>
          <Text variant="titleSmall" style={[globalStyle.py10,{marginTop:verticalScale(4)}]}>{item.title}</Text>
          <Text variant="bodyMedium" onPress={() => onPressTrending(item)}>
            {item.description}
          </Text>
        </Card.Content>
        
      </Card>
    );
  };

  return (
    <View>
      <Typography variant="subtitle" weight="MSemiBold">
        Trending
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
  );
};

export default Trending;
