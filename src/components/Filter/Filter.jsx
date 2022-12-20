import { Input } from 'components/Form/Form.styled';

export const Filter = ({ filteredValue, onChangeFilter }) => (
  <label>
    Фильтр по имени:
    <Input type="text" value={filteredValue} onChange={onChangeFilter} />
  </label>
);
