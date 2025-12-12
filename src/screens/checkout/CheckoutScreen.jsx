import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
} from 'react-native';
import { Button, TextInput, RadioButton, List, ActivityIndicator, MD2Colors } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../../components/Typography';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

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

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [loadingProceed, setLoadingProceed] = useState(false);

  useEffect(() => {
    fetchIndiaStates();
  }, []);

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
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

  const handleStateSelect = async stateName => {
    setSelectedState(stateName);
    handleChange('state', stateName);
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
    setCityModal(false);
  };

  const gotoPaymentScreen = () => {
    setLoadingProceed(true);

    setTimeout(() => {
      navigation.navigate('PaymentScreen', {
        buyerdetails: formData,
        membershipdetails: plan,
      });

      setLoadingProceed(false);
    }, 2500);
  };

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
          style={{ marginBottom: verticalScale(16) }}
        />

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
          style={{ marginBottom: verticalScale(16) }}
        />

        {/* Phone */}
        <View style={{ flexDirection: 'row', marginBottom: verticalScale(16) }}>
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
            style={{ marginBottom: verticalScale(16) }}
          />
        </TouchableOpacity>

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
            <FlatList
              data={cities}
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
