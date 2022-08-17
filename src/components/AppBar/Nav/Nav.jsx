import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../redux/auth/authSelectors';

import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';

export default function Nav() {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <nav>
            <ul className={s.nav}>
                {isLoggedIn ? (
                    <li>
                        <NavLink
                            to="contacts"
                            className={({ isActive }) => (isActive ? s.linkActive : s.link)}
                        >
                            Contacts
                        </NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? s.linkActive : s.link)}
                        >
                            Home
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

// className={({ isActive }) => (isActive ? s.linkActive : s.link)
