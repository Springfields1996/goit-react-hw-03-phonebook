import React from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    localContacts
      ? this.setState({ contacts: JSON.parse(localContacts) })
      : localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  componentDidUpdate(x, prevState) {
    prevState.contacts !== this.state.contacts &&
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  getContact = contact =>
    this.setState({ contacts: [...this.state.contacts, contact] });

  deleteContact = ({ target: { id } }) => {
    this.setState({
      contacts: [...this.state.contacts.filter(elem => elem.id !== id)],
    });
  };

  setFilter = ({ target }) => this.setState({ filter: target.value });

  render = () => {
    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );

    setTimeout(() => {
      !filterContacts.length && this.setState({ filter: '' });
    }, 2000);

    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.getContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.setFilter} />
        <ul style={{ marginTop: 40 }}>
          <Contacts
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        </ul>
      </div>
    );
  };
}
