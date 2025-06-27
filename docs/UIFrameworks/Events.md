---
sidebar_position: 12
---
# Events

## **REACT**

### What are React Events?

In React, **events** (like `onClick`, `onChange`, etc.) work just like HTML DOM events, but are
written in **camelCase** and use **JSX functions** instead of strings.

> You handle user actions like clicks, typing, submitting forms using event handlers.

---

## Handling Events in React (onClick, onChange)

### Syntax

```tsx
<button onClick={handleClick}>Click Me</button>
<input onChange={handleChange} />
```

---

### Example: onClick & onChange

```tsx
import React, { useState } from 'react';

const EventExample: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  // Called when input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Called when button is clicked
  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClick}>Submit</button>

      {/* Conditional Rendering */}
      {clicked && <p>Hello, {name}!</p>}
    </div>
  );
};

export default EventExample;
```

---

## **SVELTE**

### What are Svelte Events?

In Svelte, **events** like `on:click`, `on:input`, `on:submit`, etc., allow components to respond
to user interactions.

> Svelte events are similar to native DOM events but use `on:eventName` syntax. You write event
handlers directly in the markup or bind them to functions.

---

## Handling Events in Svelte (`on:click`, `on:input`)

### Syntax of Events in Svelte

```svelte
<button on:click={handleClick}>Click Me</button>
<input on:input={handleInput} />
```

---

### Example: `on:click` & `on:input`

```svelte
<!-- EventExample.svelte -->
<script lang="ts">
  let name: string = "";
  let clicked: boolean = false;

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    name = target.value;
  };

  const handleClick = () => {
    clicked = true;
  };
</script>

<input
  type="text"
  placeholder="Enter your name"
  on:input={handleInput}
/>
<button on:click={handleClick}>Submit</button>

{#if clicked}
  <p>Hello, {name}!</p>
{/if}
```

---

## **REACT** - Updating Events

## Updating State Based on Events

### Definition

React uses functions like `setState` or `useState` hooks to update values based on user actions
(click, input, etc.).

---

### Syntax of Updating Events

```tsx
const [count, setCount] = useState<number>(0);

<button onClick={() => setCount(count + 1)}>Add</button>
```

---

### Example: Button Click to Update State

```tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1); // updates state on click
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>+1</button>
    </div>
  );
};

export default Counter;
```

---

### Example Explanation

| Concept               | Description                               |
| --------------------- | ----------------------------------------- |
| `onClick`, `onChange` | React event handlers                      |
| `useState()`          | Hook to store and update values           |
| `handleChange()`      | Reads input and updates state             |
| `handleClick()`       | Executes logic when user clicks something |

---

## **SVELTE** - Updating Events

## Updating State Based on Events in Svelte

### Definition of Updating States in Svelte

Svelte updates **reactive variables** directly (no `useState`). When an event happens, update the
variable — the UI reacts automatically.

---

### Syntax of Updating States in Svelte

```svelte
<script lang="ts">
  let count: number = 0;
</script>

<button on:click={() => count += 1}>Add</button>
<p>Count: {count}</p>
```

---

### Example: Button Click to Update State in Svelte

```svelte
<!-- Counter.svelte -->
<script lang="ts">
  let count: number = 0;

  const handleIncrement = () => {
    count += 1;
  };
</script>

<h3>Count: {count}</h3>
<button on:click={handleIncrement}>+1</button>
```

---

### Explanation of the above Example

| Concept           | Description                                  |
| ----------------- | -------------------------------------------- |
| `on:click`        | Runs function when user clicks               |
| `on:input`        | Reads text input value                       |
| `let variable`    | Declares reactive variables (like state)     |
| `{#if condition}` | Conditionally render block (like JSX `&&`)   |
| `count += 1`      | Directly updates reactive variable in Svelte |
