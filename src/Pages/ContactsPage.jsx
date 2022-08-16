import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

import s from './ContactsPage.module.scss';

export default function Contacts() {
    return (
        <main className={s.page}>
            {/* <h1 className="title">Phonebook</h1> */}
            <ContactForm />
            <ContactList />
        </main>
    );
}
