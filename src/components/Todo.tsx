import { generateDate } from "../helpers";
import { TodoType } from "../types";
import Button from "./Button";

interface TodoProps {
  todo: TodoType;
  onDeleteTodo: (id: string) => void;
  onSetCurrent: (todo: TodoType) => void;
}

function Todo({ todo, onDeleteTodo, onSetCurrent }: TodoProps) {
  const { id, title, status, createdAt } = todo;

  return (
    <div
      style={{
        border: "1px solid grey",
        marginBottom: "10px",
        padding: "5px 10px",
        maxWidth: "600px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3>{title}</h3>
        <p>
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: `${
                status === "in-progress"
                  ? "orangered"
                  : status === "done"
                  ? "green"
                  : "gray"
              }`,
              display: "inline-block",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          ></span>
          {status.toUpperCase()}
        </p>
        <p style={{ fontSize: "12px", color: "gray" }}>
          Created at: {generateDate(createdAt)}
        </p>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {status !== "done" && (
          <Button model="update" onClick={() => onSetCurrent(todo)}>
            Update
          </Button>
        )}
        <Button model="delete" onClick={() => onDeleteTodo(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Todo;
