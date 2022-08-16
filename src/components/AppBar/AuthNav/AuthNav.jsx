import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.scss';

export default function AuthNav() {
    return (
        <nav>
            <ul className={s.nav}>
                <li>
                    <NavLink
                        to="/register"
                        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
                    >
                        Registration
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="login"
                        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
