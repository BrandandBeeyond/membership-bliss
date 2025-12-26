import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Typography from '../../../components/Typography';

const RetreatsEventsTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1545389336-cf090694435e',
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Typography weight="SemiBold">Spring Yoga Retreat</Typography>
          <Typography variant="body2" style={styles.date}>
            March 5–9, 2025
          </Typography>
          <Typography variant="body2" style={styles.desc}>
            Join our rejuvenating yoga retreat surrounded by nature.
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default RetreatsEventsTab;

const styles = StyleSheet.create({
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
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#2e3f2bff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
