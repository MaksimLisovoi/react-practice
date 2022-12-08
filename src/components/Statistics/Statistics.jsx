import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Heading, StatList, StatItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={'5'}
      bg={'muted'}
      border={'normal'}
      borderColor={'text'}
      borderRadius={'normal'}
      boxShadow={'primary'}
      as="section"
    >
      {title && <Heading>{title}</Heading>}
      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
