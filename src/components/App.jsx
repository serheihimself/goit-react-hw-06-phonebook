import { useEffect } from 'react';
import ConstactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList ';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../redux/boxSlice';
import { nanoid } from 'nanoid';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  useEffect(() => {
    window.localStorage.setItem('key', JSON.stringify(contacts));
  }, [contacts]);

  const addContactsList = newContact => {
    const trueFilter = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (trueFilter) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    return { ...newContact, id: nanoid() };
  };

  const filterContacts = () => {
    const normalName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalName)
    );
  };

  const onFilterChange = evt => {
    return evt.target.value;
  };

  const deletedContacts = nameId => {
    return prevState => prevState.filter(contact => contact.id !== nameId);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ConstactForm onSubmit={addContactsList} />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter value={filter} onFilterChange={onFilterChange} />
          <ContactList
            onFilterContacts={filterContacts()}
            onChange={deletedContacts}
          />
        </>
      ) : (
        <h2>"Contact list is empty"</h2>
      )}
    </div>
  );
}
