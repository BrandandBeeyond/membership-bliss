import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllMembershipCategories } from '../../../redux/actions/MembershipAction';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Card, Searchbar, Text, TextInput } from 'react-native-paper';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { useNavigation } from '@react-navigation/native';
import Typography from '../../../components/Typography';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const CategoryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);
  const { loading, categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getAllMembershipCategories());

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading || showLoader) {
    return (
      <SafeAreaView
        style={[
          globalStyle.flex,
          globalStyle.bgwhite,
          globalStyle.alignCenter,
          globalStyle.jusifyCenter,
          globalStyle.px20,
        ]}
      >
        <LottieView
          source={require('../../../asset/loader/profloader.json')}
          style={{ width: 270, height: 270 }}
          autoPlay
          loop
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[
        globalStyle.flex,
        globalStyle.bgslate,
        globalStyle.alignCenter,
        globalStyle.jusifyCenter,
        globalStyle.px20,
      ]}
    >
      <ScrollView>
        <View style={globalStyle.my20}>
          <TextInput
            mode="outlined"
            left={<TextInput.Icon icon="magnify" />}
            placeholder="Search"
            style={{
              marginTop: verticalScale(5),
              marginBottom: verticalScale(10),
              height: verticalScale(35),
              lineHeight: verticalScale(25),
              backgroundColor: '#ffffff',
            }}
            outlineColor="#c2e4bdff"
            activeOutlineColor="#588650ff"
            outlineStyle={{
              borderRadius: horizontalScale(15),
            }}
          />
        </View>
        <View>
          {categories.map(item => (
            <TouchableOpacity
              key={item._id}
              onPress={() =>
                navigation.navigate('CategoryDetail', {
                  image: item.thumbnail?.url,
                  name: item.name,
                  description: item.description,
                })
              }
            >
              <Card
                key={item._id}
                style={[
                  globalStyle.p7,
                  {
                    backgroundColor: '#ffffff',
                    borderRadius: 12,
                    elevation: horizontalScale(8),
                    borderWidth: horizontalScale(0.5),
                    borderColor: '#d1d1d1ff',

                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                  },
                ]}
              >
                <Card.Cover
                  source={{ uri: item.thumbnail?.url }}
                  style={{
                    height: verticalScale(120),
                    objectFit: 'contain',
                  }}
                />
                <Card.Content style={globalStyle.bgwhite}>
                  <Typography
                    weight="MSemiBold"
                    color="#4b6144ff"
                    variant="h5"
                    style={[
                      globalStyle.py5,
                      {
                        marginTop: verticalScale(10),
                      },
                    ]}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="subline" weight="MMedium" color="#212020ff">
                    {item.description}
                  </Typography>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <LinearGradient
        pointerEvents="none"
        colors={[
          'transparent',
          'rgba(232, 255, 226, 0.4)',
          'rgba(188, 218, 181, 0.4)',
        ]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: verticalScale(100),
        }}
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;
