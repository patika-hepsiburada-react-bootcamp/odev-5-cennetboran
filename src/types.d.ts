interface Status {
    id: number,
    name: string
}

interface Todo {
    name: string,
    id: number,
    todoType : Status | undefined,
    todoTypeId : number
}

interface TodoProps {
    todo : Todo;
    deleteTodoWithId : (todoId: number) => void;
    updateTodoWithId : (todoId: number,newName: string) => void;
}

interface TodoListProps {
    todoStatuses: Status[]
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todoTypeId: number;
    title: string;
}

interface CreateTodoProps {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todoStatuses: Status[]
}