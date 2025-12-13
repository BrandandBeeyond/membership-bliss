import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { ScrollView, View } from 'react-native';
import Typography from '../../../components/Typography';

const MembershipSuccess = () => {
  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <ScrollView>
        <View style={globalStyle.textCenter}>
          <Typography variant="h2" color="#000" weight="MSemiBold">
            SUCCESS
          </Typography>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MembershipSuccess;
