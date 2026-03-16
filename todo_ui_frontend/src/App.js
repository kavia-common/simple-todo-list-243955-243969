import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import AppHeader from "./components/layout/AppHeader";
import ThemeToggle from "./components/layout/ThemeToggle";
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";
import {
  addTodo,
  clearCompleted,
  deleteTodo,
  loadTodos,
  toggleTodo,
} from "./services/todoStorage";
import { filterTodos, getStats } from "./utils/todo";

/**
 * PUBLIC_INTERFACE
 * App entry point for the Todo UI.
 *
 * Responsibilities:
 * - Manage app-level state (theme, todos, filter)
 * - Persist theme to the document + persist todos to localStorage through service helpers
 * - Compose reusable UI components
 */
function App() {
  const [theme, setTheme] = useState("light");
  const [todos, setTodos] = useState(() => loadTodos());
  const [filter, setFilter] = useState("all"); // all | active | completed

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const visibleTodos = useMemo(() => filterTodos(todos, filter), [todos, filter]);
  const stats = useMemo(() => getStats(todos), [todos]);

  // PUBLIC_INTERFACE
  const handleAddTodo = (text) => setTodos((prev) => addTodo(prev, text));

  // PUBLIC_INTERFACE
  const handleToggleTodo = (id) => setTodos((prev) => toggleTodo(prev, id));

  // PUBLIC_INTERFACE
  const handleDeleteTodo = (id) => setTodos((prev) => deleteTodo(prev, id));

  // PUBLIC_INTERFACE
  const handleClearCompleted = () => setTodos((prev) => clearCompleted(prev));

  return (
    <div className="App">
      <div className="app-shell">
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        />

        <main className="panel" aria-label="Todo application">
          <AppHeader
            title="Retro Todo"
            subtitle="Local, fast, and simple."
            stats={stats}
            filter={filter}
            onChangeFilter={setFilter}
            onClearCompleted={handleClearCompleted}
          />

          <TodoForm onAdd={handleAddTodo} />

          <TodoList
            todos={visibleTodos}
            emptyText={
              filter === "completed"
                ? "No completed todos yet."
                : filter === "active"
                  ? "No active todos. Nice."
                  : "No todos yet. Add one above."
            }
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
