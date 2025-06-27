---
sidebar_position: 5
---

# Array Methods

## **React**

### Definition of React Array Methods

ES6 introduced powerful and clean **array methods** like:

* `map()` – Transform each item in an array
* `filter()` – Keep items that match a condition
* `find()` – Get the first item that matches
* `forEach()` – Loop through items (no return)
* `reduce()` – Combine all values into one

These are commonly used in React for rendering lists, filtering data, etc.

---

### Syntax of Array Methods in React

```ts
const numbers: number[] = [1, 2, 3, 4, 5];

// map: double each number
const doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]

// filter: keep even numbers
const evens = numbers.filter((num) => num % 2 === 0); // [2, 4]

// find: find first number greater than 3
const greaterThanThree = numbers.find((num) => num > 3); // 4

// forEach: log each number
numbers.forEach((num) => console.log(num)); // Logs 1 to 5

// reduce: sum of all numbers
const total = numbers.reduce((sum, num) => sum + num, 0); // 15
```

---

### Example of Array Methods in React

```tsx
// File: UserList.tsx
import React from 'react';

// Define the user type
type User = {
  id: number;
  name: string;
  active: boolean;
};

// Sample user data
const users: User[] = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
];

const UserList = () => {
  // Use filter to get only active users
  const activeUsers = users.filter((user) => user.active);

  return (
    <div>
      <h2>Active Users</h2>

      {/* map to render each user */}
      <ul>
        {activeUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

---

### Example Explanation

* `users` is an array of user objects.
* `filter()` creates a new array with only `active: true` users.
* `map()` is used to render the filtered users in a list.
* TypeScript ensures each user has `id`, `name`, and `active`.

---

## **Svelte**

### Definition of Svelte Array Methods

Modern JavaScript array methods like `map()`, `filter()`, `find()`, etc. work **natively in Svelte**.

> You can directly use them inside the `<script>` tag and render results in markup.

---

### Syntax of Array Methods in Svelte

```ts
const numbers: number[] = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);       // [2, 4, 6, 8, 10]
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]
const firstBig = numbers.find((n) => n > 3);       // 4
numbers.forEach((n) => console.log(n));           // logs 1 to 5
const total = numbers.reduce((sum, n) => sum + n, 0); // 15
```

---

### Example of Array Methods in Svelte

```svelte
<!-- File: UserList.svelte -->
<script lang="ts">
  // Define user type
  type User = {
    id: number;
    name: string;
    active: boolean;
  };

  // Sample data
  const users: User[] = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
  ];

  // Use filter + map
  const activeUsers = users.filter(user => user.active);
</script>

<!-- UI -->
<h2>Active Users</h2>
<ul>
  {#each activeUsers as user (user.id)}
    <li>{user.name}</li>
  {/each}
</ul>
```

---

### Explanation

* `users` is an array of user objects.
* `filter()` creates a new array of active users.
* `#each` is Svelte’s version of `map()` for rendering lists.
* `(user.id)` adds a unique key to optimize rendering.

---
