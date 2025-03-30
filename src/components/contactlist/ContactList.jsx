import styles from "./ContactList.module.css";
import Contact from '../contact/Contact.jsx'
import { useSelector } from "react-redux";


export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name)
    const visibleContacts = Array.isArray(contacts) ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : []; 
    return (
        <ul className={styles.list}>
            {visibleContacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
</ul>
    )
}