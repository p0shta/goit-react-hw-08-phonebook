import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsError } from '../../redux/auth/authSelectors';
import { login } from '../../redux/auth/authOperations';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import HideAndShowPassword from 'components/HideAndShowPassword/HideAndShowPassword';
import Greeting from 'components/Greeting/Greeting';
import s from './LoginPage.module.scss';

export default function LoginPage() {
    const dispatch = useDispatch();
    const isError = useSelector(getIsError);
    const [email, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isError) Notify.failure('Something went wrong. Please try again.');
    }, [isError]);

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
    };

    return (
        <main className={s.page}>
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
                <label htmlFor="password" className={s.formRowRelative}>
                    Password
                    <input
                        className={s.input}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                    />
                    <HideAndShowPassword
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                </label>
                <button type="submit" className={s.registerBtn}>
                    Log in
                </button>
            </form>
        </main>
    );
}
