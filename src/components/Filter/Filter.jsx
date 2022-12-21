import { Input } from 'components/Form/Form.styled';
import { Box } from 'components/Box';
import { Label, LabelText } from './Filter.styled';

export const Filter = ({ filteredValue, onChangeFilter }) => (
  <Box mb="4">
    <Label>
      <LabelText>Filter by name:</LabelText>
      <Input type="text" value={filteredValue} onChange={onChangeFilter} />
    </Label>
  </Box>
);
