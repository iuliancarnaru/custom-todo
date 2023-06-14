import { Todo } from "./types";
import CreatePanel from "./components/CreatePanel";
import UpdatePanel from "./components/UpdatePanel";
import TodoList from "./components/TodoList";
import { useState } from "react";

const initialTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: "Wash car",
    status: "new", // new, in progress, done
    createdAt: new Date().setDate(new Date().getDate() - 4),
    updatedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "Cut grass",
    status: "done", // new, in progress, done
    createdAt: new Date().setDate(new Date().getDate() - 1),
    updatedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "Clean house",
    status: "new", // new, in progress, done
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  function handleCreateTodo(todo: Todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function handleDeleteTodo(id: string) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleUpdateTodo(todo: Todo) {
    setTodos((currTodos) =>
      currTodos.map((currTodo) =>
        currTodo.id === todo.id ? { ...todo } : currTodo
      )
    );
    setCurrentTodo(null);
  }

  function handleSetCurrent(todo: Todo) {
    setCurrentTodo(todo);
  }

  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
      <CreatePanel onCreateTodo={handleCreateTodo} />
      <div style={{ display: "flex", gap: "30px" }}>
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onSetCurrent={handleSetCurrent}
        />
        {currentTodo && todos.includes(currentTodo) && (
          <UpdatePanel todo={currentTodo} onUpdateTodo={handleUpdateTodo} />
        )}
      </div>
    </div>
  );
}

export default App;
