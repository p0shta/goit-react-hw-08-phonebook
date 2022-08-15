import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

import s from './AppBar.module.scss';

export default function AppBar() {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <header className={s.header}>
            <Nav />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}
