import React from "react";
import TodoItem from "./TodoItem";

/**
 * PUBLIC_INTERFACE
 * List of todos.
 */
export default function TodoList({ todos, emptyText, onToggle, onDelete }) {
  return (
    <section className="todo-section" aria-label="Todo list section">
      <h2 className="section-title">Todo List</h2>
      {!todos.length ? (
        <p className="empty">{emptyText}</p>
      ) : (
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
      )}
    </section>
  );
}
