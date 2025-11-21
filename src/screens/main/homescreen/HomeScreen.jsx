import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { ScrollView, Text, View } from 'react-native';
import Highlights from '../../../components/highlights/Highlights';
import Topbar from '../../../components/Topbar';
import {Searchbar} from 'react-native-paper';


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.px20, globalStyle.flex,globalStyle.bgwhite]}>
      <Topbar navigation={navigation} />
      <Searchbar placeholder="Search" style={{backgroundColor:'#fcf9f9ff',borderColor:'#d9ebcfff',borderWidth:1}}/>
      <ScrollView>
        <Highlights />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
