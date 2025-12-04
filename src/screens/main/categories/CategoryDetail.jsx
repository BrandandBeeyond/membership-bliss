import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Typography from '../../../components/Typography';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { horizontalScale, verticalScale } from '../../../../assets/styles/Scaling';

const CategoryDetail = ({ route }) => {
  const navigation = useNavigation();
  const { name, image } = route.params;

  return (
    <ScrollView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: verticalScale(25),
          left: horizontalScale(20),
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: 8,
          borderRadius: 50,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Image
        source={{ uri: image }}
        style={{
          width: '100%',
          height: 300,
          resizeMode: 'cover',
        }}
      />
      <View style={[globalStyle.px20, globalStyle.py20]}>
        <Typography variant="h4" color="#4b6144ff" weight="700">
          {name}
        </Typography>
      </View>
    </ScrollView>
  );
};

export default CategoryDetail;
