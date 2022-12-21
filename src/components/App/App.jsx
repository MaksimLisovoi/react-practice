import React, { Component } from 'react';
import { Box } from '../Box';
import { Form } from 'components/Form';
import { Heading } from './App.styled';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }

    // this.setState({ contacts: localStorageContacts });
    console.log(localStorageContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('Контакты обновились');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('Render');
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Box mx="auto" maxWidth={450} p={'5'}>
        <Box border="normal" borderRadius={'normal'} p={5} mb={4}>
          <Heading>Phonebook</Heading>
          <Form onSubmit={this.formSubmitHandler} />
        </Box>
        <Box border="normal" borderRadius={'normal'} p={5}>
          <Heading>Contacts</Heading>
          <Filter filteredValue={filter} onChangeFilter={this.changeFilter} />
          <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        </Box>
      </Box>
    );
  }
}
