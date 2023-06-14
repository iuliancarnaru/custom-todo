import Todo from "./Todo";
import { TodoType } from "../types";

interface TodoListProps {
  todos: TodoType[];
  onDeleteTodo: (id: string) => void;
  onSetCurrent: (todo: TodoType) => void;
}

function TodoList({ todos, onDeleteTodo, onSetCurrent }: TodoListProps) {
  return (
    <div style={{ flex: "0 0 40%" }}>
      {todos.length > 0
        ? todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onSetCurrent={onSetCurrent}
            />
          ))
        : `You don't have any todos...`}
    </div>
  );
}

export default TodoList;
