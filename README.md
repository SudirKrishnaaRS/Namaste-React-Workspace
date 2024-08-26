# Namaste React

# EP 3 : Laying the Foundation

## JSX

**Definition:**  
JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write **HTML-like** code within your JavaScript files.

**Gotchas:**

- JSX is not exactly HTML; it's an HTML-like syntax that gets transpiled by Babel (a JavaScript compiler).
- The JSX code is transpiled into `React.createElement` calls, which return React elements (plain JavaScript objects). These React elements are eventually rendered as HTML elements by React DOM. **(NOTE : Similar to CodeEvolution React Render Vid)**
- Remember that JSX is optional; you can write your React components without it, using `React.createElement` directly.

**Code Snippet:**

Traditional React

```javascript
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
```

## React Components

**Definition:**  
React components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces that can be managed separately. There are two main types of components: **Functional Components** and **Class Components**.

**Gotchas:**

- Functional components are simpler and preferred for most use cases, especially after the introduction of hooks.
- Class components are still valid but are less commonly used in modern React development.

**Code Snippet:**

```javascript
// Functional Component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Class Component
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Usage
<Greeting name="John" />;
```

## React Elements

**Definition:**

React elements are the smallest building blocks of React applications. They are plain objects that describe what you want to see on the screen. Unlike components, React elements do not manage their state.

**Gotchas:**

- React elements are immutable. Once an element is created, you cannot change its children or attributes.
- Elements are typically created using JSX, which is a syntax extension for JavaScript.

**Code Snippet:**

```javascript
// Creating a React element
const element = <h1>Hello, world!</h1>;
```

## Component Composition

**Definition:**

Component composition is the practice of building complex UIs by combining simpler components.
(HINT : In simpler words , Composing (using) components into one another)
It allows for reusability, better organization, and more manageable code.

**Gotchas:**

- Avoid deeply nested components as they can make the code harder to read and maintain.
- Use composition instead of inheritance to extend component functionality in React.

**Code Snippet:**

```javascript
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
      <Button label="Submit" onClick={handleClick} />
    </div>
  );
}

// Usage
<App />;
```
