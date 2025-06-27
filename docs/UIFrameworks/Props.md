---
sidebar_position: 11
---
# Props

## **REACT**

### What are React Props?

**Props (short for properties)** are used to pass **data from one component (parent)** to **another (child)**.
They are **read-only**, meaning the child component cannot change them.

> Think of props as function arguments, but for components.

---

## Props and State

### Definition

* **Props** are used to pass data *into* a component.
* **State** is used to manage *internal* data *within* a component.

### Syntax

```tsx
type MyProps = {
  title: string;
};

const MyComponent: React.FC<MyProps> = ({ title }) => {
  return <h2>{title}</h2>;
};
```

---

### Example

```tsx
import React, { useState } from 'react';

type MyProps = {
  name: string;
};

const Greeting: React.FC<MyProps> = ({ name }) => {
  const [count, setCount] = useState<number>(0); // state

  return (
    <div>
      <h2>Hello, {name}!</h2> {/* Using props */}
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button> {/* Updating state */}
    </div>
  );
};

export default Greeting;
```

---

## Passing Data with Props

You can pass values to a child component as attributes.

### Syntax of passing data with props

```tsx
<ChildComponent title="Welcome" />
```

---

### Example of passing data with props

```tsx
// ParentComponent.tsx
import React from 'react';
import Child from './Child';

const Parent: React.FC = () => {
  return <Child title="React Props Example" />;
};

// Child.tsx
type Props = {
  title: string;
};

const Child: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>; // Displaying prop from parent
};

export default Parent;
```

---

## Managing Local Component State

State is local data in a component that can change over time (like user input, count, etc.)

### Syntax for managing local component state

```tsx
const [value, setValue] = useState<type>(initialValue);
```

---

### Example for managing local component state

```tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Local state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
    </div>
  );
};

export default Counter;
```

---

## useState Hook (Functional Components)

The `useState` hook lets functional components hold and update internal state.

### Syntax of useState Hook

```tsx
const [state, setState] = useState<type>(initialValue);
```

---

### Example of useState Hook

```tsx
import React, { useState } from 'react';

const NameInput: React.FC = () => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)} // update state on input
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
};

export default NameInput;
```

---

### Summary

| Concept                | Purpose                                 |
| ---------------------- | --------------------------------------- |
| **Props**              | Pass data into components               |
| **State**              | Manage dynamic/local data               |
| **Passing with Props** | Use props to configure child behavior   |
| **useState**           | React Hook to manage state in functions |

---

## **SVELTE**

## Props & State in Svelte

## What are Props?

### Definition of Svelte Props

In **Svelte**, **props** are **component parameters** — values passed from a **parent** to a
**child component**.

> Like function arguments for components.
> Props are **read-only** in the child component.

---

## Props and State (Reactivity)

### Props → passed from parent

### State → declared as variables and are **reactive by default** in Svelte

---

### Syntax (Props)

```svelte
<!-- ChildComponent.svelte -->
<script lang="ts">
  export let title: string; // Declare props using `export let`
</script>

<h2>{title}</h2>
```

---

### Example(Props + State)

```svelte
<!-- Greeting.svelte -->
<script lang="ts">
  export let name: string; // prop
  let count: number = 0;   // state (reactive)
</script>

<div>
  <h2>Hello, {name}!</h2>
  <p>You clicked {count} times.</p>
  <button on:click={() => count += 1}>Click Me</button>
</div>
```

---

## Passing Data with Props in Svelte

### Syntax (Passing to Child)

```svelte
<!-- ParentComponent.svelte -->
<script lang="ts">
  import Child from './ChildComponent.svelte';
</script>

<Child title="Svelte Props Example" />
```

```svelte
<!-- ChildComponent.svelte -->
<script lang="ts">
  export let title: string;
</script>

<h1>{title}</h1>
```

---

## Managing Local Component State in Svelte

In Svelte, any variable declared in `<script>` is **reactive by default** and acts as **state**.

---

### Syntax for managing local component state in svelte

```svelte
<script lang="ts">
  let count: number = 0;
</script>

<p>{count}</p>
<button on:click={() => count++}>Add +1</button>
```

---

### Example of managing local componenet state in svelte

```svelte
<!-- Counter.svelte -->
<script lang="ts">
  let count: number = 0;
</script>

<div>
  <p>Count: {count}</p>
  <button on:click={() => count++}>Add +1</button>
</div>
```

---

## Local State (Input Handling)

### Syntax of local state input handling

```svelte
<script lang="ts">
  let variableName: string = "";
</script>

<input bind:value={variableName} />
<p>{variableName}</p>
```

> Use `bind:value={...}` for two-way data binding in Svelte.

---

### Example of local state input handling

```svelte
<!-- NameInput.svelte -->
<script lang="ts">
  let name: string = "";
</script>

<input bind:value={name} placeholder="Enter your name" />
<p>Your name is: {name}</p>
```

> `bind:value={name}` keeps the input field and `name` variable in sync automatically.

### React vs Svelte (Hooks vs Reactivity)

| Concept               | **React**                      | **Svelte**                           |
| --------------------- | ------------------------------ | ------------------------------------ |
| Local state           | `useState()` hook              | Reactive variables (`let count = 0`) |
| Side effects          | `useEffect()` hook             | `onMount()`, reactive statements     |
| Derived/computed data | Custom hooks or logic          | `$:` reactive statements             |
| Input binding         | `value`, `onChange` with state | `bind:value={name}`                  |

### Summary of props in React and Svelte

| Concept                | React                              | Svelte                          |
| ---------------------- | ---------------------------------- | ------------------------------- |
| **Props**              | Passed using `props`               | Declared with `export let`      |
| **State**              | `useState` for local state         | Reactive variables (`let`)      |
| **Update State**       | `setState(value)`                  | Direct assignment (`count++`)   |
| **Input Handling**     | `onChange`, setState               | `bind:value={name}`             |
| **Pass Props**         | `<Comp prop="value" />`            | Same: `<Child title="Hello" />` |
| **Use Props in Child** | Destructure in function parameters | `export let title;`             |

---
