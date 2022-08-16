import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/authOperations';
import { getUserName } from '../../../redux/auth/authSelectors';
import s from './UserMenu.module.scss';

export default function UserMenu() {
    const dispatch = useDispatch();
    const username = useSelector(getUserName);

    return (
        <>
            <div className={s.userMenu}>
                <p className={s.greeting}>Hello, {username}!</p>
                <button className={s.logoutBtn} type="button" onClick={() => dispatch(logout())}>
                    Logout
                </button>
            </div>
        </>
    );
}
