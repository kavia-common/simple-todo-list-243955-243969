import React from "react";

/**
 * PUBLIC_INTERFACE
 * Toggle between light and dark theme.
 */
export default function ThemeToggle({ theme, onToggle }) {
  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${next} mode`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
