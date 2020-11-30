import React from "react";
import Hoc from "../../HOC/hoc";

import classes from "./Input.module.css";

const input = (props) => {
  return (
    <Hoc>
      <div className={classes.Input}>
        <div className={classes.CurrencyLogo}>{props.sign}</div>
        <input className={classes.ValueInput} type="text"></input>
      </div>
    </Hoc>
  );
};

export default input;
