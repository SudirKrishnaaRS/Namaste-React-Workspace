# EP 02 - Igniting Our App

## NPM

- **What is npm?**

  - NPM is the default package manager for Node.js, a JavaScript runtime.
  - It helps developers manage and share reusable code packages/modules.

- **Initializing a Project**

  - Create a `package.json` file by running:

    ```bash
    npm init
    ```

## NPM vs NPX

- **npm** (Node Package Manager): npm is the package manager for Node.js, used for installing and managing project dependencies. It is also used for running scripts defined in the package.json file.

- **npx**: npx is a tool that comes with npm, allowing you to execute packages directly without having to install them globally. It is commonly used for running binaries from packages, such as build tools or command-line utilities, without the need for a separate installation step.

## Package.JSON

- `package.json` is configuration for npm.
- A package.json file is a crucial part of Node.js projects. It contains metadata about the project and its dependencies, helping npm manage the project's packages and scripts.
- Here's an example of a `package.json`

  ```json
  {
    "name": "your-project-name",
    "version": "1.0.0",
    "description": "A brief description of your project",
    "main": "index.js",
    "scripts": {
      "start": "node index.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": ["node", "npm", "example"],
    "author": "Your Name",
    "license": "MIT",
    "dependencies": {
      "express": "^4.17.1",
      "lodash": "^4.17.21"
    },
    "devDependencies": {
      "nodemon": "^2.0.12"
    }
  }
  ```

- **Explanation of Fields**
  - **name**: The name of your project.
  - **version**: The version of your project using Semantic Versioning.
  - **description**: A brief description of your project.
  - **main**: The entry point of your application (default: index.js).
  - **scripts**: Custom scripts that can be run using npm run <script-name>.
  - **keywords**: An array of keywords related to your project.
  - **author**: The author(s) of the project.
  - **license**: The type of license for your project.
  - **dependencies**: External packages required for production.
  - **devDependencies**: Packages only needed for development and testing.

## Package-lock.json

- The `package-lock.json` file is an automatically generated file in a Node.js project that locks down the versions of installed npm packages, ensuring consistency across different development environments.
- This file aids in reproducibility and helps prevent unintentional updates to package versions when the project is shared or deployed.
- It includes specific version information for each dependency, along with details about the project's dependency tree and nested dependencies.

## Bundler

- A bundler is a tool that combines and packages multiple files and dependencies from a project into a single, optimized file or set of files for deployment.
- It simplifies the management of modular code, handling tasks like file concatenation, minification, and dependency resolution.
- Popular bundlers in the web development ecosystem include webpack, Parcel, and vite.

## Webpack (Bundler in create-react-app)

- Webpack is a widely-used open-source JavaScript module bundler that helps manage a project's assets, such as scripts, styles, and images.
- It analyzes the project's dependency graph and bundles these assets into optimized and smaller files for efficient delivery to the browser.
- Webpack also supports various plugins and loaders, enabling additional functionalities like code splitting and transpilation.

## Dependencies and Dev-dependencies

**Dependencies**: Refers to packages that are required for the application to run in a production environment. These packages are necessary for the application's core functionality.

**Dev-dependencies**: Refers to packages that are only needed during the development and testing phase. They are not essential for the application to run in a production environment but are helpful during the development process, such as testing frameworks or build tools.

## Transitive dependencies

- Transitive dependencies are the additional packages that a project relies on indirectly through its direct dependencies. These dependencies are not explicitly listed in the project's package.json file but are required by the installed dependencies.
- Example : When you install `tailwind` package, npm not only installs tailwind in `node_modules` folder but several other dependencies along with it which is necessary for tailwind to run. These indirect dependencies are called **Transitive Dependencies**.

## Symbols in Dependencies

- **^ (caret)**: Allows updates for the specified package up to the next major version. For example, "^1.2.3" allows updates to versions 1.x.x, excluding version 2.0.0 and higher.

  ```json
      "parcel": "^2.11.0"
  ```

- **~ (tilde)**: Permits updates for the specified package up to the next minor version. For instance, "~1.2.3" allows updates to versions 1.2.x, excluding version 1.3.0 and higher.

  ```json
      "parcel": "~2.11.0"
  ```

![image](https://github.com/SudirKrishnaaRS/Namaste-React-Workspace/assets/67383465/52317f38-a2a8-4c5b-b62a-9652cec7ea7a)

## Versions in a Nutshell

![image](https://github.com/SudirKrishnaaRS/Namaste-React-Workspace/assets/67383465/ca7ef6d7-6203-4bed-8f05-19ce106bddb1)

## node_modules

- The `node_modules` folder is a directory in a Node.js project that contains locally installed npm packages.
- When you run `npm install`, it creates this folder and installs the project's dependencies into it.
- The `node_modules` folder is typically excluded from version control, and npm uses the information in the `package.json` and `package-lock.json` files to manage and recreate the folder's structure.

## Transpiler

- A transpiler, short for "source-to-source compiler," is a tool that converts source code written in one programming language into equivalent code in another language while maintaining the same functionality.
- Unlike traditional compilers, which translate code to a lower-level language like machine code, transpilers are often used for converting code between higher-level languages, such as compiling modern ECMAScript (ES6+) JavaScript to older JavaScript versions for broader compatibility.
- Transpilers facilitate code migration, compatibility, and adoption of new language features across different environments.
- Example : Babel

## Babel

- Babel is a transpiler that allows developers to write code using the latest ECMAScript features (ES6 and beyond) and then transpile it into a version compatible with older JavaScript environments.
- It enables cross-browser compatibility and the adoption of new language features by converting modern JavaScript code into equivalent code that works in older browsers or environments.
- Babel is extensively used in front-end and back-end development for its role in modern JavaScript ecosystem tooling.

## Installation of React - Best Way ?

- CDN ❌:
  - NOT PREFERED as again making a network call is costly operation and time consuming.
  - Not feasible if react version has chnaged then the cdn URL needs to replaced.

- NPM Package ✅:
  - PREFFERED as it would be readily available in node_modules folder.
  - If the react version changes it would be easy to maintain in package.json file.

## Parcel uses

- Dev Build
- Provides a Local Server
- HMR (Hot Module Replacement) : Basically when you save the changes appear without the need of reload. (HINT: same as Hot Reload)
- The HMR is possible due to File Watching Algorithm (internally written in C++)
- Faster Builds for development (Due to caching)
- Image Optimisation (NOTE: Most expensive operation is displaying images)
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling : support older browsers
- Helps in diagnostics and Error handling
- Supports for HTTPS
- Tree Shaking : This algorithm removes unused code.
- Different Dev and Production bundles

## Browserslist (npm package)

- Refer https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
- This helps in supporting our App for which versions of browser. 