import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllMembershipCategories } from '../../../redux/actions/MembershipAction';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Card, Text } from 'react-native-paper';
import {
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { useNavigation } from '@react-navigation/native';

const CategoryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getAllMembershipCategories());
  }, [dispatch]);

  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <ScrollView>
        <View>
          {categories.map(item => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CategoryDetail', {
                  image: item.thumbnail?.url,
                  name: item.name,
                  description: item.description,
                })
              }
            >
              <Card style={{ backgroundColor: '#f9fdf3ff' }} key={item._id}>
                <Card.Cover
                  source={{ uri: item.thumbnail?.url }}
                  style={{ height: verticalScale(120), objectFit: 'contain' }}
                />
                <Card.Content>
                  <Text
                    style={[
                      globalStyle.py5,
                      {
                        marginTop: verticalScale(10),
                        fontSize: scaleFontSize(18),
                        color: '#4b6144ff',
                        fontWeight: '600',
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text variant="bodyMedium">{item.description}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
