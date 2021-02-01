import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";

const initialState: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialState);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    console.log("Selected todo:" + selectedTodo);

    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      } else return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([
        ...todos,
        {
          text: newTodo,
          complete: false,
        },
      ]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
