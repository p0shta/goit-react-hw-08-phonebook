import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './authOperations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
            state.error = null;
        },
        [refreshCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.error = null;
        },
    },
});
