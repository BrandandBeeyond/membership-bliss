import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../assets/styles/Scaling";

export const HighlightStyle =  StyleSheet.create({


  storyContainer: {
    marginRight: horizontalScale(15),
    alignItems: "center",
  },

  storyOuterRing: {
    width: horizontalScale(65),
    height: horizontalScale(65),
    borderRadius: horizontalScale(100),
    borderWidth: horizontalScale(2),
    borderColor: "#a9cb6eff", 
    justifyContent: "center",
    alignItems: "center",
    padding: horizontalScale(3),
  },

  storyImage: {
    width: "100%",
    height: "100%",
    borderRadius: horizontalScale(100),
  },

  storyText: {
    marginTop: verticalScale(5),
    textAlign: "center",
    width: horizontalScale(70),
  },
});
