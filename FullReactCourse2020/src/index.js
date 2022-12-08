import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h4>this is my first component</h4>;
}

ReactDOM.render(<Greeting></Greeting>, document.getElementById("root"));
