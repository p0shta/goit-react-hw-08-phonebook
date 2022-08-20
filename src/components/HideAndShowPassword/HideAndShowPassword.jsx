import { BiHide, BiShow } from 'react-icons/bi';

import s from './HideAndShowPassword.module.scss';

export default function HideAndShowPassword({ showPassword, setShowPassword }) {
    return (
        <div className={s.visibleIcon} onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <BiHide /> : <BiShow />}
        </div>
    );
}
