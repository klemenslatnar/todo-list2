import React, { useContext, useState } from "react";
import TaskContext from "../context/task-context";
import classes from "./Task.module.css";

function Task({ name, id }) {
  const { removeTask, taskList } = useContext(TaskContext);
  const [done, setDone] = useState(false);

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
        <button
          onClick={() => {
            console.log(taskList);
            removeTask(id);
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Task;
