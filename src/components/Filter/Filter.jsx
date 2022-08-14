import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

import s from './Filter.module.css';

export default function Filter() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
        <>
            <h2 className="title">Contacts</h2>

            <p className={s.title}>Find contacts by name</p>
            <input
                onChange={e => dispatch(changeFilter(e.target.value))}
                className={s.input}
                type="text"
                value={filter}
            />
        </>
    );
}
