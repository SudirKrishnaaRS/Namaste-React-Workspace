import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {id: "head-test-1"}, "Hello World from React!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
