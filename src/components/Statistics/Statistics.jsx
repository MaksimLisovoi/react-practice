import { List, Item, Text } from './Statistics.styled';

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
