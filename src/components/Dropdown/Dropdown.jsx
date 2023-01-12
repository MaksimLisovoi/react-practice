import { useState } from 'react';
import './Dropdown.css';

export function Dropdown() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <div className="Dropdown">
      <button type="button" className="Dropdown__toggle" onClick={toggle}>
        {visible ? 'Скрыть' : 'Показать'}
      </button>

      {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
    </div>
  );
}
