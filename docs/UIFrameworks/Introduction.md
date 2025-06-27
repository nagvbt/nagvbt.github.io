---
sidebar_position: 1
---

# Introduction

## **REACT**

### Definition of React

**React** is a **JavaScript library** developed by **Meta (formerly Facebook)** for building **user
interfaces (UIs)**, especially for **single-page applications (SPAs)**.

It allows developers to create **reusable components**, manage the **state** of their application
efficiently, and render the UI dynamically based on data changes.

> React uses a **virtual DOM** to optimize UI updates, making apps fast and responsive.

---

## Setting up a React App using `create-react-app`

### Definition of CRA

`create-react-app` (CRA) is an officially supported command-line tool that **sets up a modern React
project with zero configuration**. It includes tools like Babel, Webpack, and ESLint out of the box.

---

### Syntax

Run this command in your terminal:

```bash
npx create-react-app my-app
```

After it's created:

```bash
cd my-app
npm start
```

---

### Example

```bash
npx create-react-app hello-world
cd hello-world
npm start
```

> This will start your React app in the browser at `http://localhost:3000`.

---

## **SVELTE**

### Definition

**Svelte** is a **modern JavaScript framework** for building **user interfaces**, developed by
**Rich Harris**.
Unlike React or Vue, Svelte is a **compiler** — it **compiles your components to efficient
JavaScript code** that directly manipulates the DOM.

> Svelte eliminates the need for a virtual DOM, making apps smaller and faster by default.

---

## Setting up a Svelte App using `create-vite`

To set up a Svelte project, the most common tool is **Vite** (a modern build tool), which provides
a fast and easy setup for Svelte projects.

---

### Syntax to create svelte

```bash
npm create vite@latest my-svelte-app -- --template svelte
cd my-svelte-app
npm install
npm run dev
```

---

### Example of how to create Svelte

```bash
npm create vite@latest hello-svelte -- --template svelte
cd hello-svelte
npm install
npm run dev
```

> This will start your Svelte app at `http://localhost:5173` (default Vite port).
---

## or

### Syntax - Alterate Method

```bash
npx degit sveltejs/template appname
cd appname
npm install
npm run dev
```

### Example for an Alternate Method

```bash
npx degit sveltejs/template hello-world
cd hello-world
npm install
npm run dev
```

> This will start your hello-world app at `http://localhost:5000` (default port).

---
