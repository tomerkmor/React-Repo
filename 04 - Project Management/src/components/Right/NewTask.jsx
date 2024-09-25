import { React, useState } from "react";
import Input from "./Input";

const NewTask = ({ addTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if(enteredTask.trim() === ""){
        return
    }
    addTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <Input type="text" onChange={handleChange} value={enteredTask} />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
