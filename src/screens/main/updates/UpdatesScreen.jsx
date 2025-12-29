import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Typography from '../../../components/Typography';

import { globalStyle } from '../../../../assets/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUpdates } from '../../../redux/actions/UpdatesAction';
import { Button } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

const formatDate = dateStr => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const UpdatesList = ({ items }) => (
  <FlatList
    data={items}
    keyExtractor={item => item._id}
    renderItem={({ item }) => (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri:
                item.thumbnail.url ||
                'https://images.unsplash.com/photo-1545389336-cf090694435e',
            }}
            style={styles.image}
          />

          <View style={styles.content}>
            <Typography weight="Bold" variant="h5" color="#374034ff">
              {item.title}
            </Typography>

            <Typography variant="subhead" weight="MMedium" style={styles.desc}>
              {item.description}
            </Typography>

            <View
              style={[
                globalStyle.row,
                globalStyle.alignCenter,
                globalStyle.justifyBetween,
              ]}
            >
              <Typography
                variant="body"
                weight="MSemiBold"
                color="#536053ff"
                style={styles.date}
              >
                Updated on {'\n'} {formatDate(item.updatedOn)}
              </Typography>

              <Button
                mode="outlined"
                onPress={() =>
                  Linking.openURL(
                    'https://theharmonyretreat.in/love-you-zindagi.php',
                  )
                }
              >
                View details
              </Button>
            </View>
          </View>
        </View>
      </View>
    )}
  />
);

const UpdatesScreen = () => {
  const dispatch = useDispatch();
  const { updates, loading } = useSelector(state => state.updates);

  useEffect(() => {
    dispatch(getAllUpdates());
  }, [dispatch]);

  const whatsNew = updates?.filter(u => u.category === 'whats_new') || [];
  const events = updates?.filter(u => u.category === 'events_retreats') || [];

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgslate]}>
      {/* Header */}
      <View style={styles.header}>
        <Typography variant="h6" color="#424d3eff" weight="MSemiBold">
          Stay informed with what’s happening at our resort !
        </Typography>
      </View>

      {/* Tabs */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          screenContainerStyle: {
            backgroundColor: '#ffffff',
          },
          tabBarItemStyle: {
            borderRadius: horizontalScale(40),
          },
          tabBarLabelStyle: {
            fontSize: scaleFontSize(13),
            paddingVertical: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#2f5f2f',
            height: '80%',
            marginVertical: verticalScale(3),
            marginHorizontal: horizontalScale(4),
            borderRadius: horizontalScale(40),
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#2f4f2f',
          tabBarPressOpacity: 1,
        }}
      >
        <Tab.Screen
          name="WhatsNew"
          options={{ title: 'What’s New' }}
          children={() => <UpdatesList items={whatsNew} />}
        />

        <Tab.Screen
          name="Retreats"
          options={{ title: 'Retreats & Events' }}
          children={() => <UpdatesList items={events} />}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default UpdatesScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
  subText: {
    color: '#5f6f5f',
    marginTop: 4,
  },
  tabBar: {
    marginHorizontal: horizontalScale(13),
    borderRadius: horizontalScale(60),
    backgroundColor: '#ffffff',
    padding: horizontalScale(3),
  },
  tabItem: {
    borderRadius: horizontalScale(40),
  },
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  date: {
    color: '#6a7a6a',
    marginVertical: 4,
  },
  desc: {
    color: '#5f6f5f',
    marginBottom: 12,
  },
});
