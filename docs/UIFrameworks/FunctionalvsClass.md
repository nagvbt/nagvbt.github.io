
# Functional vs Class Components

<!--markdownlint-disable  MD013 -->

## **REACT**

### Definition of Components

A **component** in React is a reusable, self-contained block of UI code. Components can be either:

* **Functional Components** (modern, preferred)
* **Class Components** (older, still used in some projects)

Both can receive **props**, manage **state**, and render UI.

---

## Functional Components

A functional component is a JavaScript function that returns JSX (UI).
It’s the modern and simpler way to create components in React.

Think of it like:
"Give me some data (props), and I’ll return what to show on screen."

### Syntax

```tsx
// Define the shape of props using a TypeScript type
type Props = {
  name: string;
  age: number;
};

const Greeting = ({ name, age }: Props) => {
  // JSX returned by the component
  return <h2>Hello, {name}! You are {age} years old.</h2>;
};
```

---

### Example

```tsx
import React from 'react';

// Define the props type
type UserProps = {
  username: string;
  age: number;
};

// Functional component using props
const Welcome = ({ username, age }: UserProps) => {
  return (
    <div>
      {/* Render the passed username */}
      Hello, {username}! You are {age} years old.
    </div>
  );
};

export default Welcome;
```

---

## **SVELTE**

## What Is a Component in Svelte?

A **Svelte component** is a `.svelte` file that contains:

* A `<script>` block for logic (props, state, methods)
* A markup section (HTML)
* Optional `<style>` for scoped CSS

---

## Functional Components in Svelte

### Syntax (with props + reactive variables)

```svelte
<!-- File: Greeting.svelte -->
<script lang="ts">
  // Props from parent
  export let name: string;
  export let age: number;

  // Reactive variable
  let greeted = false;

  // Function to change state
  const greet = () => {
    greeted = true;
  };
</script>

<!-- UI -->
<h2>Hello, {name}! You are {age} years old.</h2>
{#if greeted}
  <p>Nice to meet you again!</p>
{:else}
  <button on:click={greet}>Greet Me</button>
{/if}
```

---

### Svelte Example with Props and State

```svelte
<!-- File: Welcome.svelte -->
<script lang="ts">
  export let username: string;
  let greeted: boolean = false;

  const greet = () => {
    greeted = true;
  };
</script>

<h2>Welcome, {username}!</h2>
{#if greeted}
  <p>You've already been greeted.</p>
{:else}
  <button on:click={greet}>Say Hello</button>
{/if}
```

### React vs Svelte: Component Comparison

| Feature           | React Functional             | React Class           | Svelte Component        |
| ----------------- | ---------------------------- | --------------------- | ----------------------- |
| Type              | Function (JSX)               | Class w/ `extends`    | Svelte file (`.svelte`) |
| Props             | Via `props` or destructuring | Via `this.props`      | Via `export let`        |
| State             | `useState()`                 | `this.state`          | `let` (reactive)        |
| Re-render Trigger | State/prop change via hooks  | State change          | Variable change         |
| Lifecycle         | `useEffect()`                | `componentDidMount()` | `onMount()` and others  |
| JSX?              | Yes                          | Yes                   | No (uses HTML directly) |
| Boilerplate       | Medium                       | High                  | Low                     |

---

## **REACT - Class Components**

## Class Components

A class component is a JavaScript class that extends React.Component.
It can have its own state and lifecycle methods, and it also returns JSX.

Think of it like:
"I’m a heavier component with more features like internal memory (state) and lifecycle awareness."

### Syntax of React Class Component

```tsx
import React, { Component } from 'react';

// Define the type for props
type Props = {
  name: string;
};

// Define the type for state
type State = {
  count: number;
};

// Class component using props and state
class Counter extends Component<Props, State> {
  // Initialize state
  state: State = {
    count: 0,
  };

  render() {
    return (
      <div>
        {/* Access props using this.props */}
        <p>Hello, {this.props.name}</p>
        
        {/* Access state using this.state */}
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
```

---

### Example of React Class Component

```tsx
import React from 'react';

// Define props type
type GreetProps = {
  person: string;
};

// Define state type
type GreetState = {
  greeted: boolean;
};

// Class component with props and state
class Greet extends React.Component<GreetProps, GreetState> {
  // Initialize state
  state = {
    greeted: false,
  };

  render() {
    return (
      <div>
        {/* Conditionally render based on state */}
        {this.state.greeted
          ? `Hi again, ${this.props.person}!`
          : `Hello, ${this.props.person}!`}
      </div>
    );
  }
}

export default Greet;
```

---

### Key Differences

| Feature            | Functional Component        | Class Component                      |
| ------------------ | --------------------------- | ------------------------------------ |
| Syntax             | Function                    | Class with `extends React.Component` |
| Hooks Support      | Yes (useState, useEffect) | No (uses `this.state`)             |
| Boilerplate        | Less                        | More                                 |
| Preferred in React | Yes                       | Less commonly used now             |

---

* Functional = Simple functions, use hooks for state and side effects

* Class = Uses this.state, this.props, and lifecycle methods like componentDidMount

---

## **SVELTE - Class Components**

* **Svelte does not have class components** — it's always functional-style.
* Instead of `this.state` or `useState`, you simply declare `let count = 0` — and it's **automatically reactive**.
* No `this`, no JSX, and no `useEffect` or lifecycle clutter — Svelte uses `onMount()` and `beforeUpdate()` if needed.
