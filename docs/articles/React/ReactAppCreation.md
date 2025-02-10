# React App creation

## Introduction

React is a JavaScript library for building user interfaces. It enables developers to create
reusable UI components.

- Developed by Facebook

- Component-based architecture

## Steps to Create React app

You need to node.js and VSCode installed on your computer.

1. Install Yarn
    Go to command promt and install

    ```jsx
    npm install --global yarn
    ```

2. Run Below command

    ```jsx
    npm config set legacy-peer-deps true
    ```

    It will resolve below Error
    npm error code ERESOLVE
    npm error ERESOLVE unable to resolve dependency tree

3. Create a folder in C:\ or D:\
   D:\Source\FSD-MERN\React-Samples

   Go to (cd) React-Samples

4. To Create an React App
   - Open  `React-Samples`
   - Execute

   ```bash
   npx create-react-app my-app
   cd my-app
   yarn 
   ```

5. To start an application it will open in the      default browser
    - Execute

    ```bash
    yarn start
    ```

This completes the sample react app creation and running the app.

## Issues

 1. Module not found: Error: Can't resolve 'web-vitals'

- Execute in Terminal
   `npm install --save-dev web-vitals`
