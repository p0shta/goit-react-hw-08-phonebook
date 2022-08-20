import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register', async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post('/users/signup', user);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return rejectWithValue('Something went wrong. Please try again.');
    }
});

export const login = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post('/users/login', user);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return rejectWithValue('Something went wrong. Please try again.');
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return rejectWithValue('Something went wrong. Please try again.');
    }
});

export const refreshCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
    const state = thunkApi.getState();
    const oldToken = state.auth.token;

    if (!oldToken) {
        return thunkApi.rejectWithValue();
    }

    token.set(oldToken);

    try {
        const response = await axios.get('/users/current');
        return response.data;
    } catch (error) {
        return 'Something went wrong. Please try again.';
    }
});
