import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';

export const faqStyle = StyleSheet.create({
  card: {
    backgroundColor: '#FAFFF7',
    marginBottom: verticalScale(14),
    borderRadius: horizontalScale(16),
    padding: horizontalScale(16),
    elevation:horizontalScale(1)
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  answerWrapper: {
    marginTop: verticalScale(10),
    paddingLeft: horizontalScale(4),
  },
});
