import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from '../redux/auth/authOperations';

import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';

import HomePage from '../Pages/HomePage/HomePage';
import ContactsPage from '../Pages/ContactsPage/ContactsPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';

export function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(state => state.auth.isRefreshingUserData);

    useEffect(() => {
        dispatch(refreshCurrentUser());
    }, [dispatch]);

    return (
        !isRefreshing && (
            <Container>
                <AppBar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PublicRoute>
                                <HomePage />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute navigateTo="/login">
                                <ContactsPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <PublicRoute restricted navigateTo="/contacts">
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute restricted navigateTo="/contacts">
                                <RegisterPage />
                            </PublicRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Container>
        )
    );
}
