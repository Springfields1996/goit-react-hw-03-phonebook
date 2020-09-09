import React from 'react';

export const Contacts = ({ contacts, onDeleteContact }) =>
  contacts.map(contact => (
    <li
      key={contact.id}
      style={{
        fontSize: 20,
        width: 350,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px dotted grey',
      }}
    >
      {contact.name}: {contact.number}
      <button id={contact.id} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  ));
