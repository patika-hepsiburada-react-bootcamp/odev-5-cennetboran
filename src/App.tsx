import React,{useState} from 'react';
import CreateTodo from './components/CreateTodo';
import { TodoModel } from './models/TodoModel';
import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todoStatuses:Status[] = [
    {
      id: 1,
      name: 'To Do'
    },
    {
      id: 2,
      name: 'In Progress'
    },
    {
      id: 3,
      name: 'Completed'
    },
    {
      id: 4,
      name: 'Delegated'
    },
    {
      id: 5,
      name: 'Couldn\'t do'
    }
  ];

  const [todos, setTodos] = useState<Todo[]>(TodoModel.getTodo());
  return (
    <div className="container">
      <CreateTodo setTodos={setTodos} todoStatuses={todoStatuses}/>
      <div className="task-container">
        {
          todoStatuses.map((status) => <TodoList todoStatuses={todoStatuses} key={status.id} todos={todos} setTodos={setTodos} todoTypeId={status.id} title={status.name}></TodoList>)
        }
        {}
      </div>
    </div>
  );
}

export default App;
