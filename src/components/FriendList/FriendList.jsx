import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="muted"
      mt={'5'}
      border={'normal'}
      borderColor={'text'}
      boxShadow={'primary'}
      p={'5'}
      as={'ul'}
    >
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline}></FriendItem>;
      })}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
