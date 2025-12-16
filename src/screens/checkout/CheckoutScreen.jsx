import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import {
  Button,
  TextInput,
  RadioButton,
  List,
  ActivityIndicator,
  MD2Colors,
  Searchbar,
} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../../components/Typography';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import axios from 'axios';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const CheckoutScreen = ({ route }) => {
  const navigation = useNavigation();
  const { plan } = route.params;

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    dob: '',
    gender: 'male',
    state: '',
    city: '',
    country: 'India',
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [stateModal, setStateModal] = useState(false);
  const [cityModal, setCityModal] = useState(false);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [citySearch, setCitySearch] = useState('');

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [loadingProceed, setLoadingProceed] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchIndiaStates();
  }, []);

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: null }));
  };

  const handleGenderChange = value => {
    handleChange('gender', value);
  };

  const handleDateConfirm = date => {
    handleChange('dob', date.toDateString());
    setDatePickerVisibility(false);
  };
  const fetchIndiaStates = async () => {
    try {
      const { data } = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/states',
        { country: 'India' },
        { headers: { 'Content-Type': 'application/json' } },
      );

      setStates(data.data.states || []);
    } catch (error) {
      console.log('State API Error:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Cancel Checkout?',
          'Are you sure you want to go back? Your checkout process will be cancelled.',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Yes',
              style: 'destructive',
              onPress: () => navigation.goBack(),
            },
          ],
        );
        return true; // block default behavior
      };

      // ✅ NEW API
      const backHandlerSubscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      const unsubscribe = navigation.addListener('beforeRemove', e => {
        e.preventDefault();

        Alert.alert(
          'Cancel Checkout?',
          'Are you sure you want to go back? Your checkout process will be cancelled.',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Yes',
              style: 'destructive',
              onPress: () => navigation.dispatch(e.data.action),
            },
          ],
        );
      });

      return () => {
        // ✅ CORRECT CLEANUP
        backHandlerSubscription.remove();
        unsubscribe();
      };
    }, [navigation]),
  );
  const handleStateSelect = async stateName => {
    setSelectedState(stateName);
    handleChange('state', stateName);
    setErrors(prev => ({ ...prev, city: null }));
    setStateModal(false);

    try {
      const { data } = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        { country: 'India', state: stateName },
        { headers: { 'Content-Type': 'application/json' } },
      );

      setCities(data.data || []);
    } catch (error) {
      console.log('City API Error:', error);
    }
  };

  const handleCitySelect = cityName => {
    setSelectedCity(cityName);

    setFormData(prev => ({ ...prev, city: cityName }));
    setErrors(prev => ({ ...prev, city: null }));
    setCityModal(false);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
    }
    if (!formData.gender.trim()) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const gotoPaymentScreen = () => {
    if (!validateForm()) {
      return;
    }

    setLoadingProceed(true);

    setTimeout(() => {
      navigation.navigate('PaymentScreen', {
        buyerdetails: formData,
        membershipdetails: plan,
      });

      setLoadingProceed(false);
    }, 2500);
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(citySearch.toLowerCase()),
  );

  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <Typography
          color="#2f2e2eff"
          variant="h6"
          weight="MSemiBold "
          style={globalStyle.mb20}
        >
          Step 1: Your Details
        </Typography>
        <Typography
          color="#4b4b4bff"
          variant="body"
          weight="MMedium"
          style={globalStyle.mb20}
        >
          Share your details below to begin your Touchwood Bliss membership
          journey.
        </Typography>

        {/* Full Name */}
        <TextInput
          label="Full Name"
          mode="outlined"
          value={formData.fullname}
          outlineColor="#b0aeaeff"
          activeOutlineColor="#588650ff"
          outlineStyle={{
            borderRadius: horizontalScale(12),
          }}
          onChangeText={text => handleChange('fullname', text)}
          style={{ marginBottom: verticalScale(6) }}
        />
        {errors.fullname && (
          <Typography
            variant="caption"
            color="#ca3c3cff"
            style={{ marginBottom: verticalScale(8) }}
          >
            {errors.fullname}
          </Typography>
        )}

        {/* Email */}
        <TextInput
          label="Email"
          mode="outlined"
          value={formData.email}
          outlineColor="#b0aeaeff"
          activeOutlineColor="#588650ff"
          outlineStyle={{
            borderRadius: horizontalScale(12),
          }}
          keyboardType="email-address"
          onChangeText={text => handleChange('email', text)}
          style={{ marginBottom: verticalScale(6) }}
        />
        {errors.email && (
          <Typography
            variant="caption"
            color="#ca3c3cff"
            style={{ marginBottom: verticalScale(8) }}
          >
            {errors.email}
          </Typography>
        )}

        <View style={{ flexDirection: 'row', marginBottom: verticalScale(6) }}>
          <View
            style={{
              backgroundColor: '#daebd2ff',
              justifyContent: 'center',
              marginTop: verticalScale(3),
              paddingHorizontal: horizontalScale(9),
              borderTopLeftRadius: horizontalScale(12),
              borderBottomLeftRadius: horizontalScale(12),
              height: verticalScale(35),
            }}
          >
            <Button textColor="#2d432dff">+91</Button>
          </View>

          <View style={{ flex: 1 }}>
            <TextInput
              label="Phone"
              mode="outlined"
              value={formData.phone}
              keyboardType="phone-pad"
              maxLength={10}
              outlineColor="#b0aeaeff"
              activeOutlineColor="#588650ff"
              outlineStyle={{
                borderTopRightRadius: horizontalScale(12),
                borderBottomRightRadius: horizontalScale(12),
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              onChangeText={text => handleChange('phone', text)}
            />
          </View>
        </View>
        {errors.phone && (
          <Typography
            variant="caption"
            color="#ca3c3cff"
            style={{ marginBottom: verticalScale(8) }}
          >
            {errors.phone}
          </Typography>
        )}

        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
          <TextInput
            label="Date of Birth"
            mode="outlined"
            value={formData.dob}
            editable={false}
            outlineColor="#b0aeaeff"
            activeOutlineColor="#588650ff"
            outlineStyle={{
              borderRadius: horizontalScale(12),
            }}
            style={{ marginBottom: verticalScale(6) }}
          />
        </TouchableOpacity>
        {errors.dob && (
          <Typography
            variant="caption"
            color="#ca3c3cff"
            style={{ marginBottom: verticalScale(8) }}
          >
            {errors.dob}
          </Typography>
        )}

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />

        <View style={{ marginBottom: verticalScale(16) }}>
          <RadioButton.Group
            onValueChange={handleGenderChange}
            value={formData.gender}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton color="#2d532c" value="male" />
              <Button
                textColor="#2d532c"
                onPress={() => handleGenderChange('male')}
              >
                Male
              </Button>

              <RadioButton color="#2d532c" value="female" />
              <Button
                textColor="#2d532c"
                onPress={() => handleGenderChange('female')}
              >
                Female
              </Button>
            </View>
          </RadioButton.Group>
        </View>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setStateModal(true)}
          >
            <TextInput
              label="State"
              mode="outlined"
              value={selectedState}
              outlineColor="#b0aeaeff"
              activeOutlineColor="#588650ff"
              outlineStyle={{
                borderRadius: horizontalScale(12),
              }}
              editable={false}
            />
            {errors.state && (
              <Typography
                variant="caption"
                color="#ca3c3cff"
                style={{ marginBottom: verticalScale(8) }}
              >
                {errors.state}
              </Typography>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => selectedState && setCityModal(true)}
          >
            <TextInput
              label="City"
              mode="outlined"
              value={selectedCity}
              outlineColor="#b0aeaeff"
              activeOutlineColor="#588650ff"
              outlineStyle={{
                borderRadius: horizontalScale(12),
              }}
              editable={false}
            />
            {errors.city && (
              <Typography
                variant="caption"
                color="#ca3c3cff"
                style={{ marginBottom: verticalScale(8) }}
              >
                {errors.city}
              </Typography>
            )}
          </TouchableOpacity>
        </View>

        <TextInput
          label="Country"
          mode="outlined"
          value="India"
          outlineColor="#b0aeaeff"
          activeOutlineColor="#588650ff"
          outlineStyle={{
            borderRadius: horizontalScale(12),
          }}
          editable={false}
          style={{ marginTop: horizontalScale(16) }}
        />
      </ScrollView>

      <Modal visible={stateModal} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000070',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              maxHeight: '70%',
            }}
          >
            <FlatList
              data={states}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <List.Item
                  title={item.name}
                  onPress={() => handleStateSelect(item.name)}
                />
              )}
            />
            <Button onPress={() => setStateModal(false)}>Close</Button>
          </View>
        </View>
      </Modal>

      <Modal visible={cityModal} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000070',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              maxHeight: '70%',
            }}
          >
            <Searchbar
              placeholder="Search City"
              contentStyle={{
                borderRadius: horizontalScale(12),
              }}
              value={citySearch}
              outlineColor="#b0aeaeff"
              activeOutlineColor="#588650ff"
              onChangeText={text => setCitySearch(text)}
              style={{
                backgroundColor: '#fcf9f9ff',
                borderColor: '#d9ebcfff',
                borderWidth: 1,
                marginBottom: verticalScale(10),
              }}
            />

            <FlatList
              data={filteredCities}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <List.Item
                  title={item}
                  onPress={() => handleCitySelect(item)}
                />
              )}
            />
            <Button onPress={() => setCityModal(false)}>Close</Button>
          </View>
        </View>
      </Modal>

      <View style={{ position: 'absolute', bottom: 20, right: 20, left: 20 }}>
        <Button
          mode="contained"
          loading={loadingProceed}
          disabled={loadingProceed}
          onPress={gotoPaymentScreen}
          contentStyle={{ height: 50 }}
          style={{ borderRadius: 10, backgroundColor: '#2d532c' }}
          labelStyle={{ color: '#fff', fontWeight: '600' }}
        >
          Proceed
        </Button>
      </View>

      <Image
        source={require('../../../assets/images/upperleaf.png')}
        style={{
          position: 'absolute',
          top: verticalScale(-10),
          right: horizontalScale(0),
          height: verticalScale(130),
          zIndex: 222,
          objectFit: 'contain',
          transform: [{ rotate: '50deg' }, { scaleX: -1 }],
        }}
      />
    </SafeAreaView>
  );
};

export default CheckoutScreen;
