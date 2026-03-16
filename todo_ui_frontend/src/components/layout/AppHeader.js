import React from "react";

/**
 * PUBLIC_INTERFACE
 * App header with title, subtitle, stats, and filter controls.
 */
export default function AppHeader({
  title,
  subtitle,
  stats,
  filter,
  onChangeFilter,
  onClearCompleted,
}) {
  return (
    <header className="header">
      <div className="header-top">
        <div>
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>

        <div className="stats" aria-label="Todo statistics">
          <div className="stat">
            <span className="stat-label">Total</span>
            <span className="stat-value">{stats.total}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Active</span>
            <span className="stat-value">{stats.active}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Done</span>
            <span className="stat-value">{stats.completed}</span>
          </div>
        </div>
      </div>

      <div className="header-controls">
        <div className="filters" role="tablist" aria-label="Todo filters">
          <FilterButton
            active={filter === "all"}
            onClick={() => onChangeFilter("all")}
            label="All"
          />
          <FilterButton
            active={filter === "active"}
            onClick={() => onChangeFilter("active")}
            label="Active"
          />
          <FilterButton
            active={filter === "completed"}
            onClick={() => onChangeFilter("completed")}
            label="Completed"
          />
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onClearCompleted}
          disabled={stats.completed === 0}
        >
          Clear done
        </button>
      </div>
    </header>
  );
}

function FilterButton({ active, onClick, label }) {
  return (
    <button
      type="button"
      className={`chip ${active ? "chip-active" : ""}`}
      onClick={onClick}
      aria-pressed={active}
      role="tab"
    >
      {label}
    </button>
  );
}
