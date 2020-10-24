import React from "react";
import ReactDOM from "react-dom";
import SimpleComponent from "./SimpleComponent";
import SimplerComponent from "./SimplerComponent";

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={console.log("clicked")} />
  </div>,
  document.getElementById("root")
);
