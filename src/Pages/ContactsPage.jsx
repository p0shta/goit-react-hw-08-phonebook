import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

export default function Contacts() {
    return (
        <main className="wrapper">
            <ContactForm />
            <Filter />
            <ContactList />
        </main>
    );
}
