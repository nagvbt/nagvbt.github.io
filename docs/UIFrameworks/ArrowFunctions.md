---
sidebar_position: 3
---


# Arrow Functions

## **REACT**

### Definition

**Arrow functions** are a shorter way to write functions in ES6 (ECMAScript 2015).
They don’t have their own `this` context — instead, they use `this` from their surrounding scope.

> In React, arrow functions are often used in event handlers and class methods to automatically bind
 `this`.

---

### Syntax of Array Functions in React

```ts
// Traditional function
function greet(name: string): void {
  console.log("Hello, " + name);
}

// Arrow function (equivalent)
const functionName = (parameters) => {
  // function body
};
```

## Arrow Function Highlights

* Shorter syntax
* No `function` keyword
* Automatically binds `this`
* Useful inside React components for handlers and inline functions

---

### Example of Array Functions in React

```tsx
// File: Greeting.tsx
import React from 'react';

// Props type
type GreetingProps = {
  name: string;
};

const Greeting = ({ name }):Greeting Props => {
  // Arrow function to handle click
  const handleClick = (): void => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <h2>Welcome, {name}</h2>
      {/* Button uses arrow function handler */}
      <button onClick={handleClick}>Say Hello</button>
    </div>
  );
};

export default Greeting;
```

---

### Example Explanation

* `type GreetingProps` defines the prop `name`.
* `handleClick` is an arrow function that shows an alert.
* `onClick={handleClick}` connects the button to the function.
* The arrow function keeps the correct `this` context, so no need for `.bind(this)` like in class components.

---

## **SVELTE**

### Definition of Svelte

**Arrow functions** in Svelte (just like in JavaScript/TypeScript) are a **shorter way to define
functions**, and they **inherit `this` from their surrounding scope**.

> In Svelte, they’re commonly used for **event handlers** and **simple methods** inside `<script>`.

---

### Syntax of Arrow Functions in React

```ts
// Traditional function
function g(name: string): void {
  console.log("Hello, " + name);
}

// Arrow function (equivalent)
const functionName = (parameters) => {
  // function body
};

```

### Highlights

* Cleaner, shorter syntax
* No `function` keyword
* `this` is lexically scoped
* Used for event handlers, callbacks, etc.

---

### Example of Arrow functions in Svelte

```svelte
<!-- File: Greeting.svelte -->
<script lang="ts">
  // Prop from parent
  export let name: string;

  // Arrow function for event handling
  const handleClick = (): void => {
    alert(`Hello, ${name}!`);
  };
</script>

<!-- HTML Template -->
<div>
  <h2>Welcome, {name}</h2>

  <!-- Button with arrow function handler -->
  <button on:click={handleClick}>Say Hello</button>
</div>
```

---

### Example Explanation of Arrow Functions in Svelte

* `export let name` → Accepts a **prop** from the parent.
* `handleClick` → Defined as an **arrow function** for simplicity.
* `on:click={handleClick}` → Binds the function to the button click.
* Arrow functions are useful when there's **no need to manage `this`**, which Svelte handles
  automatically anyway.
