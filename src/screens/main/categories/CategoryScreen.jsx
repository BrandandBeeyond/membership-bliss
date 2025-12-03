import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllMembershipCategories } from '../../../redux/actions/MembershipAction';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Card, Text } from 'react-native-paper';
import {
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';

const CategoryScreen = () => {
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
        <View style={globalStyle.my20}>
          {categories.map(item => (
            <Card style={globalStyle.bgThemeLight} key={item._id}>
              <Card.Cover source={{ uri: item.thumbnail?.url }} />
              <Card.Content>
                <Text
                  style={[
                    globalStyle.py10,
                    {
                      marginTop: verticalScale(10),
                      fontSize: scaleFontSize(20),
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
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
