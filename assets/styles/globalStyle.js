import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from './Scaling';

export const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bgwhite: {
    backgroundColor: '#ffffff',
  },
  bgslate: {
    backgroundColor: '#f9fbf8ff',
  },
  borderBtm: {
    borderBottomWidth: verticalScale(0.5),
    borderBottomColor: '#e0e0e0',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  textCenter: {
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  p7: {
    padding: horizontalScale(7),
  },
  px10: {
    paddingHorizontal: horizontalScale(10),
  },
  px20: {
    paddingHorizontal: horizontalScale(20),
  },
  py10: {
    paddingVertical: horizontalScale(10),
  },
  py20: {
    paddingVertical: horizontalScale(20),
  },
  mb10: {
    marginBottom: horizontalScale(10),
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
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  mx5: {
    marginHorizontal: horizontalScale(5),
  },
  mx10: {
    marginHorizontal: horizontalScale(10),
  },
  mx20: {
    marginHorizontal: horizontalScale(20),
  },
  my3: {
    marginVertical: verticalScale(3),
  },
  my5: {
    marginVertical: verticalScale(5),
  },
  my10: {
    marginVertical: verticalScale(10),
  },
  my20: {
    marginVertical: verticalScale(20),
  },
  mt8: {
    marginTop: verticalScale(10),
  },
  mt10: {
    marginTop: verticalScale(10),
  },
  mt20: {
    marginTop: verticalScale(20),
  },
  mt50: {
    marginTop: verticalScale(50),
  },
  pt10: {
    paddingTop: verticalScale(10),
  },
  py3: {
    paddingVertical: horizontalScale(3),
  },
  py5: {
    paddingVertical: horizontalScale(5),
  },
  py30: {
    paddingVertical: horizontalScale(30),
  },
  px5: {
    paddingHorizontal: horizontalScale(5),
  },
  cg5: {
    columnGap: horizontalScale(5),
  },
  cg10: {
    columnGap: horizontalScale(10),
  },
  cg15: {
    columnGap: horizontalScale(15),
  },
  cg20: {
    columnGap: horizontalScale(20),
  },
  rounded10: {
    borderRadius: horizontalScale(10),
  },
  rounded5: {
    borderRadius: horizontalScale(5),
  },
  rounded15: {
    borderRadius: horizontalScale(15),
  },
  bgTheme: {
    backgroundColor: '#B7D387',
  },
  bgThemeLight: {
    backgroundColor: '#f7fbf1ff',
  },

  applyBtn: {
    position: 'absolute',
    bottom: verticalScale(9),
    right: horizontalScale(14),
  },
  mtmin40: {
    marginTop: verticalScale(-40),
  },
  dashedLine: {
    borderWidth: horizontalScale(0.5),
    color: '#646f4dff',
    borderStyle: 'dashed',
    marginVertical: verticalScale(4),
  },
  gredientThemeButton: {
    height: verticalScale(35),
    width: horizontalScale('100%'),
    borderRadius: horizontalScale(25),
    padding: horizontalScale(10),
  },
  trendingItem: {
    width: horizontalScale(200),
    overflow: 'hidden',
    borderRadius: horizontalScale(20),
    elevation: horizontalScale(8),
    borderWidth: horizontalScale(0.5),
    borderColor: '#d1d1d1ff',
  },
  innerImageTrending: {
    height: verticalScale(80),
    borderRadius: horizontalScale(15),
  },
  BoxEdition: {
    height: verticalScale(72),
    width: horizontalScale(90),
    borderRadius: horizontalScale(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxEditionU: {
    height: verticalScale(52),
    width: horizontalScale(70),
    borderRadius: horizontalScale(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardShadow: {
    padding: horizontalScale(10),
    borderRadius: horizontalScale(20),
    shadowColor: '#242323ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  reviewcard: {
    backgroundColor: '#ffffff',
    borderRadius: horizontalScale(20),
    width: horizontalScale(160),
    minHeight: verticalScale(60),
    elevation: horizontalScale(2),
    padding: horizontalScale(10),
    marginTop: verticalScale(10), 
    marginRight:horizontalScale(15)
  },
});
