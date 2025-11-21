import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import Typography from './Typography';
import { globalStyle } from '../../assets/styles/globalStyle';
import ProfileIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadsetIcon from 'react-native-vector-icons/FontAwesome6';
import RightArrow from 'react-native-vector-icons/Feather';

const MenuTabs = ({ iconName, label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyle.row,
        globalStyle.cg10,
        globalStyle.alignCenter,
        globalStyle.my5,
        globalStyle.justifyBetween,
        globalStyle.borderBtm,
        
      ]}
    >
      <View
        style={[globalStyle.row, globalStyle.cg10, globalStyle.alignCenter]}
      >
       {label === 'Profile' ? <ProfileIcon name={iconName} size={18} /> : label === 'Customer Support'? <HeadsetIcon name={iconName} size={20} /> : <Icon name={iconName} size={20} />}
        <Typography variant="subtitle" weight="Normal">
          {label}
        </Typography>
      </View>

      <RightArrow name="chevron-right" size={20} color="#3d3c3cff" />
    </TouchableOpacity>
  );
};

export default MenuTabs;
