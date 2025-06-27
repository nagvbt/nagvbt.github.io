---
sidebar_position: 4
---

# ES6 Variables

## **REACT**

### Definition

In ES6, we use `let` and `const` instead of `var` to declare variables.
These keywords provide **block-scoping** and avoid issues like **hoisting bugs** seen with `var`.

---

### `let` vs `const` vs `var`

| Keyword | Scope    | Reassignable | Best For                                  |
| ------- | -------- | ------------ | ----------------------------------------- |
| `var`   | Function | Yes          | Avoid in modern code (function-scoped) |
| `let`   | Block    | Yes          | Variables that will change                |
| `const` | Block    | No         | Fixed values (can't be reassigned)        |

---

### Syntax

```ts
// Using let (reassignable within block scope)
let counter: number = 1;
counter = 2; // allowed

// Using const (cannot be reassigned after declaration)
const appName: string = "MyReactApp";
// appName = "NewApp";  Error: const cannot be reassigned

// Using var (not recommended — function-scoped, not block-scoped)
var status: string = "active";
```

---

### Example

```tsx
// File: VariableExample.tsx
import React from 'react';

const VariableExample = () => {
  // const: used for values that do not change
  const title: string = "React ES6 Variables";

  // let: used inside function scope — can be updated
  let count: number = 0;

  // Arrow function to simulate a click counter
  const handleClick = (): void => {
    count++; // Only works within this function call (does not persist across renders)
    console.log("Clicked:", count);
  };

  return (
    <div>
      <h2>{title}</h2>
      {/* Button uses the handleClick function */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default VariableExample;
```

---

### Example Explanation

* `const title`: Title never changes during the component's lifecycle.
* `let count`: Mutable inside the `handleClick` function, but **not tracked in React state** — won’t
 persist across renders.
* The example demonstrates the use of `let` and `const`, but in real-world React apps,
**use `useState`** to persist `count`.

---

## **SVELTE**

### Definition of Svelte Variables

In Svelte (just like in modern JavaScript/TypeScript), you use `let` and `const` instead of `var`.
These give better **scoping rules** and help avoid unexpected bugs.

---

### Syntax of Variables in Svelte

```ts
// Block-scoped & reassignable
let counter: number = 1;
counter = 2; // OK

// Block-scoped & constant
const appName: string = "MySvelteApp";
// appName = "NewApp";  Error

// Function-scoped (Avoid in modern Svelte)
var status: string = "active";
```

---

### Example of Variables in Svelte

```svelte
<!-- File: VariableExample.svelte -->
<script lang="ts">
  const title: string = "Svelte ES6 Variables";
  let count: number = 0;

  // Updates count locally
  const handleClick = (): void => {
    count += 1;
    console.log("Clicked:", count);
  };
</script>

<!-- UI -->
<h2>{title}</h2>
<button on:click={handleClick}>Click Me</button>
<p>Open console to see count updates</p>
```

---

### Explanation

* `const title` is fixed and doesn’t change.
* `let count` is mutable and reactive in Svelte — UI updates automatically.
* Unlike React, no need for `useState` — reactivity is automatic in Svelte.

---
