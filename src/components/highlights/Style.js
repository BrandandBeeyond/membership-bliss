import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/Scaling";

export const HighlightStyle =  StyleSheet.create({


  storyContainer: {
    marginRight: horizontalScale(15),
    alignItems: "center",
  },

  storyOuterRing: {
    width: horizontalScale(70),
    height: horizontalScale(70),
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#90c46bff", 
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
  },

  storyImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  storyText: {
    marginTop: verticalScale(5),
    textAlign: "center",
    width: horizontalScale(70),
  },
});
