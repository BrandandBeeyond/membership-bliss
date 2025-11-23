import { StyleSheet } from 'react-native';
import { horizontalScale,verticalScale } from './Scaling';

export const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bgwhite: {
    backgroundColor: '#ffffff',
  },
  borderBtm:{
    borderBottomWidth: verticalScale(0.5),
    borderBottomColor: '#e0e0e0',
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
  mb10:{
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
  flexWrap: {
    flexWrap: 'wrap',
  },
  mx10: {
    marginHorizontal: horizontalScale(10),
  },
  mx20: {
    marginHorizontal: horizontalScale(20),
  },
  my5: {
    marginVertical: verticalScale(5),
  },
  my10:{
    marginVertical: verticalScale(10),
  },
  mt10:{
    marginTop:verticalScale(10),
  },
  mt20:{
    marginTop: verticalScale(20),
  },
  mt50:{
    marginTop: verticalScale(50),
  },
  pt10:{
    paddingTop: verticalScale(10),
  },
  py3:{
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
  cg5:{
    columnGap: horizontalScale(5),
  },
  cg10:{
    columnGap: horizontalScale(10),
  },
  cg15:{
    columnGap: horizontalScale(15),
  },
  cg20:{
    columnGap: horizontalScale(20),
  },
  rounded10:{
    borderRadius: horizontalScale(10),
  },
  rounded5:{
    borderRadius: horizontalScale(5),
  },
  bgTheme:{
    backgroundColor:'#B7D387'
  }
});
