import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/authSelectors';

import Greeting from 'components/Greeting/Greeting';
import s from './LoginPage.module.scss';

export default function Login() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const dispatch = useDispatch();
    const [email, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setName(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login({ email, password }));

        setName('');
        setPassword('');
    };

    return (
        <main className={s.page}>
            {isLoggedIn && <Navigate to="/contacts" replace={true} />}

            <Greeting />

            <form onSubmit={handleSubmit} className={s.form}>
                <label htmlFor="email" className={s.formRow}>
                    Email
                    <input
                        className={s.input}
                        type="text"
                        id="email"
                        value={email}
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="password" className={s.formRow}>
                    Password
                    <input
                        className={s.input}
                        type="text"
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className={s.registerBtn}>
                    Log in
                </button>
            </form>
        </main>
    );
}
