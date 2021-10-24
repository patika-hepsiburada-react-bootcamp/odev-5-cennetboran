import React, { useState } from "react";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import { TodoModel } from "./models/TodoModel";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  const todoStatuses: Status[] = [
    {
      id: 1,
      name: "To Do",
    },
    {
      id: 2,
      name: "In Progress",
    },
    {
      id: 3,
      name: "Test",
    },
    {
      id: 4,
      name: "Completed",
    },
    // {
    //   id: 5,
    //   name: 'Couldn\'t do'
    // }
  ];

  const [todos, setTodos] = useState<Todo[]>(TodoModel.getTodo());
  return (
    <div className="container">
      <CreateTodo setTodos={setTodos} todoStatuses={todoStatuses} />
      <div className="task-container">
        {todoStatuses.map((status) => (
          <TodoList
            todoStatuses={todoStatuses}
            key={status.id}
            todos={todos}
            setTodos={setTodos}
            todoTypeId={status.id}
            title={status.name}
          ></TodoList>
        ))}
        {}
      </div>
    </div>
  );
};

export default App;
