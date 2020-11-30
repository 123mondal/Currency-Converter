import React from "react";

const hoc = (props) => {
    return <div {...props}>{props.children}</div>;
}

export default hoc;
