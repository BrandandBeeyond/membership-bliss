import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Typography from '../../../components/Typography';

const DATA = [
  {
    id: '1',
    title: 'New Nature Walk Trail Opened',
    desc: 'Explore our newly developed forest trail for morning walks.',
    date: 'Updated on 12 Jan 2025',
    icon: '🌿',
  },
  {
    id: '2',
    title: 'Wellness Pack Now Available',
    desc: 'Includes organic tea, aroma oils and spa coupons.',
    date: 'Updated on 08 Jan 2025',
    icon: '🔔',
  },
];

const WhatsNewTab = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.icon}>
            <Typography>{item.icon}</Typography>
          </View>

          <View style={{ flex: 1 }}>
            <Typography weight="SemiBold">{item.title}</Typography>
            <Typography variant="body2" style={styles.desc}>
              {item.desc}
            </Typography>
            <Typography variant="caption" style={styles.date}>
              {item.date}
            </Typography>
          </View>
        </View>
      )}
    />
  );
};

export default WhatsNewTab;

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6f0df',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  desc: {
    color: '#5f6f5f',
    marginTop: 4,
  },
  date: {
    color: '#8a9b88',
    marginTop: 6,
  },
});
