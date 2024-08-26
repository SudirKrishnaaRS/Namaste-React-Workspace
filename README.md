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
