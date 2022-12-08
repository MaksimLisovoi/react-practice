import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatList,
  StatItem,
  Label,
  Quantity,
} from './Profile.styled';
import { Box } from '../Box';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box border-top={'normal'} borderRadius={'normal'} bg={'muted'}>
      <Description>
        <Avatar src={avatar}></Avatar>
        <Name>{username}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatList>
        {Object.entries(stats).map(([title, value]) => (
          <StatItem key={title}>
            <Label>{title}</Label>
            <Quantity>{value}</Quantity>
          </StatItem>
        ))}
      </StatList>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
