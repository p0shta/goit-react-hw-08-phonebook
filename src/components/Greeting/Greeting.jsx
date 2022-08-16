import s from './Greeting.module.scss';

export default function Greeting() {
    return (
        <div className={s.greeting}>
            <h1 className={s.title}>Keep your contacts</h1>
            <p className={s.subTitle}>
                Stay in touch with the world at a distance of one application!
            </p>
        </div>
    );
}
