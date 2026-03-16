import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Todo input form.
 */
export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      setError("Please enter a todo.");
      return;
    }
    onAdd(trimmed);
    setText("");
    setError("");
  };

  return (
    <form className="todo-form" onSubmit={submit} aria-label="Add a todo">
      <div>
        <input
          className="input"
          name="todoText"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
          placeholder="Enter a todo…"
          aria-label="Todo text"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "todo-input-error" : undefined}
          maxLength={140}
          autoFocus
        />
        {error ? (
          <div
            id="todo-input-error"
            role="alert"
            style={{
              marginTop: 6,
              fontSize: 12,
              fontWeight: 600,
              color: "var(--danger)",
            }}
          >
            {error}
          </div>
        ) : null}
      </div>
      <button className="btn" type="submit" disabled={!text.trim()}>
        Add Todo
      </button>
    </form>
  );
}
