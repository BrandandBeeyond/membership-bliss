import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistUserConfig={
    key:'user',
    storage:AsyncStorage,
    whitelist:['user']
}

const store = configureStore({

})