import React from "react";
import TodoItem from "./TodoItem";

/**
 * PUBLIC_INTERFACE
 * List of todos.
 */
export default function TodoList({ todos, emptyText, onToggle, onDelete }) {
  if (!todos.length) {
    return <p className="empty">{emptyText}</p>;
  }

  return (
    <ul className="list" aria-label="Todo list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}
