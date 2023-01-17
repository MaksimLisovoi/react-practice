import { useState, useEffect } from 'react';
import { Box } from '../Box';
import { Form } from 'components/Form';
import { Heading } from './App.styled';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

const localContacts = JSON.parse(window.localStorage.getItem('contacts'));

export function App() {
  const [contacts, setContacts] = useState(() => {
    return localContacts ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
