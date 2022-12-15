import React, { Component } from 'react';
import { Box } from './Box';

export class App extends Component {
  state = {};

  render() {
    return <Box mx="auto" maxWidth={450} p={'5'}></Box>;
  }
}
