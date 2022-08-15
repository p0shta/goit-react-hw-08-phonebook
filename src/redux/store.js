import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
import { contactsApi } from './contacts/contactsApi';
import { authSlice } from './auth/authSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice.reducer,
        auth: persistReducer(authPersistConfig, authSlice.reducer),
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        contactsApi.middleware,
    ],
    devTools: process.env.NODE_ENV === 'development',
});
// auth: authSlice.reducer,

export const persistor = persistStore(store);
