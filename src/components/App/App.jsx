import React, { Component } from 'react';
import { Box } from '../Box';
// import { Heading } from './App.styled';s

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  // handleNameChange = e => {
  //   this.setState({
  //     name: e.currentTarget.value,
  //   });
  // };

  // handleNumberChange = e => {
  //   console.log(e.currentTarget.value);

  //   this.setState({
  //     number: e.currentTarget.value,
  //   });
  // };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    return (
      <Box mx="auto" maxWidth={450} p={'5'}>
        {/* <Heading>Name</Heading> */}
        <form>
          Name
          <label htmlFor="">
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </Box>
    );
  }
}
