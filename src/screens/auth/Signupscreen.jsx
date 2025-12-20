import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../../components/Typography';
import {
  Button,
  List,
  Modal,
  Portal,
  RadioButton,
  Searchbar,
  TextInput,
} from 'react-native-paper';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import axios from 'axios';

const Signupscreen = ({ route, navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    state: '',
    city: '',
  });

  const phone = route.params?.phone || '';
  const [errors, setErrors] = useState({});

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateModal, setStateModal] = useState(false);
  const [cityModal, setCityModal] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [loading, setLoading] = useState(false);

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: null }));
  };

  const handleGenderChange = value => {
    handleChange('gender', value);
  };

  const fetchStates = async () => {
    try {
      const { data } = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/states',
        { country: 'India' },
      );
      setStates(data.data.states || []);
    } catch (err) {
      console.log('State API error', err);
    }
  };

  const fetchCities = async stateName => {
    try {
      const { data } = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        { country: 'India', state: stateName },
      );
      setCities(data.data || []);
    } catch (err) {
      console.log('City API error', err);
    }
  };

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

  const filteredCities = cities.filter(c =>
    c.toLowerCase().includes(citySearch.toLowerCase()),
  );

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgslate, globalStyle.px20]}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Typography variant="h6" weight="MSemiBold" style={globalStyle.mb20}>
          Complete Your Profile
        </Typography>

        {/* First Name */}
        <TextInput
          label="First Name"
          mode="outlined"
          value={formData.firstName}
          onChangeText={t => handleChange('firstName', t)}
          outlineColor="#b0aeaeff"
          activeOutlineColor="#588650ff"
          outlineStyle={{ borderRadius: horizontalScale(12) }}
        />
        {errors.firstName && (
          <Typography variant="caption" color="#ca3c3c">
            {errors.firstName}
          </Typography>
        )}

        {/* Last Name */}
        <TextInput
          label="Last Name"
          mode="outlined"
          value={formData.lastName}
          onChangeText={t => handleChange('lastName', t)}
          style={globalStyle.mt10}
          outlineColor="#b0aeaeff"
          activeOutlineColor="#588650ff"
          outlineStyle={{ borderRadius: horizontalScale(12) }}
        />

        {/* Email */}
        <TextInput
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={t => handleChange('email', t)}
          style={globalStyle.mt10}
          outlineColor="#b0aeaeff"
          activeOutlineColor="#588650ff"
          outlineStyle={{ borderRadius: horizontalScale(12) }}
        />

        {/* Phone (readonly) */}
        <TextInput
          label="Phone"
          mode="outlined"
          value={phone}
          editable={false}
          style={globalStyle.mt10}
          outlineStyle={{ borderRadius: horizontalScale(12) }}
        />

        {/* Gender */}
        <View style={{ marginVertical: verticalScale(15) }}>
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

        {/* State & City */}
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
      </ScrollView>

      {/* Submit */}
      <View style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
        <Button
          mode="contained"
          loading={loading}
          contentStyle={{ height: 48 }}
          style={{ borderRadius: 10, backgroundColor: '#2d532c' }}
        >
          Complete Signup
        </Button>
      </View>

      <Portal>
        <Modal
          visible={stateModal}
          onDismiss={() => setStateModal(false)}
          contentContainerStyle={{
            backgroundColor: '#fff',
            margin: 20,
            borderRadius: 12,
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
        </Modal>
      </Portal>

      <Portal>
        <Modal
          visible={cityModal}
          onDismiss={() => setCityModal(false)}
          contentContainerStyle={{
            backgroundColor: '#fff',
            margin: 20,
            borderRadius: 12,
            maxHeight: '70%',
          }}
        >
          <View
            style={{

              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              maxHeight: '70%',
            }}
          >
            <TextInput
              mode="outlined"
              left={<TextInput.Icon icon="magnify" />}
              value={citySearch}
              onChangeText={text => setCitySearch(text)}
              placeholder="Search city"
              style={{
                marginBottom: verticalScale(10),
                height: verticalScale(30),
                lineHeight: verticalScale(20),
              }}
              outlineColor="#b0aeaeff"
              activeOutlineColor="#588650ff"
              outlineStyle={{
                borderRadius: horizontalScale(12),
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
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

export default Signupscreen;
