import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "MinhTC", status: 0 },
    { id: "2", title: "Website: MinhTC.Tech", status: 0 },
  ]);
  const [showUnComplete, setShowUnComplete] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };

  const handleSetTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header title="Enhance Todo List" subTitle="Get things done ^^" />
      <TaskList
        tasks={tasks}
        showUnComplete={showUnComplete}
        setTaskStatus={handleSetTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowUnComplete}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        newTask={newTask}
      />
    </div>
  );
}

export default App;
