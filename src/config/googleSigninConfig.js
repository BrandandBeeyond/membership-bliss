import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_API_KEY } from './Key';

export const initGoogleSignin = () => {
  GoogleSignin.configure({
    webClientId: WEB_API_KEY,
    offlineAccess: true,
  });
};
