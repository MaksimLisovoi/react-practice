import React, { Component } from 'react';
import { FormBox, Label, Input, Btn } from './Form.styled';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',

    // experience: 'junior',
    // licence: false,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    const data = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.props.onSubmit(data);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);

    this.setState({
      licence: e.currentTarget.checked,
    });
  };

  render() {
    return (
      <FormBox onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            id={this.nameInputId}
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.numberInputId}>
          Number
          <Input
            id={this.numberInputId}
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add contact</Btn>
        {/* CHECK BOX */}
        {/* <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Согласен с условием
        </label> */}
        {/* RADIO BUTTONS */}
        {/* <p> Ваш уровень: </p>
        <label>
          junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
        </label>
        <label>
          middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
        </label>
        <label>
          senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
        </label> */}
      </FormBox>
    );
  }
}
