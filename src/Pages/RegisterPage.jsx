import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';

import Greeting from 'components/Greeting/Greeting';
import s from './RegisterPage.module.scss';

export default function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

        setName('');
        setEmail('');
        setPassword('');
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
                <label htmlFor="password" className={s.formRow}>
                    Password
                    <input
                        className={s.input}
                        type="text"
                        value={password}
                        onChange={handleChange}
                        name="password"
                        id="password"
                        required
                    />
                </label>
                <button type="submit" className={s.loginBtn}>
                    Create account
                </button>
            </form>
        </main>
    );
}
