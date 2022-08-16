import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

import s from './Filter.module.scss';

export default function Filter() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
        <label className={s.formRow}>
            Find contacts by name
            <input
                onChange={e => dispatch(changeFilter(e.target.value))}
                className={s.input}
                type="text"
                value={filter}
            />
        </label>
    );
}
