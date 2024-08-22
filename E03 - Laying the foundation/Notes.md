## JSX

- JSX is HTML-like Sytax in JavaScript
- JSX gets transpiled by Babel (Babel is a JS compiler)
- JSX => React.CreateElement => React Elements(which are basically Objects) => HTML elements (converted by react-dom from React elements to html elements that the JS engine(browser) understands)
- NOTE : not HTML but it's HTML-like

Example :

<!-- Traditional React -->

```javascript
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
```

<!-- JSX -->

```javascript
const jsxHeading = <h1 id: "heading">Namaste React</h1>
```
