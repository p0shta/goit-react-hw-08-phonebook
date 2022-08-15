import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register', async user => {
    try {
        const response = await axios.post('/users/signup', user);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return 'Something went wrong. Please try again.';
    }
});

export const login = createAsyncThunk('auth/login', async user => {
    try {
        const response = await axios.post('/users/login', user);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return 'Something went wrong. Please try again.';
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return 'Something went wrong. Please try again.';
    }
});
//-------------------------------
// export const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://connections-api.herokuapp.com',
//     }),
//     endpoints: builder => ({
//         register: builder.mutation({
//             query: user => ({
//                 url: `/users/signup`,
//                 method: 'POST',
//                 body: user,
//             }),
//         }),
//         login: builder.mutation({
//             query: user => ({
//                 url: `/users/login`,
//                 method: 'POST',
//                 body: user,
//             }),
//         }),
//     }),
// });
