---
sidebar_position: 10
---

# JSX

## **REACT**

### Definition

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React to write HTML-like code.
It lets you write components in a way that looks like HTML, but is actually JavaScript.

> JSX makes it easier to describe what the UI should look like.

---

### Syntax

```tsx
const MyComponent: React.FC = () => {
  const name: string = "NBT";
  const isLoggedIn: boolean = true;

  return (
    <div>
      <h1>Hello, {name}</h1> {/* Embedding JS/TS expressions inside JSX */}
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>} {/* Ternary */}
    </div>
  );
};
```

---

### Example

```tsx
// File: JSXExample.tsx
import React from 'react';

const JSXExample: React.FC = () => {
  const courseName: string = "React with TypeScript";
  const lessons: string[] = ["JSX", "Components", "Props", "Hooks"];

  return (
    <div>
      <h2>{courseName}</h2>
      <p>This course covers the following topics:</p>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index}>{lesson}</li> // Rendering list items dynamically
        ))}
      </ul>
    </div>
  );
};

export default JSXExample;
```

---

### Example Explanation

* JSX lets you write **HTML-like code** inside React components.
* You can insert JS/TS values using `{}`.
* JSX helps you mix UI and logic in a readable way.
* JSX must return **a single root element** (like a `<div>`).

---

## **SVELTE**

### Definition of Svelte

Svelte does **not use JSX**.
Instead, you write **HTML directly** in the markup section of `.svelte` files, and use `{}` to
insert dynamic values, similar to JSX.

> Svelte’s HTML-like syntax achieves the same purpose as JSX — defining UI declaratively.

---

### Syntax of Svelte(JSX)

```svelte
<script lang="ts">
  let name: string = "NBT";
  let isLoggedIn: boolean = true;
</script>

<div>
  <h1>Hello, {name}</h1> <!-- Embed values -->
  {#if isLoggedIn}
    <p>Welcome back!</p>
  {:else}
    <p>Please log in.</p>
  {/if}
</div>
```

---

### Example of Svelte JSX

```svelte
<!-- File: JSXExample.svelte -->
<script lang="ts">
  let courseName: string = "Svelte with TypeScript";
  let lessons: string[] = ["Reactivity", "Components", "Props", "Bindings"];
</script>

<div>
  <h2>{courseName}</h2>
  <p>This course covers the following topics:</p>
  <ul>
    {#each lessons as lesson, index}
      <li>{index + 1}. {lesson}</li>
    {/each}
  </ul>
</div>
```

---

### Explanation

* Svelte doesn't need JSX — it's built with **native HTML syntax**.
* `{}` lets you insert TypeScript or JavaScript expressions.
* Use `{#if}`, `{#each}`, etc., instead of ternaries or map functions.
* Like JSX, everything must be wrapped in a **single block** (usually a `<div>` or `<main>`).
