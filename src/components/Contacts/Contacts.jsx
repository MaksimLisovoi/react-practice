import { ContactItem } from './Contacts.styled';

export const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <ContactItem key={id}>
        {name}: {number}
      </ContactItem>
    ))}
  </ul>
);
