import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendItem.styled';

export const FriendItem = ({ avatar, isOnline, name }) => {
  return (
    <Friend>
      <Status></Status>
      <Avatar src={avatar}></Avatar>
      <Name>{name}</Name>
    </Friend>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
