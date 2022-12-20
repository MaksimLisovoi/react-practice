import React, { Component } from 'react';
import { Box } from '../Box';
import { Form } from 'components/Form';
// import { Heading } from './App.styled';s

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState({});
  };

  render() {
    return (
      <Box mx="auto" maxWidth={450} p={'5'}>
        {/* <Heading>Name</Heading> */}
        <Form onSubmit={this.formSubmitHandler} />
      </Box>
    );
  }
}
