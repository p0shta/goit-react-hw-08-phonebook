import s from './Greeting.module.scss';

export default function Greeting() {
    return (
        <div className={s.greeting}>
            <h1 className={s.title}>Keep your contacts</h1>
            <p className={s.subTitle}>
                {' '}
                It's simple! <b>Just register and enjoy!</b>
            </p>

            <p className={s.subTitle}>Stay connected to the world with just a call and the app!</p>
        </div>
    );
}
