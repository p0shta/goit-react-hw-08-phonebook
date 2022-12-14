import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contacts/contactsApi';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

export default function ContactList() {
    const filter = useSelector(state => state.filter);
    const { data: contacts, isFetching } = useGetContactsQuery();
    const filteredContacts = contacts?.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h2 className="title">Contacts list</h2>

            <Filter />

            <ul>
                {filteredContacts?.map(contact => (
                    <ContactListItem key={contact.id} contact={contact} />
                ))}

                {isFetching && (
                    <li>
                        <Loader />
                    </li>
                )}
            </ul>
        </div>
    );
}
