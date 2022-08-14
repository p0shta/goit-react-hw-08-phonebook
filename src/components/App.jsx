import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import Contacts from 'Pages/ContactsPage';
import Home from 'Pages/HomePage';
import Login from 'Pages/LoginPage';
import Register from 'Pages/RegisterPage';

export function App() {
    return (
        <Container>
            <AppBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Container>
    );
}
