import { List, Item, Text } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        <Text>Good: {good}</Text>
      </Item>
      <Item>
        <Text>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <Text>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text>Total: {total}</Text>
      </Item>
      <Item>
        <Text>Posiitive: {positivePercentage}%</Text>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired,
};
