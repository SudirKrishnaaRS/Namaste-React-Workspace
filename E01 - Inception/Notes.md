# EP 1

## Fundamental Functions

These functions are fundamental in building and rendering React applications, allowing developers to create and manage the virtual DOM effectively.

### React.createElement

- `React.createElement` is a function provided by React to create React elements.
- It takes three arguments: the type of the element (e.g., HTML tag or a React component), optional properties or attributes for the element, and the content or children of the element.
- It returns a React element, which is a lightweight virtual representation of a DOM element.

**Example:**

```javascript
const heading = React.createElement("h1", {}, "Hello World from React!");
```

In this example, the heading is a React element representing an `<h1>` tag with the text "Hello World from React!".

### ReactDOM.createRoot

- `ReactDOM.createRoot`` is a method introduced in React 18 to create a root for a React application. It's an alternative to the older ReactDOM.render method.
- It takes an HTML element as an argument, specifying where the React application will be rendered.
- It returns a Root object, which is an entry point to the React application.

**Example:**

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
```

In this example, root is a Root object created for the HTML element with the id "root". It provides an interface to render React elements into the specified root element.

## Hello World in React Example

```html
<!-- The following HTML code creates a container with the id "root" where our React application will be rendered. -->
<div id="root"></div>

<!-- React CDN Links: These script tags include React and ReactDOM libraries from a Content Delivery Network (CDN). -->
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>

<script>
  // Creating a React element (a virtual representation of a DOM element) with an h1 tag containing the text "Hello World from React!"
  const heading = React.createElement("h1", {}, "Hello World from React!");

  // Creating a root for our React application by using ReactDOM.createRoot() and passing the HTML element with the id "root".
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // Rendering the previously created React element (heading) into the root of our React application.
  root.render(heading);
</script>
```

### Things to Know

- The most costly operation is DOM manipulation. The frameworka/libraries try to optimize this for performance.
- All React elements are `Objects`.

**Example:**

```javascript
const heading = React.createElement( "h1", { id: "head-test-1" }, "Hello World from React!");
console.log(heading);
```

Output :

```json
{
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
    "id": "head-test-1",
    "children": "Hello World from React!"
  },
  "_owner": null,
  "_store": {}
}
```
