import './TodoList.css';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item ">
        <p className="TodoList__text">{text}</p>
        <button>Удалить</button>
      </li>
    ))}
  </ul>
);
