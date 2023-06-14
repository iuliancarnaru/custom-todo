import { useState, useEffect } from "react";
import { TodoType } from "../types";
import Button from "./Button";

interface UpdatePanelProps {
  todo: TodoType;
  onUpdateTodo: (todo: TodoType) => void;
}

function UpdatePanel({ todo, onUpdateTodo }: UpdatePanelProps) {
  const { id, title, status } = todo;
  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setNewStatus] = useState(status);

  useEffect(() => {
    setNewTitle(title);
  }, [title]);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onUpdateTodo({ ...todo, title: newTitle, status: newStatus });
    setNewTitle("");
    setNewStatus(status);
  }

  return (
    <div
      style={{
        backgroundColor: "#1d1a1a",
        padding: "20px",
        borderRadius: "5px",
        flex: "0 0 60%",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Update todo with id: {id}</h3>
      <form onSubmit={handleFormSubmit}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <label htmlFor="title">Update title: </label>
          <input
            style={{ height: "40px", padding: "5px" }}
            type="text"
            name="title"
            value={newTitle}
            id="title"
            placeholder="Update todo..."
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <label htmlFor="title">Update status: </label>
          <select
            style={{ height: "40px", padding: "5px" }}
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="new">new</option>
            <option value="in-progress">in progress</option>
            <option value="done">done</option>
          </select>
          <Button
            model="update"
            type="submit"
            style={{ backgroundColor: "violet" }}
          >
            Update todo
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePanel;
