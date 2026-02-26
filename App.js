import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the js) - Parcel - babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = (
    <h1 className="head" tabIndex="1">
      Namaste React🚀 using JSX
    </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
