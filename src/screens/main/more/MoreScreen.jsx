import {SafeAreaView} from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';

const MoreScreen = () => {
  return (
    <SafeAreaView>
      <View>
         <Typography variant='h2' weight='Normal'>Category</Typography>
      </View>
    </SafeAreaView>
  );
};

export default MoreScreen;
