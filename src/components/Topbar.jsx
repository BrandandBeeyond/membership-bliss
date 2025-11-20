import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Appbar} from  'react-native-paper'

const Topbar = () => {
  return (
    <SafeAreaView>
          <Appbar></Appbar>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    height:verticalScale(60),
  },
  titleWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1,
  },
  title: {
    fontSize: scaleFontSize(18),
    fontWeight:'600',
    color: '#010101',
  },
  actionsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Topbar