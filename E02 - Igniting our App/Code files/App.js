const heading = React.createElement("h1", {id: "head-test-1"}, "Hello World from React!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
