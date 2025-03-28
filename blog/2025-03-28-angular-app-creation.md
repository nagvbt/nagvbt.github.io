---
tags: ["Angular", "Front End"]
---

# **Creating an Angular Application from Scratch**  

Setting up an Angular application from scratch may seem daunting at first, but with Angular CLI, the process is streamlined and efficient. This guide walks you through the essential steps, from installing dependencies to running your project.

## **1. Install the Latest Node.js**  

Before setting up Angular, ensure that you have the latest version of **Node.js** installed. Angular relies on **npm (Node Package Manager)** for dependency management.  

### **Steps to Install Node.js:**

- Download and install **Node.js** from the official [Node.js website](https://nodejs.org/).  
- Verify the installation by running the following commands in your terminal:

    ```sh
    node -v
    npm -v
    ```

    These commands should return the installed versions of Node.js and npm.  

- Ensure compatibility with Angular by checking [Angular's version compatibility guide](https://angular.dev/reference/versions).  

## **2. Install Angular CLI**  

Angular CLI (Command Line Interface) is a tool that simplifies Angular development by providing useful commands for creating, building, and serving applications.  

### **Install Angular CLI:**

- Using npm:  
    ```sh
    npm install -g @angular/cli
    ```

- Using yarn:  
    ```sh
    yarn global add @angular/cli
    ```

### **Verify the Installation:**

Run the following command to check if Angular CLI is installed correctly:  

```sh
ng version
```

This will display the installed Angular CLI version and its dependencies.  

## **3. Create a New Angular Project**  

Once Angular CLI is installed, you can create a new Angular workspace and project using the CLI:  

```sh
ng new my-app
```

### **Configuration Options:**
- Replace `my-app` with your desired project name.
- The CLI will prompt you to choose configurations, such as:
  - Whether to include Angular routing
  - Preferred CSS preprocessor (CSS, SCSS, LESS, etc.)

After the project is created, navigate into the project folder:  

```sh
cd my-app
```

## **4. Run the Angular Application**  

To launch the Angular application locally, start the development server using:  

```sh
ng serve --open
```

### **What Happens?**
- The `--open` flag automatically opens the application in your default web browser.
- By default, the app runs on **http://localhost:4200/**.
- The server continuously watches for file changes and reloads the app as you modify the code.

## **Conclusion**  

Congratulations! You have successfully set up and run your first Angular application. From here, you can start modifying components, services, and styles to build your project. Angular's powerful framework will help you create dynamic and scalable web applications effortlessly. Happy coding! 🚀

