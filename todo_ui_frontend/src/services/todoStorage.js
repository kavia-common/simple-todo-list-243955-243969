const STORAGE_KEY = "todos:v1";

/**
 * PUBLIC_INTERFACE
 * Load todos from localStorage.
 * Returns an array of { id: string, text: string, completed: boolean, createdAt: number }.
 */
export function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function makeId() {
  // Stable enough for local usage, avoids extra dependencies.
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * PUBLIC_INTERFACE
 * Add a todo and persist.
 */
export function addTodo(prevTodos, text) {
  const next = [
    { id: makeId(), text, completed: false, createdAt: Date.now() },
    ...prevTodos,
  ];
  saveTodos(next);
  return next;
}

/**
 * PUBLIC_INTERFACE
 * Toggle a todo completed state and persist.
 */
export function toggleTodo(prevTodos, id) {
  const next = prevTodos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTodos(next);
  return next;
}

/**
 * PUBLIC_INTERFACE
 * Delete a todo and persist.
 */
export function deleteTodo(prevTodos, id) {
  const next = prevTodos.filter((t) => t.id !== id);
  saveTodos(next);
  return next;
}

/**
 * PUBLIC_INTERFACE
 * Clear completed todos and persist.
 */
export function clearCompleted(prevTodos) {
  const next = prevTodos.filter((t) => !t.completed);
  saveTodos(next);
  return next;
}
