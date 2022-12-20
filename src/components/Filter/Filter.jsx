export const Filter = ({ filteredValue, onChangeFilter }) => (
  <label>
    Фильтр по имени:
    <input type="text" value={filteredValue} onChange={onChangeFilter} />
  </label>
);
