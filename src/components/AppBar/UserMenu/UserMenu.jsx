import { useSelector } from 'react-redux';
import { getUserName } from '../../../redux/auth/authSelectors';
import s from './UserMenu.module.scss';

export default function UserMenu() {
    const name = useSelector(getUserName);
    console.log(name);
    return (
        <div className={s.userMenu}>
            <p className={s.greeting}>Hello, {getUserName}!</p>
            <button className={s.logoutBtn} type="button">
                Logout
            </button>
        </div>
    );
}
