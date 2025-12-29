import { StyleSheet } from "react-native";
import { verticalScale } from "../../../assets/styles/Scaling";

export const faqStyle = StyleSheet.create({
  wrapper: {
    marginBottom: verticalScale(14),
  },

  accordion: {
    backgroundColor: '#EEF2EB',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 8,
    elevation: 2,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2F3E2F',
  },

  answerWrapper: {
    backgroundColor: '#F7FAF5',
    borderRadius: 14,
    marginHorizontal: 10,
    marginBottom: 12,
  },

  answer: {
    fontSize: 14,
    color: '#5A6B57',
    lineHeight: 20,
  },
});

