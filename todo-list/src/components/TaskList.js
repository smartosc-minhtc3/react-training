import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  showUnComplete,
  setTaskStatus,
  removeTask,
  setShowIncomplete,
}) => {
  return (
    <div>
      <ul className="task-list">
        {tasks
          .filter((task) => (showUnComplete ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show uncompleted tasks only
        </label>
        <input
          onChange={(e) => setShowIncomplete(e.target.checked)}
          type="checkbox"
          id="filter"
          checked={showUnComplete}
        />
      </div>
    </div>
  );
};

export default TaskList;
