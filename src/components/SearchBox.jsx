export function SearchBox({ onChange, value }) {
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
