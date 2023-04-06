import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/boxSlice';
import { deleteContacts } from 'redux/boxSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalName)
    );
  };
  const filteredContacts = filterContacts();

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
