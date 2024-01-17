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

## Symbols in Dependencies

- **^ (caret)**: Allows updates for the specified package up to the next major version. For example, "^1.2.3" allows updates to versions 1.x.x, excluding version 2.0.0 and higher.

    ```json
        "parcel": "^2.11.0"
    ```

- **~ (tilde)**: Permits updates for the specified package up to the next minor version. For instance, "~1.2.3" allows updates to versions 1.2.x, excluding version 1.3.0 and higher.

    ```json
        "parcel": "~2.11.0"
    ```
