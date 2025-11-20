import { StyleSheet } from 'react-native';
import { horizontalScale } from './Scaling';

export const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  px20: {
    paddingHorizontal: horizontalScale(20),
  },
  py20: {
    paddingVertical: horizontalScale(20),
  },
  mb20: {
    marginBottom: horizontalScale(20),
  },
  dflex: {
    display: 'flex',
  },
  alignCenter: {
    alignItems: 'center',
  },
  jusifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  mx10: {
    marginHorizontal: horizontalScale(10),
  },
  mx20: {
    marginHorizontal: horizontalScale(20),
  },
  py5: {
    paddingVertical: horizontalScale(5),
  },
  px5: {
    paddingHorizontal: horizontalScale(5),
  },
});
