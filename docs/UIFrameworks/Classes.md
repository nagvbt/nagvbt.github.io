---
sidebar_position: 2
---
# ES6 Classes

## Definition of Class

**ES6 Classes** are a way to create objects and work with **inheritance** in JavaScript
(and TypeScript), introduced in ECMAScript 2015 (ES6).

## **React**

In **React**, class components are built using ES6 classes by extending `React.Component`.
These classes have **constructor functions**, **state**, and **lifecycle methods**.

> TypeScript enhances ES6 classes by allowing you to add **types** to props, state, and methods for
better code safety.

---

### Syntax

```tsx
// Import React and Component
import React, { Component } from 'react';

// Define the props type
type MyProps = {
  name: string;
};

// Define the state type
type MyState = {
  count: number;
};

// Create a class component using TypeScript
class MyComponent extends Component<MyProps, MyState> {
  // Initialize state
  state: MyState = {
    count: 0,
  };

  // Class method to handle click
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns JSX
  render() {
    return (
      <div>
        <h2>Hello, {this.props.name}!</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

export default MyComponent;
```

---

### Example

```tsx
// File: Counter.tsx
import React, { Component } from 'react';

// Define the props type
type CounterProps = {
  title: string; // The title to display
};

// Define the state type
type CounterState = {
  count: number; // Counter state
};

// Create a class-based React component
class Counter extends Component<CounterProps, CounterState> {
  // Initialize state
  state: CounterState = {
    count: 0,
  };

  // Method to increment the count
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Method to decrement the count
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Render method returns JSX
  render() {
    return (
      <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
        {/* Display title from props */}
        <h3>{this.props.title}</h3>

        {/* Display current count from state */}
        <p>Count: {this.state.count}</p>

        {/* Buttons to update the state */}
        <button onClick={this.handleIncrement}>➕ Increment</button>
        <button onClick={this.handleDecrement} style={{ marginLeft: "0.5rem" }}>
          ➖ Decrement
        </button>
      </div>
    );
  }
}

export default Counter;


// File: App.tsx
import React from 'react';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div>
      <h1>React ES6 Class Component with TypeScript</h1>
      <Counter title="My Counter" />
    </div>
  );
};

export default App;
```

---

Perfect! Based on your reference, here’s the **🧪 Example Explanation** for the ES6 class component
we discussed:

---

### Example Explanation

* `type CounterProps` defines what props the component expects (in this case, a `title` of type `string`).

* `type CounterState` defines the internal state used by the component (in this case, a `count` of
type `number`).

* `class Counter` is a **React class component** that extends `React.Component` and uses the above
types for `props` and `state`.

* `state = { count: 0 }` initializes the local state with a count of 0.

* `handleIncrement` and `handleDecrement` are **arrow functions** that update the count using `this.setState()`.

* `this.props.title` accesses the value passed from the parent component as a prop.

* `this.state.count` accesses the component’s current count value.

* `render()` returns the **JSX UI**, which displays the title, the count, and the two buttons.

* When a button is clicked, `this.setState()` updates the state, which automatically re-renders the
component with the new count.

---

## **Svelte**

### Definition of Svelte components

In **Svelte**, we don’t use classes for components. Instead, Svelte uses a
**simple script + markup** approach, making it lightweight and easy to read.

* Props are defined using `export let`.
* State is managed using **reactive variables**.
* No need for `this`, `constructor`, or lifecycle methods in most cases.
* **Reactivity** is automatic when values change.

---

### Syntax (Props + Reactive State + Event Handling)

```svelte
<!-- Counter.svelte -->
<script lang="ts">
  // Accept a prop from parent
  export let title: string;

  // Reactive variable (like state)
  let count: number = 0;

  // Function to increase count
  const increment = () => {
    count += 1; // Automatically updates UI
  };

  // Function to decrease count
  const decrement = () => {
    count -= 1;
  };
</script>

<!-- Template to render the UI -->
<div style="border: 1px solid #ccc; padding: 1rem; width: 200px;">
  <h3>{title}</h3> <!-- Displaying prop -->
  <p>Count: {count}</p> <!-- Reactive display -->

  <!-- Click events -->
  <button on:click={increment}>➕ Increment</button>
  <button on:click={decrement} style="margin-left: 0.5rem;">➖ Decrement</button>
</div>
```

---

### Example Usage (Parent Component)

```svelte
<!-- App.svelte -->
<script lang="ts">
  // Import the child component
  import Counter from './Counter.svelte';
</script>

<!-- Use the Counter component and pass a prop -->
<main>
  <h1>Svelte Counter Example</h1>
  <Counter title="My Counter" />
</main>
```

---
