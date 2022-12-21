import { Content, Backdrop } from './Modal.styled';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return createPortal(
      <Backdrop>
        <Content>{children}</Content>
      </Backdrop>,
      modalRoot,
    );
  }
}
