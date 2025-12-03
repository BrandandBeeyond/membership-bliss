import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllMembershipCategories } from '../../../redux/actions/MembershipAction';

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getAllMembershipCategories());
  }, [dispatch]);

  console.log(categories);

  return (
    <SafeAreaView>
      <View>
        <Typography variant="h2" weight="Normal">
          Category
        </Typography>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
