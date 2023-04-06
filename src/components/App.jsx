import { useEffect } from 'react';
import ConstactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList ';
import { deleteContacts } from '../redux/boxSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../redux/boxSlice';
import { Container, Title, SecondTitle } from './App.styles';
import { nanoid } from 'nanoid';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

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

  const deletedContacts = nameId => {
    dispatch(deleteContacts(nameId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ConstactForm onSubmit={addContactsList} />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList
            onFilterContacts={filterContacts()}
            onChange={deletedContacts}
          />
        </>
      ) : (
        <SecondTitle>"Contact list is empty"</SecondTitle>
      )}
    </Container>
  );
}
