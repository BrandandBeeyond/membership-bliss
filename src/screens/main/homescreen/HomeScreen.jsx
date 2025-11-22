import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { ScrollView, Text, View } from 'react-native';
import Highlights from '../../../components/highlights/Highlights';
import Topbar from '../../../components/Topbar';
import { Searchbar } from 'react-native-paper';

const dummyHighLights = [
  {
    id: 1,
    title: 'Rooms',
    image: require('../../../../assets/images/amoravilla.jpg'),
  },
  {
    id: 2,
    title: 'Flavours bliss',
    image: require('../../../../assets/images/amoravilla.jpg'),
  },
  {
    id: 3,
    title: 'Roots Cafe',
    image: require('../../../../assets/images/rootscafe.jpg'),
  },
  {
    id: 4,
    title: 'Pool',
    image: require('../../../../assets/images/pool.jpg'),
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[globalStyle.px20, globalStyle.flex, globalStyle.bgwhite]}
    >
      <Topbar navigation={navigation} />
      <Searchbar
        placeholder="Search"
        style={{
          backgroundColor: '#fcf9f9ff',
          borderColor: '#d9ebcfff',
          borderWidth: 1,
        }}
      />
      <ScrollView>
        <View>
          <Highlights
            data={dummyHighLights}
            onPressHighlight={item =>
              navigation.navigate('HighlightDetailScreen', { item })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
