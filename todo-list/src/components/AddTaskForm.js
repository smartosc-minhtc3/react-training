import React from "react";

const AddTaskForm = ({ handleSubmit, handleInputChange, newTask }) => {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <label htmlFor="newItem">Add item here</label>
      <input
        onChange={handleInputChange}
        type="text"
        id="newItem"
        value={newTask}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTaskForm;
