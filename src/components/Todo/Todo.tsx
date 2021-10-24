import React, { useState } from "react";
import "./Todo.scss";

const Todo: React.FC<TodoProps> = ({
  todo,
  deleteTodoWithId,
  updateTodoWithId,
}) => {
  const [updating, setUpdating] = useState(false);
  const drag = (ev: React.DragEvent<HTMLDivElement>, todo: Todo) => {
    ev.dataTransfer.setData("todoId", todo.id.toString());
  };

  const onClick: () => void = () => {
    deleteTodoWithId(todo.id);
  };

  const updateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    updateTodoWithId(todo.id, newName);
  };

  return (
    <div className="task" draggable="true" onDragStart={(ev) => drag(ev, todo)}>
      {updating ? (
        <>
          <input
            name="todoName"
            type="text"
            placeholder="Todo name"
            value={todo.name}
            className="edit-input"
            onChange={(e) => updateTodo(e)}
            onKeyDown={(event) =>
              event.code === "Enter" ? setUpdating((prev) => !prev) : ""
            }
          />
          <br />
          <button
            className="edit-button"
            onClick={() => setUpdating((prev) => !prev)}
          >
            Ok
          </button>
        </>
      ) : (
        <>
          <div
            className="task-name"
            onDoubleClick={() => setUpdating((prev) => !prev)}
          >
            {todo.name}
          </div>
          <button
            className="edit-button"
            onClick={() => setUpdating((prev) => !prev)}
          >
            Edit
          </button>
        </>
      )}

      <div className="task-date-and-type-container">
        <div className="task-date">{new Date(todo.id).toDateString()}</div>
        <div className="task-type">{todo.todoType?.name}</div>
      </div>
      <div className="delete" onClick={onClick}>
        <span>X</span>
      </div>
    </div>
  );
};

export default Todo;
