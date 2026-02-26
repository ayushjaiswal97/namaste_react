import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement(
      'h1',
      {id:"heading"},
      "Namaste React🚀"
);
console.log(heading);

// JSX - HTML-like or XML-like syntax 
// JSX (transpiled before it reaches the js) - Parcel - babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = <h1 id="heading">Namaste React🚀 using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);