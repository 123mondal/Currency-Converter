import React from "react";
import Hoc from "../../HOC/hoc";

const heading = (props) => {
  let htext = null;
  switch (props.htype) {
    case "h1":
      htext = <h1 {...props}>{props.children}</h1>;
      break;
    case "h2":
      htext = <h2 {...props}>{props.children}</h2>;
      break;
    case "h3":
      htext = <h3 {...props}>{props.children}</h3>;
      break;
    case "h4":
      htext = <h4 {...props}>{props.children}</h4>;
      break;
    default:
      htext = <h1 {...props}>{props.children}</h1>;
      break;
  }
  return <Hoc>{htext}</Hoc>;
};

export default heading;
