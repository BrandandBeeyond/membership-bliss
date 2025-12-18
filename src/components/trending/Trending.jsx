import React from 'react';
import { FlatList, View } from 'react-native';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../Typography';
import { Card, Text } from 'react-native-paper';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';

const Trending = ({ data, onPressTrending }) => {
  const renderItem = ({ item }) => {
    return (
      <Card style={[globalStyle.trendingItem,globalStyle.bgwhite,{padding:horizontalScale(8)}]} onPress={() => onPressTrending(item)}>
        <Card.Cover source={item.thumbnail} style={globalStyle.innerImageTrending}/>
        <Card.Content>
          <Typography variant="fthead" weight='Bold' style={[globalStyle.py10,{marginTop:verticalScale(4)}]}>{item.title}</Typography>
          <Text variant="bodyMedium" onPress={() => onPressTrending(item)}>
            {item.description}
          </Text>
        </Card.Content>
        
      </Card>
    );
  };

  return (
    <View>
      <Typography variant="h5" weight="Bold">
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
