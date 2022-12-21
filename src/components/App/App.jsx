import React, { Component } from 'react';
import { Box } from '../Box';
import { Form } from 'components/Form';
import { Heading } from './App.styled';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Modal } from 'components/Modal';
import { Btn } from 'components/Form/Form.styled';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }

    console.log(localStorageContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('Контакты обновились');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    console.log('Render');
    const { filter, showModal, contacts } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Box mx="auto" maxWidth={450} p={'5'}>
        {showModal && (
          <Modal>
            <h1>Hello, world!!!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus eligendi vitae
              quisquam. Mollitia, quam dolor explicabo maxime veniam animi rem libero quo
              voluptatibus, voluptas, inventore illo minima est eaque. Dicta non corporis dolore
              nisi nobis labore fuga vero, harum itaque officia repellat ratione maiores voluptates
              id quo qui nihil ipsa facere fugiat! Cum provident voluptate, obcaecati corrupti
              tempora qui!
            </p>
            <Btn onClick={this.toggleModal}>Закрыть</Btn>
          </Modal>
        )}
        <Box border="normal" borderRadius={'normal'} p={5} mb={4}>
          <Heading>Phonebook</Heading>
          <Form onSubmit={this.formSubmitHandler} />
        </Box>
        {contacts.length > 0 && (
          <Box border="normal" borderRadius={'normal'} p={5}>
            <Heading>Contacts</Heading>
            {contacts.length > 1 && (
              <Filter filteredValue={filter} onChangeFilter={this.changeFilter} />
            )}

            <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact} />
          </Box>
        )}
        <Btn type="button" onClick={this.toggleModal}>
          Открыть модалку
        </Btn>
      </Box>
    );
  }
}
