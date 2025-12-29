import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../../assets/styles/Scaling";

export const faqStyle = StyleSheet.create({
 
  card: {
    backgroundColor: '#FAFFF7',
    marginBottom: verticalScale(14),
    borderRadius: horizontalScale(16),
    borderWidth: 1,
    borderColor: '#9DC699',
    padding: horizontalScale(14),
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