import React, { useState } from "react";
import classes from "./Task.module.css";

function Task({ name, id }) {
  const [done, setDone] = useState(false);

  const removeHandler = async (id) => {
    const result = await fetch("/remove-task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
  };

  const doneHandler = () => {
    setDone((prevValue) => {
      return !prevValue;
    });
  };

  let doneClass = done ? classes.done : "";

  return (
    <div className={classes.task}>
      <div>
        <p className={doneClass}>{name}</p>
      </div>
      <div className={classes.buttons}>
        <button onClick={doneHandler}>✅</button>
        <button onClick={() => removeHandler(id)}>❌</button>
      </div>
    </div>
  );
}

export default Task;
