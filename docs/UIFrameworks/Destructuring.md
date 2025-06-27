---
sidebar_position: 6
---

# Destructuring

## **REACT**

### Definition

**Destructuring** is a convenient ES6 feature that lets you extract values from **objects** or
**arrays** and assign them to variables in a cleaner way.

---

### Syntax

### Object Destructuring

```ts
const user = { name: "Alice", age: 25 };

// Traditional way
const name1 = user.name;
const age1 = user.age;

// Using destructuring
const { name, age } = user;
```

### Array Destructuring

```ts
const nums: number[] = [10, 20, 30];

// Traditional way
const first = nums[0];
const second = nums[1];

// Using destructuring
const [a, b] = nums;
```

---

### Example(Functional Component)

```tsx
// File: Profile.tsx
import React from 'react';

// Props type definition
type ProfileProps = {
  name: string;
  age: number;
  location: string;
};

const Profile = (props).ProfileProps => {
  // Destructuring props inside the component
  const { name, age, location } = props;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default Profile;
```

---

### Example (Destructuring in Parameters)

```tsx
// Cleaner: destructure directly in function parameters
const Profile = ({ name, age, location }).ProfileProps => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};
```

---

### Example Explanation

* `type ProfileProps` defines the props expected by the component.
* `{ name, age, location } = props` extracts values from `props` directly.
* This makes code cleaner, especially when you use many props or array values.

---

## **SVELTE**

### Definition of Destructing in Svelte

Destructuring in Svelte works the **same way as in JavaScript/TypeScript**, since Svelte compiles to
plain JS.
However, **props are not passed as a single object**, so we don’t destructure `props` like in React.

---

### Syntax: Object & Array Destructuring (Same as JS)

### Object Destructuring in Svelte

```ts
const user = { name: "Alice", age: 25 };

// Traditional
const name1 = user.name;
const age1 = user.age;

// Destructured
const { name, age } = user;
```

### Array Destructuring in Svelte

```ts
const nums = [100, 200, 300];

// Traditional
const first = nums[0];
const second = nums[1];

// Destructured
const [x, y] = nums;
```

---

### Svelte Example: Destructuring Props & State

```svelte
<!-- File: Profile.svelte -->
<script lang="ts">
  // Receiving props individually
  export let name: string;
  export let age: number;
  export let location: string;

  // You can still use destructuring on custom objects/arrays
  const user = { name, age, location };
  const { name: n, age: a, location: l } = user;

  const numbers = [10, 20, 30];
  const [first, second] = numbers;
</script>

<!-- Display original props -->
<h2>User Profile</h2>
<p>Name: {name}</p>
<p>Age: {age}</p>
<p>Location: {location}</p>

<!-- Display destructured variables -->
<h3>Destructured Output</h3>
<p>{n} - {a} - {l}</p>
<p>Numbers: {first}, {second}</p>
```

---

## Key Differences from React

| Feature                    | React                       | Svelte                             |
| -------------------------- | --------------------------- | ---------------------------------- |
| Props Access               | Via `props` or `{...props}` | Each prop is `export let`          |
| Destructuring Props        | Destructure `props` object  | Not needed — use each `export let` |
| Local Object Destructuring | Same in both              | Same in both                     |

---

### Summary

* Use `export let` in Svelte for props — no need to destructure `props` like in React.
* Use normal JS destructuring for arrays/objects inside `<script>`.
* Destructuring makes your Svelte code **cleaner and easier to read** just like in React.
