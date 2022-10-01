import React, { useState } from "react";

const TaskContext = React.createContext({
  taskList: [],
  updateTaskList: () => {},
  removeTask: () => {},
});

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const updateTaskList = (task) => {
    setTaskList((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  const removeTask = (id) => {
    const updatedArray = taskList.filter((task) => {
      console.log(task);
      return task.id !== id;
    });

    setTaskList(updatedArray);
  };

  const value = {
    taskList,
    updateTaskList,
    removeTask,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContext;
