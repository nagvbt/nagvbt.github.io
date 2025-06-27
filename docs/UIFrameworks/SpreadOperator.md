---
sidebar_position: 7
---

# Spread Operator

## **REACT**

### Definition

The **spread operator (`...`)** allows you to "spread" or copy the contents of an array or object
into a new one.

> It's useful for copying, merging, or updating arrays/objects without mutating the original.

---

### Syntax

### Spread in Arrays

```ts
const nums1: number[] = [1, 2, 3];
const nums2: number[] = [4, 5];

// Combine arrays
const allNums = [...nums1, ...nums2]; // [1, 2, 3, 4, 5]
```

### Spread in Objects

```ts
const user = { name: "Alice", age: 25 };

// Clone and update object
const updatedUser = { ...user, age: 26 }; // { name: "Alice", age: 26 }
```

---

### Example Using Spread Operator

```tsx
// File: TodoList.tsx
import React, { useState } from 'react';

type Todo = {
  id: number;
  task: string;
};

const TodoList  = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice TypeScript" }
  ]);

  // Add a new todo using spread
  const addTodo = () => {
    const newTodo: Todo = { id: 3, task: "Build a project" };
    setTodos([...todos, newTodo]); // Keep old todos and add new one
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
```

---

### Example Explanation

* `setTodos([...todos, newTodo])`:
  Creates a **new array** that includes all old todos (`...todos`) plus the new one.

* This is a **non-mutating** way to update state in React.

---

## **SVELTE**

### Definition of Spread Operator in Svelte

The **spread operator** is used in **JavaScript** and works the same in Svelte.
It helps you **copy**, **merge**, or **update** arrays and objects without changing the original.

---

### Syntax of Spread Operator in Svelte

### Spread operator in Arrays

```ts
const nums1 = [1, 2, 3];
const nums2 = [4, 5];

const allNums = [...nums1, ...nums2]; // [1, 2, 3, 4, 5]
```

### Spread operator in Objects

```ts
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 }; // { name: "Alice", age: 26 }
```

---

### Svelte Example Using Spread Operator

```svelte
<!-- File: TodoList.svelte -->
<script lang="ts">
  type Todo = {
    id: number;
    task: string;
  };

  let todos: Todo[] = [
    { id: 1, task: "Learn Svelte" },
    { id: 2, task: "Practice TypeScript" }
  ];

  function addTodo() {
    const newTodo: Todo = { id: 3, task: "Build a Svelte App" };
    todos = [...todos, newTodo]; // Use spread to add new item
  }
</script>

<h2>Todo List</h2>
<ul>
  {#each todos as todo (todo.id)}
    <li>{todo.task}</li>
  {/each}
</ul>
<button on:click={addTodo}>Add Todo</button>
```

---

### Short Explanation of the above example

* `todos = [...todos, newTodo]`:

  * Creates a **new array** with all previous todos plus the new one.
  * This is **reactive in Svelte** — the UI updates automatically.

---

### Key Notes in Svelte

| Feature          | React                           | Svelte                             |
| ---------------- | ------------------------------- | ---------------------------------- |
| State update     | `useState()` with `setState`    | Just reassign the variable         |
| Spread in array  | `setTodos([...todos, newTodo])` | `todos = [...todos, newTodo]`      |
| Spread in object | `{ ...obj, key: newValue }`     | Same — `{ ...obj, key: newValue }` |

---

### Spread Attributes (HTML)

Svelte **also supports spread attributes** in HTML (like in React):

```svelte
<script>
  let props = { id: 'btn1', class: 'primary', disabled: false };
</script>

<button {...props}>Click Me</button>
```

---

### Summary

* The **spread operator** works **identically** in Svelte as in JavaScript/React.
* Useful for **non-mutating updates** to arrays/objects.
* Works seamlessly with **Svelte reactivity**.
