import React, { Component } from 'react';
import { FormBox } from './Form.styled';
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

  handleLisenceChange = e => {
    console.log(e.currentTarget.checked);

    this.setState({
      licence: e.currentTarget.checked,
    });
  };

  render() {
    return (
      <FormBox onSubmit={this.handleSubmit}>
        Name
        <label htmlFor={this.nameInputId}>
          <input
            id={this.nameInputId}
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            id={this.numberInputId}
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
        {/* CHECK BOX */}
        {/* <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLisenceChange}
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
