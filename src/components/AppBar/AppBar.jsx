import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

import s from './AppBar.module.scss';

export default function AppBar() {
    return (
        <header className={s.header}>
            <Nav />
            <AuthNav />
            <UserMenu />
        </header>
    );
}
