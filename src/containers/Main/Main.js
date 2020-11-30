import React from "react";
import Hoc from "../../components/HOC/hoc";
import Heading from "../../components/UI/Heading/Heading";
import Input from "../../components/UI/Input/Input";

import classes from "../../containers/Main/Main.module.css";

class Main extends React.Component {
  render() {
    return (
      <Hoc className={classes.Main}>
        <Heading
          style={{
            margin: "15px 0px",
            textAlign: "center",
            color: "royalblue",
          }}
          htype="h1"
        >
          Currency Converter
        </Heading>
        <div className={classes.FormContainer}>
          <Input sign="₹" />
          <div className={classes.UpDownLogo}>↑↓</div>
          <Input sign="$" />
        </div>
      </Hoc>
    );
  }
}
// ↓↑
export default Main;
