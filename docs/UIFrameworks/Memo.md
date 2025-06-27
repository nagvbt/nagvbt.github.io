---
sidebar_position: 17
---
# Memo

## **React**

### Definition

`React.memo` is a **Higher Order Component (HOC)** that prevents **unnecessary re-renders** of a
component by memoizing it. If the component receives the **same props**, it **skips rendering**
and uses the previously rendered result — improving performance.

---

### Syntax

```tsx
const MemoizedComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});
```

---

### Example: Using `React.memo` to avoid unnecessary renders

```tsx
// App.tsx
import React, { useState } from 'react';
import Counter from './Counter';
import Display from './Display';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('NBT');

  return (
    <div>
      <h1>React.memo Example</h1>
      <Counter count={count} />
      <Display name={name} />

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setName(name === 'NBT' ? 'Mr.NBT' : 'NBT')}>Toggle Name</button>
    </div>
  );
};

export default App;
```

```tsx
// Counter.tsx
import React from 'react';

type Props = {
  count: number;
};

const Counter: React.FC<Props> = React.memo(({ count }) => {
  console.log('Rendering Counter...');
  return <p>Count: {count}</p>;
});

export default Counter;
```

```tsx
// Display.tsx
import React from 'react';

type Props = {
  name: string;
};

const Display: React.FC<Props> = React.memo(({ name }) => {
  console.log('Rendering Display...');
  return <p>Name: {name}</p>;
});

export default Display;
```

---

#### Note

* When you click **Toggle Name**, only `Display` re-renders.
* When you click **Increment Count**, only `Counter` re-renders.
* This shows how `React.memo` helps optimize performance by skipping re-renders if props haven’t changed.

## **Svelte**

### Definition-Memo

In **Svelte**, components automatically **avoid unnecessary re-renders** when props don’t change —
similar to what `React.memo` achieves. No need for explicit memoization like in React.

---

### Svelte Advantage

* No need for `memo()`.
* Reactive assignments optimize rendering.
* Components update **only** when reactive values change.

---

### Example: Svelte version of React.memo demo

```svelte

src/
├── routes/
│   ├── +page.svelte        → App (main logic)
│   ├── Counter.svelte      → Tracks `count`
│   └── Display.svelte      → Tracks `name`

````

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import Counter from './Counter.svelte';
  import Display from './Display.svelte';

  let count: number = 0;
  let name: string = 'NBT';

  const increment = () => count += 1;
  const toggleName = () => name = name === 'NBT' ? 'MrNBT' : 'NBT';
</script>

<h1>Svelte Memo-like Behavior</h1>

<Counter {count} />
<Display {name} />

<button on:click={increment}>Increment Count</button>
<button on:click={toggleName}>Toggle Name</button>
````

```svelte
<!-- Counter.svelte -->
<script lang="ts">
  export let count: number;

  console.log('Rendering Counter...');
</script>

<p>Count: {count}</p>
```

```svelte
<!-- Display.svelte -->
<script lang="ts">
  export let name: string;

  console.log('Rendering Display...');
</script>

<p>Name: {name}</p>

```

---

#### note

* When you click **Toggle Name**, only `Display.svelte` logs a re-render.
* When you click **Increment Count**, only `Counter.svelte` logs a re-render.
* This shows how **Svelte’s reactivity system is already optimized** — no extra memoization needed.
