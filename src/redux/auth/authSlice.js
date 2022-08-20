import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './authOperations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshingUserData: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: (state, action) => {
            state.error = null;
        },
        [register.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        },
        [register.rejected]: (state, action) => {
            state.error = true;
        },
        [login.pending]: (state, action) => {
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        },
        [login.rejected]: (state, action) => {
            state.error = true;
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
        [refreshCurrentUser.pending]: state => {
            state.isRefreshingUserData = true;
        },
        [refreshCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshingUserData = false;
            state.error = null;
        },
        [refreshCurrentUser.rejected]: state => {
            state.isRefreshingUserData = false;
        },
    },
});
