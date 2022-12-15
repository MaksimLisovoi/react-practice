import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Heading } from './Section.styled';

export const Section = ({ title, children }) => (
  <Box as="section" mb={'5'}>
    <Heading>{title}</Heading>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
