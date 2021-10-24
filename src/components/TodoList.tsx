import React from "react";
import { TodoModel } from "../models/TodoModel";
import Todo from "./Todo";


const TodoList: React.FC<TodoListProps> = ({ todoStatuses,todos, setTodos, todoTypeId, title }) => {
  
    const allowDrop = (ev:React.DragEvent<HTMLDivElement>) => {
      ev.preventDefault();
    }
  
    const drop = (ev:React.DragEvent<HTMLDivElement>) => {
      ev.preventDefault();
      var todoId = ev.dataTransfer.getData("todoId");
      const matchingTodo = todos.find((todo) => todo.id === +todoId);
      if (!matchingTodo) {
        return;
      }
  
      matchingTodo.todoTypeId = todoTypeId;
      matchingTodo.todoType = todoStatuses.find((item) => item.id === todoTypeId);
  
      setTodos([...todos]);
      TodoModel.setTodo([...todos]);
    }
  
    const deleteTodoWithId = (todoId:number) => {
      if (!todoId) {
        return;
      }
      const filteredTodos = todos.filter((item) => {
        return item.id !== todoId;
      });
      setTodos([...filteredTodos]);
      TodoModel.setTodo([...filteredTodos]);
    }

    const updateTodoWithId = (todoId:number,newName:string) => {
        if (!todoId) {
            return;
        }
        todos.filter(x => x.id === todoId)[0].name = newName
        setTodos([...todos]);
        TodoModel.setTodo([...todos]);
    }
  
    return (
        <div className="task-list" onDrop={(ev) => drop(ev)} onDragOver={(ev) => allowDrop(ev)}>
        <h2>{title}</h2>
        {
            todos
            .filter((todo) => todo.todoTypeId === todoTypeId)
            .map((todo) => <Todo key={todo.id} todo={todo} deleteTodoWithId={deleteTodoWithId} updateTodoWithId={updateTodoWithId}></Todo>)
        }
        </div>
    );
  
  }

  export default TodoList;