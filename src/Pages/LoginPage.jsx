import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authOperations';

export default function Login() {
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
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email
                    <input
                        type="text"
                        id="email"
                        value={email}
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        type="text"
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Log in</button>
            </form>
        </main>
    );
}
