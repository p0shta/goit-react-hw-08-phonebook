import Greeting from 'components/Greeting/Greeting';
import s from './HomePage.module.scss';

export default function Home() {
    return (
        <main className={s.page}>
            <Greeting />
        </main>
    );
}
