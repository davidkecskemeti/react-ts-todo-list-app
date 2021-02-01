import React from "react";
import "./TodoListItem.scss";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <input
        name="t"
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo)}
      />
      <label htmlFor="t" className={todo.complete ? "complete" : undefined}>
        {todo.text}
      </label>
    </li>
  );
};
