import { ContactItem, Btn, Text } from './Contacts.styled';

import PropTypes, { object } from 'prop-types';

export const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <ContactItem key={id}>
        <Text>
          {name}: {number}
        </Text>
        <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
      </ContactItem>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(object),
  onDeleteContact: PropTypes.func.isRequired,
};
