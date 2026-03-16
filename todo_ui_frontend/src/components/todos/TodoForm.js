import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Todo input form.
 */
export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={submit} aria-label="Add a todo">
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a task and press Enter…"
        aria-label="Todo text"
        maxLength={140}
      />
      <button className="btn" type="submit" disabled={!text.trim()}>
        Add
      </button>
    </form>
  );
}
