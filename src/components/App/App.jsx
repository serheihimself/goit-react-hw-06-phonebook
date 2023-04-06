import ConstactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList ';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/boxSlice';
import { Container, Title, SecondTitle } from './App.styles';

export default function App() {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ConstactForm />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      ) : (
        <SecondTitle>"Contact list is empty"</SecondTitle>
      )}
    </Container>
  );
}
