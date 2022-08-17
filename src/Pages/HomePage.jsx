import Greeting from 'components/Greeting/Greeting';
import Preview from '../images/preview.webp';
import s from './HomePage.module.scss';

export default function Home() {
    return (
        <main className={s.page}>
            <Greeting />
            <div className={s.preview}>
                <h1 className={s.title}>Phonebook.</h1>

                <img src={Preview} alt="preview" className={s.img} />
            </div>
        </main>
    );
}
