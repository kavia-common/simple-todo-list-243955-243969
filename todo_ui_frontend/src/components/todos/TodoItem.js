import React from "react";

/**
 * PUBLIC_INTERFACE
 * Single todo row.
 */
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`item ${todo.completed ? "item-done" : ""}`}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          aria-label={`Mark "${todo.text}" as ${todo.completed ? "incomplete" : "complete"}`}
        />
        <span className="item-text">{todo.text}</span>
      </label>

      <button type="button" className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}
