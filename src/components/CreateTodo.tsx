import React from "react"
import { TodoModel } from "../models/TodoModel";



const CreateTodo: React.FC<CreateTodoProps> = ({setTodos,todoStatuses}) => {

    const addTask = (event:React.FormEvent<HTMLFormElement>) => {
      const name = event.currentTarget.todoName.value
      if (!name) {
        return;
      }
      const todoTypeId = +(event.currentTarget.todoType.value);
      const todoType = todoStatuses.find((item:Status) => item.id === todoTypeId);
      const todo = {
        id: Date.now(),
        name: name,
        todoTypeId: todoTypeId,
        todoType: todoType
      };
      const updatedTodo= [...TodoModel.getTodo(), todo];
      TodoModel.setTodo(updatedTodo);
      setTodos(updatedTodo);
  
      event.currentTarget.todoName.value = '';
      event.currentTarget.todoType.value = '1';
    }
  
    return (<div className="create-task">
        <form onSubmit={(e) => addTask(e)}>
        <input name="todoName" type="text" placeholder="Task name" />
        <select name="todoType" className="select-css">
            {todoStatuses.map((todo:Status) => {
            return (<React.Fragment key={todo.id}><option value={todo.id}>{todo.name}</option></React.Fragment>);
            })}
        </select>
        <button className="add-task-button" type="submit" >+ Add Task</button>
      </form>
    </div>);
  }

  export default CreateTodo;