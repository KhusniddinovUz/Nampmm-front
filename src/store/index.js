import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import metricsReducer from "./metricsSlice";

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  metrics: metricsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})

export const persistor = persistStore(store);
