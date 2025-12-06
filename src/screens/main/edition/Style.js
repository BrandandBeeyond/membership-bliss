import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../../assets/styles/Scaling";

export const editionStyle = StyleSheet.create({
 wrapImage: {
    width: '100%',
    height: verticalScale(200),
    resizeMode: 'cover',
  },
  wrapLogo:{
     height:verticalScale(56),
     width:horizontalScale(180),
     borderRadius:horizontalScale(15),
     left:horizontalScale(20),
     bottom:verticalScale(60)
  }
});
