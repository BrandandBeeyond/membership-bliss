import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Typography from '../../../components/Typography';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import { membershipScreenStyle } from './Style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import {
  ActivityIndicator,
  Button,
  Divider,
  MD2Colors,
  Modal,
  Portal,
  TextInput,
} from 'react-native-paper';
import CrownIcon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useEffect, useRef, useState } from 'react';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllMembershipPlans,
  getMymembershipDetail,
} from '../../../redux/actions/MembershipAction';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { formatDate } from '../../../config/FormatDate';
import ArrivalSection from './ArrivalSection';
import SuccessPopup from '../../../components/popup/SuccessPopup';

const MembershipScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const refMemberships = useRef();
  const refRequestCard = useRef();
  const { membershipplans, loading } = useSelector(
    state => state.membershipplans,
  );

  const { activeMembership } = useSelector(state => state.membershipbookings);

  const hasMembership = Boolean(activeMembership);

  const [buttonLoading, setButtonLoading] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    city: '',
  });

  const handleChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  useEffect(() => {
    dispatch(getAllMembershipPlans());
    dispatch(getMymembershipDetail());
  }, [dispatch]);

  const gradientMap = {
    green: ['#5A6654', '#2d3628ff'],
    brown: ['#C3905F', '#744d26ff'],
    skyblue: ['#A6DFF1', '#629db0ff'],
  };

  const handleBookNow = plan => {
    setButtonLoading(plan._id);

    setTimeout(() => {
      refMemberships.current?.close();
      setButtonLoading(null);
      navigation.navigate('EditionScreen', { plan });
    }, 2000);
  };

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <ScrollView contentContainerStyle={globalStyle.px20}>
        {loading ? (
          <LottieView
            source={require('../../../asset/loader/loader.json')}
            style={{ width: 330, height: 330 }}
            autoPlay
            loop
          />
        ) : (
          <View>
            <View style={[membershipScreenStyle.memberCard]}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#4b6144ff', '#465f3fff', '#3a5135ff', '#2c3c28ff']}
                style={membershipScreenStyle.background}
              >
                <View
                  style={[
                    globalStyle.row,
                    globalStyle.justifyBetween,
                    globalStyle.alignCenter,
                  ]}
                >
                  <Typography variant="h5" color="#ffffff" weight="MSemiBold">
                    {hasMembership
                      ? activeMembership.memberDetails.fullname
                      : 'No Membership'}
                  </Typography>
                  <View style={membershipScreenStyle.bgwhitePadding10Radius}>
                    <UserIcon name="user-o" color="#6d6969ff" size={25} />
                  </View>
                </View>

                <View
                  style={[
                    globalStyle.row,
                    globalStyle.mt10,
                    { columnGap: verticalScale(40) },
                  ]}
                >
                  <View style={globalStyle.column}>
                    <Typography variant="caption" weight="MMedium" color="#fff">
                      Valid From{''}
                    </Typography>
                    <Typography
                      variant="subline"
                      weight="MSemiBold"
                      color="#fff"
                    >
                      {hasMembership
                        ? formatDate(activeMembership.startDate)
                        : '--'}
                    </Typography>
                  </View>

                  <View style={globalStyle.column}>
                    <Typography variant="caption" weight="MMedium" color="#fff">
                      Valid To{''}
                    </Typography>
                    <Typography
                      variant="subline"
                      weight="MSemiBold"
                      color="#fff"
                    >
                      {hasMembership
                        ? formatDate(activeMembership.endDate)
                        : '--'}
                    </Typography>
                  </View>
                </View>
              </LinearGradient>
            </View>

            <View
              style={[
                globalStyle.dflex,
                globalStyle.alignCenter,
                globalStyle.mt20,
              ]}
            >
              {!hasMembership ? (
                <Button
                  mode="contained"
                  style={[
                    globalStyle.rounded10,
                    { backgroundColor: '#202b1d' },
                  ]}
                  onPress={() => refMemberships.current.open()}
                >
                  <View
                    style={[
                      globalStyle.row,
                      globalStyle.alignCenter,
                      globalStyle.cg5,
                    ]}
                  >
                    <Typography variant="body" color="#fff">
                      Join Now
                    </Typography>
                    <CrownIcon name="flash-outline" color="#fff" size={20} />
                  </View>
                </Button>
              ) : (
                <Button mode="outlined" onPress={() => setDetailsModal(true)}>
                  View details
                </Button>
              )}

              {hasMembership && (
                <>
                  <>
                    <ArrivalSection
                      booking={activeMembership}
                      setSuccessVisible={setSuccessVisible}
                    />
                  </>

                  <View
                    style={[
                      globalStyle.mt20,

                      {
                        borderWidth: horizontalScale(0.5),
                        borderColor: '#adadadff',
                        borderRadius: horizontalScale(20),
                        width: '100%',
                        background: 'transparent',
                        padding: horizontalScale(10),
                        marginBottom: verticalScale(60),
                      },
                    ]}
                  >
                    <View
                      style={[
                        globalStyle.row,
                        globalStyle.alignCenter,
                        globalStyle.cg10,
                      ]}
                    >
                      <View style={globalStyle.flex}>
                        <Typography
                          variant="fthead"
                          color="#383838ff"
                          weight="Bold"
                        >
                          Request Your Physical Membership card
                        </Typography>
                        <Typography
                          variant="subline"
                          color="#5c5c5cff"
                          weight="MMedium"
                          style={{ marginBottom: verticalScale(12) }}
                        >
                          Want a Physical copy of your membership card ? Request
                          now !
                        </Typography>
                        <LinearGradient
                          colors={['#649361ff', '#457542ff', '#385437ff']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={{
                            borderRadius: horizontalScale(30),
                            paddingHorizontal: horizontalScale(15),
                            paddingVertical: verticalScale(1),
                            height: verticalScale(28),
                            lineHeight: verticalScale(34),
                          }}
                        >
                          <Button
                            mode="contained"
                            onPress={() => refRequestCard.current.open()}
                            labelStyle={{
                              color: '#ffffff',
                              fontSize: scaleFontSize(13),
                              fontWeight: '600',
                            }}
                            style={{
                              backgroundColor: 'transparent',
                            }}
                          >
                            Request Card
                          </Button>
                        </LinearGradient>
                      </View>
                      <Image
                        source={require('../../../../assets/images/privelage_card.png')}
                        style={{
                          height: verticalScale(130),
                          width: horizontalScale(130),
                        }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </>
              )}

              <RBSheet
                ref={refMemberships}
                height={550}
                useNativeDriver={false}
                customStyles={{
                  wrapper: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  },
                  container: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingHorizontal: 20,
                  },
                  draggableIcon: {
                    backgroundColor: '#000',
                  },
                }}
                customModalProps={{
                  animationType: 'slide',
                  statusBarTranslucent: true,
                }}
                customAvoidingViewProps={{
                  enabled: false,
                }}
              >
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingVertical: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View style={[globalStyle.py20, globalStyle.px10]}>
                    <Typography
                      variant="h4"
                      color="#2d532c"
                      weight="MSemiBold"
                      style={globalStyle.textCenter}
                    >
                      Choose Edition
                    </Typography>
                  </View>

                  {loading ? (
                    <>
                      <ActivityIndicator
                        color={MD2Colors.green600}
                        animating={true}
                      />
                    </>
                  ) : (
                    <>
                      {membershipplans.map(plan => {
                        return (
                          <View
                            key={plan._id}
                            style={[
                              membershipScreenStyle.editionCard,
                              globalStyle.row,
                              globalStyle.mb20,
                              { columnGap: horizontalScale(60) },
                            ]}
                          >
                            <LinearGradient
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              colors={gradientMap[plan.colorScheme]}
                              style={globalStyle.BoxEditionU}
                            >
                              <Image
                                source={{ uri: plan.thumbnail.url }}
                                style={{
                                  width: horizontalScale(45),
                                  height: verticalScale(45),
                                  resizeMode: 'contain',
                                }}
                              />
                            </LinearGradient>

                            <View>
                              <Typography
                                variant="h6"
                                weight="MSemiBold"
                                color="#465346ff"
                              >
                                {plan.name}
                              </Typography>

                              <Button
                                onPress={() => handleBookNow(plan)}
                                mode="contained"
                                loading={buttonLoading === plan._id}
                                disabled={buttonLoading === plan._id}
                                contentStyle={{
                                  height: verticalScale(24),
                                }}
                                style={{
                                  backgroundColor: '#5A6654',
                                  width: horizontalScale(100),
                                  alignSelf: 'flex-start',
                                  borderRadius: 6,
                                }}
                                labelStyle={{
                                  fontSize: scaleFontSize(12),
                                  textTransform: 'none',
                                  color: '#fff',
                                }}
                              >
                                Book now
                              </Button>
                            </View>
                          </View>
                        );
                      })}
                    </>
                  )}
                </ScrollView>
              </RBSheet>
            </View>
          </View>
        )}
        <Portal>
          <Modal
            visible={detailsModal}
            onDismiss={() => setDetailsModal(false)}
            contentContainerStyle={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 16,
              maxHeight: '75%',
            }}
          >
            <View style={globalStyle.mt10}>
              <View
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg20,
                  globalStyle.my3,
                ]}
              >
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  Membership No :
                </Typography>
                <Typography
                  variant="subhead"
                  weight="MMedium"
                  color="#2e2c2cff"
                >
                  {activeMembership?.membershipNumber}
                </Typography>
              </View>

              <View
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg20,
                  globalStyle.my3,
                ]}
              >
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  Membership Name :
                </Typography>
                <Typography
                  variant="subhead"
                  weight="MMedium"
                  color="#2e2c2cff"
                >
                  {activeMembership?.memberDetails.fullname}
                </Typography>
              </View>

              <View
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg20,
                  globalStyle.my3,
                ]}
              >
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  Edition ID:
                </Typography>
                <Typography
                  variant="subhead"
                  weight="MMedium"
                  color="#2e2c2cff"
                >
                  {activeMembership?.membershipPlanId.name}
                </Typography>
              </View>

              <View
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg20,
                  globalStyle.my3,
                ]}
              >
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  Status:
                </Typography>
                <Typography
                  variant="subhead"
                  weight="MMedium"
                  color="#409a55ff"
                >
                  {activeMembership?.status}
                </Typography>
              </View>

              <View
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg20,
                  globalStyle.my3,
                ]}
              >
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  Payment Status:
                </Typography>
                <Typography
                  variant="subhead"
                  weight="MMedium"
                  color="#409a55ff"
                >
                  {activeMembership?.paymentStatus}
                </Typography>
              </View>

              <View
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg20,
                  globalStyle.my3,
                ]}
              >
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  Payment Date:
                </Typography>
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  {formatDate(activeMembership?.paymentDate)}
                </Typography>
              </View>

              <View
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg20,
                  globalStyle.my3,
                ]}
              >
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  Valid From:
                </Typography>

                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  {formatDate(activeMembership?.startDate)}
                </Typography>
              </View>

              <View
                style={[
                  globalStyle.row,
                  globalStyle.alignCenter,
                  globalStyle.cg20,
                  globalStyle.my3,
                ]}
              >
                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  Valid To:
                </Typography>

                <Typography
                  variant="subhead"
                  weight="MSemiBold"
                  color="#2e2c2cff"
                >
                  {formatDate(activeMembership?.endDate)}
                </Typography>
              </View>
            </View>

            <Button onPress={() => setDetailsModal(false)}>Close</Button>
          </Modal>
        </Portal>
      </ScrollView>
      <LinearGradient
        pointerEvents="none"
        colors={[
          'transparent',
          'rgba(247, 252, 246, 0.4)',
          'rgba(231, 241, 229, 0.4)',
          'rgba(195, 215, 191, 0.46)',
          'rgba(218, 238, 212, 0.55)',
        ]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: verticalScale(190),
          zIndex: -1,
        }}
      />

      <SuccessPopup
        visible={successVisible}
        onClose={() => setSuccessVisible(false)}
        title="Arrival Date Submitted"
        message="Your arrival request has been sent for approval."
      />

      <RBSheet
        ref={refRequestCard}
        height={800}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 20,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View style={[globalStyle.py20, globalStyle.px10]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 20 }}
          >
            {/* HEADER */}
            <View
              style={{
                height: verticalScale(40),
                justifyContent: 'center',
                marginBottom: verticalScale(10),
              }}
            >
              {/* Back Arrow */}
              <TouchableOpacity
                onPress={() => refRequestCard.current?.close()}
                style={{
                  position: 'absolute',
                  left: 0,
                  zIndex: 1,
                }}
              >
              <FontAwesome6 name="arrow-left-long" color={'#000000'} size={20} />
              </TouchableOpacity>

              {/* Center Title */}
              <Typography
                variant="h4"
                color="#000"
                weight="normal"
                style={{ textAlign: 'center' }}
              >
                Request Physical Card
              </Typography>
            </View>

            {/* IMAGE */}
            <View style={[globalStyle.alignCenter, globalStyle.mt10]}>
              <Image
                source={require('../../../../assets/images/privelage_card.png')}
                style={{
                  width: horizontalScale(160),
                  height: verticalScale(100),
                }}
                resizeMode="contain"
              />
            </View>

            {/* FORM */}
            <View style={globalStyle.mt15}>
              <TextInput
                label="Full Name"
                mode="outlined"
                value={formData.fullname}
                outlineColor="#b0aeaeff"
                activeOutlineColor="#588650ff"
                outlineStyle={{ borderRadius: horizontalScale(12) }}
                onChangeText={text => handleChange('fullname', text)}
                style={{ marginBottom: verticalScale(6) }}
              />

              <TextInput
                label="Email"
                mode="outlined"
                value={formData.email}
                outlineColor="#b0aeaeff"
                activeOutlineColor="#588650ff"
                outlineStyle={{ borderRadius: horizontalScale(12) }}
                keyboardType="email-address"
                onChangeText={text => handleChange('email', text)}
                style={{ marginBottom: verticalScale(6) }}
              />

              <TextInput
                label="Phone Number"
                mode="outlined"
                value={formData.phone}
                outlineColor="#b0aeaeff"
                activeOutlineColor="#588650ff"
                outlineStyle={{ borderRadius: horizontalScale(12) }}
                keyboardType="phone-pad"
                onChangeText={text => handleChange('phone', text)}
                style={{ marginBottom: verticalScale(6) }}
              />

              <TextInput
                label="Address"
                mode="outlined"
                value={formData.address}
                outlineColor="#b0aeaeff"
                activeOutlineColor="#588650ff"
                outlineStyle={{ borderRadius: horizontalScale(12) }}
                multiline
                numberOfLines={3}
                onChangeText={text => handleChange('address', text)}
                style={{ marginBottom: verticalScale(6) }}
              />

              <TextInput
                label="City"
                mode="outlined"
                value={formData.city}
                outlineColor="#b0aeaeff"
                activeOutlineColor="#588650ff"
                outlineStyle={{ borderRadius: horizontalScale(12) }}
                onChangeText={text => handleChange('city', text)}
                style={{ marginBottom: verticalScale(6) }}
              />

              <TextInput
                label="State"
                mode="outlined"
                value={formData.state}
                outlineColor="#b0aeaeff"
                activeOutlineColor="#588650ff"
                outlineStyle={{ borderRadius: horizontalScale(12) }}
                onChangeText={text => handleChange('state', text)}
                style={{ marginBottom: verticalScale(14) }}
              />

              <Button
                mode="contained"
                style={{
                  borderRadius: horizontalScale(12),
                  backgroundColor: '#588650ff',
                  paddingVertical: verticalScale(2),
                }}
                onPress={() => console.log('Form submitted:', formData)}
              >
                Submit Request
              </Button>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default MembershipScreen;
