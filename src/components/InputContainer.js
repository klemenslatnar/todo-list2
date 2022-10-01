import React, {  useState } from "react";
import classes from "./InputContainer.module.css";

function InputContainer() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState({});
  const [error, setError] = useState(false);

  // const getAPI = async () => {
  //   const response = await fetch("/express-backend");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  const postTask = async () => {
    const response = await fetch("/new-task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
  };

  let errorMsg = "Please enter a task!";

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    setTask({ taskName: e.target.value });
  };

  const submitHandler = async (e) => {
    if (inputValue.trim().length === 0) {
      e.preventDefault();
      setError(true);
      return;
    } else {
      e.preventDefault();

      setError(false);

      postTask();

      setTask({});
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes["input-container"]}>
        <input onChange={changeHandler} type="text" value={inputValue} />
        <button type="submit">Add Task</button>
      </form>
      {error ? <div className={classes.error}>{errorMsg}</div> : ""}
    </>
  );
}

export default InputContainer;
