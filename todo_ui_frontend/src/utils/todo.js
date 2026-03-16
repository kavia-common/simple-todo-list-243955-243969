/**
 * PUBLIC_INTERFACE
 * Filter todos by a filter key: all | active | completed
 */
export function filterTodos(todos, filter) {
  if (filter === "active") return todos.filter((t) => !t.completed);
  if (filter === "completed") return todos.filter((t) => t.completed);
  return todos;
}

/**
 * PUBLIC_INTERFACE
 * Compute basic stats for header display.
 */
export function getStats(todos) {
  const total = todos.length;
  const completed = todos.reduce((acc, t) => acc + (t.completed ? 1 : 0), 0);
  return { total, completed, active: total - completed };
}
