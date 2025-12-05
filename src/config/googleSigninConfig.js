import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ANDROID_CLIENT_Id, GOOGLE_WEB_CLIENT_ID } from './Key';

export const initGoogleSignin = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_Id,
    offlineAccess: true,
  });
};
