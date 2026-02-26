import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
    <h1 className="head" tabIndex="1">
      Namaste React🚀 using JSX
    </h1>
);

// React component
// React Function Component - NEW

const Heading = () => {
      return <h1>Namaste React frm React Function Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
