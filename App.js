import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React🚀 using JSX
  </h1>
);

const number = 10000;

// React Function Component - NEW
const HeadingComponent = () => (
  <div id="container">
      <h1>{number}</h1>

    <h1 className="heading">Namaste React frm React Function Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
