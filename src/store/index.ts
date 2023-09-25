// src/store/configureStore.ts
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Storage,
} from 'redux-persist';
import { MMKV } from 'react-native-mmkv';
import { api } from '../services/api';
import themeReducer from './theme'; // Import your existing theme slice
import bankReducer from './bankslice/bankslice'

const rootReducer = combineReducers({
  theme: themeReducer,
  bank: bankReducer, // Add the new bankslice here
  [api.reducerPath]: api.reducer,
});

const storage = new MMKV();
export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme', 'bank'], // Include 'bank' in the persisted state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
