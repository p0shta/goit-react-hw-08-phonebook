import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';

export default function Nav() {
    return (
        <nav>
            <ul className={s.nav}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
                        Contacts
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

// className={({ isActive }) => (isActive ? s.linkActive : s.link)
