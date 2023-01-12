import { Input } from 'components/Form/Form.styled';
import { Box } from 'components/Box';
import { Label, LabelText } from './Filter.styled';

import PropTypes from 'prop-types';

export const Filter = ({ filteredValue, onChangeFilter }) => (
  <Box mb="4">
    <Label>
      <LabelText>Filter by name:</LabelText>
      <Input type="text" value={filteredValue} onChange={onChangeFilter} />
    </Label>
  </Box>
);

Filter.propTypes = {
  filteredValue: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
