import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { globalStyle } from '../../../assets/styles/globalStyle'
import Typography from '../Typography';
import { HighlightStyle } from './Style';

const Highlights = ({data,onPressHighlight}) => {

  const renderItem=({item})=>{
      <TouchableOpacity style={HighlightStyle.storyContainer} activeOpacity={0.8} onPress={()=>onPressHighlight(item)}>
            
      </TouchableOpacity>
  }
  return (
    <>
      <View style={[globalStyle.my10,globalStyle.pt10]}>
            <Typography variant='subtitle' weight='SemiBold' >Experience Bliss Living</Typography>
      </View>
    </>
  )
}

export default Highlights