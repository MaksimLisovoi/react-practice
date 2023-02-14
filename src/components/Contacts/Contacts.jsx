import { ContactItem, Btn, Text } from './Contacts.styled';

import PropTypes, { object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getContacts, getFilter } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const storeContacts = useSelector(getContacts);
  const storeFilter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = storeFilter.toLowerCase();

    return storeContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  const contacts = getVisibleContacts();

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
        </ContactItem>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(object),
};
