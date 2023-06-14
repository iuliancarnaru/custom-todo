import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

function Button({
  children,
  style,
  type,
  model,
  onClick,
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  model: "normal" | "update" | "delete";
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        width: "100px",
        height: "40px",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
        backgroundColor: `${
          model === "update"
            ? "dodgerblue"
            : model === "delete"
            ? "tomato"
            : "lightgray"
        }`,
        color: "#222",
        fontWeight: "bold",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
