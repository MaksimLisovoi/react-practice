import { useState } from 'react';
import { Box } from '../Box';
import { Form } from 'components/Form';
import { Heading } from './App.styled';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    if (contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, data]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <Box mx="auto" maxWidth={450} p={'5'}>
      <Box border="normal" borderRadius={'normal'} p={5} mb={4}>
        <Heading>Phonebook</Heading>
        <Form onSubmit={formSubmitHandler} />
      </Box>
      <Box border="normal" borderRadius={'normal'} p={5}>
        <Heading>Contacts</Heading>
        <Filter filteredValue={filter} onChangeFilter={changeFilter} />
        <Contacts contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
      </Box>
    </Box>
  );
}
