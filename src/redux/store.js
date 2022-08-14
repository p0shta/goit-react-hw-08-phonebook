import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
import { contactsApi } from './contacts/contactsApi';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
    devTools: process.env.NODE_ENV === 'development',
});
