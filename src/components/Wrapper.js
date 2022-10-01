import React from "react";
import classes from  "./Wrapper.module.css";

function Wrapper({ children }) {
  return <div className={classes.container}>{children}</div>;
}

export default Wrapper;
