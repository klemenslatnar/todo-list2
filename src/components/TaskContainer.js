import React, { useEffect, useMemo, useState } from "react";
import classes from "./TaskContainer.module.css";
import Task from "./Task";

function TaskContainer() {
  const [taskList, setTaskList] = useState([]);

  const getAllTasks = async () => {
    const response = await fetch("/all-tasks");
    const data = await response.json();

    if (response.status !== 200) {
      throw Error(data.message);
    }

    setTaskList(data);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className={classes["task-container"]}>
      {taskList.map((task) => {
        return <Task key={task._id} id={task._id} name={task.name} />;
      })}
    </div>
  );
}

export default TaskContainer;
