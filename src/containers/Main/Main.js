import React from "react";
import Hoc from "../../components/HOC/hoc";
import Heading from "../../components/UI/Heading/Heading";

class Main extends React.Component {
  render() {
    return (
      <Hoc>
        <Heading htype="h1">Tanu Mondal</Heading>
        <Heading htype="h2">Tanu Mondal</Heading>
        <Heading htype="h3">Tanu Mondal</Heading>
        <Heading htype="h4">Tanu Mondal</Heading>
      </Hoc>
    );
  }
}

export default Main;
