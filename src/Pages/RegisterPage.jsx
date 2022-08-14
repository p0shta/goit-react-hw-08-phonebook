import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';

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
        <main onSubmit={handleSubmit}>
            <form>
                <label htmlFor="name">
                    Name
                    <input type="text" value={name} onChange={handleChange} name="name" id="name" required />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        type="text"
                        value={email}
                        onChange={handleChange}
                        name="email"
                        id="email"
                        required
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        type="text"
                        value={password}
                        onChange={handleChange}
                        name="password"
                        id="password"
                        required
                    />
                </label>
                <button type="submit">Create account</button>
            </form>
        </main>
    );
}
