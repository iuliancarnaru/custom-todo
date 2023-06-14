import { useState } from "react";
import Button from "./Button";
import { TodoType } from "../types";

interface CreatePanelProps {
  onCreateTodo: (todo: TodoType) => void;
}

function CreatePanel({ onCreateTodo }: CreatePanelProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title) return;

    onCreateTodo({
      id: crypto.randomUUID(),
      title,
      status: "new",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    setTitle("");
  }

  return (
    <div style={{ marginBottom: "40px" }}>
      <form onSubmit={handleSubmit}>
        <h1>Create todo</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <label htmlFor="title">Todo title: </label>
            <input
              style={{ height: "40px", padding: "5px" }}
              type="text"
              name="title"
              value={title}
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <Button model="normal" type="submit">
            Create todo
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreatePanel;
