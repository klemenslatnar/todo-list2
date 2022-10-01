import React, { useContext, useState } from "react";
import TaskContext from "../context/task-context";
import classes from "./InputContainer.module.css";

function InputContainer() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState({});
  const [error, setError] = useState(false);
  const { taskList, updateTaskList } = useContext(TaskContext);

  let errorMsg = "Please enter a task!";

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    setTask({ taskName: e.target.value, id: Math.random() });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim().length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
      updateTaskList(task);

      setTask({});
      setInputValue("");
      console.log(taskList);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes["input-container"]}>
        <input onChange={changeHandler} type="text" value={inputValue} />
        <button>Add Task</button>
      </form>
      {error ? <div className={classes.error}>{errorMsg}</div> : ""}
    </>
  );
}

export default InputContainer;
