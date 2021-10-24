export const TodoModel = {
    getTodo,
    setTodo
}

function getTodo() {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
}
  
function setTodo(todos:Todo[]) {
    localStorage.setItem('tasks', JSON.stringify(todos));
}