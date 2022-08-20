import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsError } from '../../redux/auth/authSelectors';
import { register } from '../../redux/auth/authOperations';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import HideAndShowPassword from 'components/HideAndShowPassword/HideAndShowPassword';
import Greeting from 'components/Greeting/Greeting';
import s from './RegisterPage.module.scss';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const isError = useSelector(getIsError);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isError) Notify.failure('Something went wrong. Please try again.');
    }, [isError]);

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'email':
                setEmail(value);
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

        dispatch(register({ name, email, password }));
    };

    return (
        <main className={s.page}>
            <Greeting />

            <form onSubmit={handleSubmit} className={s.form}>
                <label htmlFor="name" className={s.formRow}>
                    Name
                    <input
                        className={s.input}
                        type="text"
                        value={name}
                        onChange={handleChange}
                        name="name"
                        id="name"
                        required
                    />
                </label>
                <label htmlFor="email" className={s.formRow}>
                    Email
                    <input
                        className={s.input}
                        type="text"
                        value={email}
                        onChange={handleChange}
                        name="email"
                        id="email"
                        required
                    />
                </label>
                <label htmlFor="password" className={s.formRowRelative}>
                    Password
                    <input
                        className={s.input}
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handleChange}
                        name="password"
                        id="password"
                        required
                    />
                    <HideAndShowPassword
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                </label>
                <button type="submit" className={s.loginBtn}>
                    Create account
                </button>
            </form>
        </main>
    );
}
