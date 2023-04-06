import React from 'react';

function ContactList({ onFilterContacts, onChange }) {
  return (
    <ul>
      {onFilterContacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onChange(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
