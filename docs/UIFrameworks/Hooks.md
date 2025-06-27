---
sidebar_position: 20
---
# Hooks

## **React**

### What is a Hook?

Hooks are special functions that let you “hook into” React features like **state**, **lifecycle**,
and **context** in functional components. They avoid the need for class components.

#### Hooks Covered

#### 1. `useState`

* **Definition**: Lets you add state to functional components.
* **Syntax**:

  ```ts
  const [state, setState] = useState<type>(initialValue);
  ```

#### 2. `useEffect`

* **Definition**: Lets you perform side effects like fetching data, timers, or DOM updates.
* **Syntax**:

  ```ts
  useEffect(() => {
    // effect logic
    return () => {
      // optional cleanup
    };
  }, [dependencies]);
  ```

#### 3. `useContext`

* **Definition**: Lets you share data (like theme, user) globally without prop drilling.
* **Syntax**:

  ```ts
  const value = useContext(MyContext);
  ```

---

### Example: App with `useState`, `useEffect`, `useContext`

```tsx
// App.tsx
import React, { useState, useEffect, createContext } from 'react';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

interface UserContextType {
  username: string;
}

export const UserContext = createContext<UserContextType>({ username: 'Guest' });

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('NBT');

  useEffect(() => {
    console.log('App Mounted');
  }, []);

  return (
    <UserContext.Provider value={{ username }}>
      <div style={{ padding: '2rem' }}>
        <h1>React Hooks Demo</h1>
        <UserProfile />
        <Counter />
      </div>
    </UserContext.Provider>
  );
};

export default App;
```

```tsx
// components/UserProfile.tsx
import React, { useContext } from 'react';
import { UserContext } from '../App';

const UserProfile: React.FC = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username from Context: <strong>{username}</strong></p>
    </div>
  );
};

export default UserProfile;
```

```tsx
// components/Counter.tsx
import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

---

## **Svelte**

### What is a Store and Reactive Statement?

In Svelte, instead of Hooks, you use:

* **Reactive statements (`$:`)**: like `useEffect`, auto-runs when dependencies change.
* **Local state**: variables inside `<script>` (no `useState` needed).
* **Context API**: similar to `useContext` using `setContext` and `getContext`.
* **Writable stores**: shared state across components.

---

#### Svelte Equivalents

#### 1. Local State (Like `useState`)

```svelte
<script>
  let count = 0;
</script>

<button on:click={() => count++}>Increment</button>
````

#### 2. Reactive Statement (Like `useEffect`)

```svelte
<script>
  let count = 0;

  $: document.title = `Count: ${count}`;
</script>
```

#### 3. Context API (Like `useContext`)

* `setContext`: Provide a value
* `getContext`: Access the provided value

---

### Example: App with Local State, Reactive Effects, and Context

#### Folder Structure

```svelte
src/
├── routes/
│   ├── +page.svelte          → Main App
│   ├── components/
│   │   ├── Counter.svelte
│   │   └── UserProfile.svelte
│   └── context.ts
```

---

```ts
// context.ts
import { setContext, getContext } from 'svelte';
import { writable } from 'svelte/store';

export const USER_CONTEXT = Symbol();

export function initUserContext(username: string) {
  const user = writable({ username });
  setContext(USER_CONTEXT, user);
}

export function useUserContext() {
  return getContext(USER_CONTEXT);
}
```

---

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import Counter from './components/Counter.svelte';
  import UserProfile from './components/UserProfile.svelte';
  import { initUserContext } from './context';

  initUserContext('NBT');
</script>

<div style="padding: 2rem">
  <h1>Svelte Reactivity + Context Demo</h1>
  <UserProfile />
  <Counter />
</div>
```

---

```svelte
<!-- components/UserProfile.svelte -->
<script lang="ts">
  import { useUserContext } from '../context';
  import { derived } from 'svelte/store';

  const userStore = useUserContext();
  const username = derived(userStore, $u => $u.username);
</script>

<h2>User Profile</h2>
<p>Username from Context: <strong>{$username}</strong></p>
```

---

```svelte
<!-- components/Counter.svelte -->
<script lang="ts">
  let count = 0;

  $: document.title = `Count: ${count}`;
</script>

<h2>Counter</h2>
<p>Current count: {count}</p>
<button on:click={() => count++}>Increment</button>
```

---

> In Svelte, you don’t need `useState` or `useEffect`. State is just variables, and reactive logic
uses `$:`.
---
