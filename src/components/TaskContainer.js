import React, { useContext } from "react";
import classes from "./TaskContainer.module.css";
import Task from "./Task";
import TaskContext from "../context/task-context";

function TaskContainer() {
  const { taskList } = useContext(TaskContext);

  return (
    <div className={classes["task-container"]}>
      {taskList.map((task) => {
        return <Task key={task.id} id={task.id} name={task.taskName} />;
      })}
    </div>
  );
}

export default TaskContainer;
