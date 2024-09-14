
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userReducer from './Slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

// Configure the store
const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
