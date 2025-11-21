import {SafeAreaView} from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';

const CategoryScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Typography variant='h2' weight='Normal'>Category</Typography>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
