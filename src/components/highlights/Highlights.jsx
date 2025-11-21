import React from 'react'
import { View } from 'react-native'
import { globalStyle } from '../../../assets/styles/globalStyle'
import Typography from '../Typography';

const Highlights = () => {
  return (
    <>
      <View style={[globalStyle.my10,globalStyle.pt10]}>
            <Typography variant='subtitle' weight='SemiBold' >Highlights</Typography>
      </View>
    </>
  )
}

export default Highlights