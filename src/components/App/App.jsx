import React, { Component } from 'react';
import { Box } from '../Box';
import { Heading } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Box mx="auto" maxWidth={450} p={'5'}>
        <Heading>Name</Heading>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Box>
    );
  }
}
