import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../../components/Typography';
import {
  Button,
  List,
  Modal,
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

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: null }));
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
        <RadioButton.Group
          value={formData.gender}
          onValueChange={v => handleChange('gender', v)}
        >
          <View style={{ flexDirection: 'row', marginTop: verticalScale(10) }}>
            <RadioButton value="male" color="#2d532c" />
            <Typography>Male</Typography>
            <RadioButton value="female" color="#2d532c" />
            <Typography>Female</Typography>
          </View>
        </RadioButton.Group>

        {/* State & City */}
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setStateModal(true)}
          >
            <TextInput
              label="State"
              mode="outlined"
              value={formData.state}
              editable={false}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => formData.state && setCityModal(true)}
          >
            <TextInput
              label="City"
              mode="outlined"
              value={formData.city}
              editable={false}
            />
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

      {/* State Modal */}
      <Modal visible={stateModal} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000060',
            justifyContent: 'center',
          }}
        >
          <View
            style={{ backgroundColor: '#fff', margin: 20, borderRadius: 10 }}
          >
            <FlatList
              data={states}
              keyExtractor={i => i.name}
              renderItem={({ item }) => (
                <List.Item
                  title={item.name}
                  onPress={() => {
                    handleChange('state', item.name);
                    fetchCities(item.name);
                    setStateModal(false);
                  }}
                />
              )}
            />
          </View>
        </View>
      </Modal>

      {/* City Modal */}
      <Modal visible={cityModal} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000060',
            justifyContent: 'center',
          }}
        >
          <View
            style={{ backgroundColor: '#fff', margin: 20, borderRadius: 10 }}
          >
            <Searchbar
              placeholder="Search city"
              value={citySearch}
              onChangeText={setCitySearch}
            />
            <FlatList
              data={filteredCities}
              keyExtractor={i => i}
              renderItem={({ item }) => (
                <List.Item
                  title={item}
                  onPress={() => {
                    handleChange('city', item);
                    setCityModal(false);
                  }}
                />
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Signupscreen;
