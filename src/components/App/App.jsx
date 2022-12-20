import React, { Component } from 'react';
import { Box } from '../Box';
import { Form } from 'components/Form';
import { Heading } from './App.styled';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Box mx="auto" maxWidth={450} p={'5'}>
        <Heading>Phonebook</Heading>
        <Form onSubmit={this.formSubmitHandler} />
        <Heading>Contacts</Heading>
        <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        <Filter filteredValue={filter} onChangeFilter={this.changeFilter} />
      </Box>
    );
  }
}
