---
sidebar_position: 8
---

# Modules

## **REACT**

### Definition

**ES6 Modules** allow you to **split code into separate files** and use `import`/`export` to share
functionality between them.

> This improves code organization, reusability, and maintainability — especially in large React apps.

---

### Syntax

### Exporting from a file

```ts
// utils.ts
export const add = (a: number, b: number): number => a + b;

export const greet = (name: string): string => `Hello, ${name}`;
```

### Importing in another file

```ts
// App.tsx
import { add, greet } from './utils';

console.log(add(3, 4)); // 7
console.log(greet("NBT")); // Hello, NBT
```

### Default Export

```ts
// math.ts
const subtract = (a: number, b: number): number => a - b;
export default subtract;
```

```ts
// App.tsx
import subtract from './math';
console.log(subtract(10, 5)); // 5
```

---

### Example (Shared Component)

#### Exporting a Button component

```tsx
// components/MyButton.tsx
import React from 'react';

type Props = {
  label: string;
  onClick: () => void;
};

export const MyButton = ({ label, onClick }).Props => {
  return <button onClick={onClick}>{label}</button>;
};
```

#### Importing and Using It

```tsx
// App.tsx
import React from 'react';
import { MyButton } from './components/MyButton';

const App= () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Using ES6 Modules in React</h1>
      <MyButton label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
```

---

### Example Explanation

* `export` makes functions/components available outside their file.
* `import` brings them into another file for use.
* Use **named exports** for multiple exports, and **default export** when exporting one main thing.
* ES6 modules work natively with TypeScript and React.

---

## **SVELTE**

## Modules (`import` / `export`)

### Definition of Svelte Modules

**ES6 Modules** let you organize your Svelte code by splitting logic, data, or components into
multiple files and sharing them using `import` / `export`.

> Modules make your app more organized and scalable.

---

### Syntax (Exports & Imports)

```ts
// utils.ts
export const add = (a: number, b: number): number => a + b;
export const greet = (name: string): string => `Hello, ${name}`;

// math.ts (Default export)
const subtract = (a: number, b: number): number => a - b;
export default subtract;
```

```svelte
<!-- App.svelte -->
<script lang="ts">
  import { add, greet } from './utils';
  import subtract from './math';
</script>
```

---

### Example (Using Functions in Svelte)

```svelte
<!-- App.svelte -->
<script lang="ts">
  import { add, greet } from './utils';
  import subtract from './math';

  const result = add(3, 4);        // 7
  const message = greet("NBT"); // Hello, NBT
  const diff = subtract(10, 5);    // 5
</script>

<h2>{message}</h2>
<p>3 + 4 = {result}</p>
<p>10 - 5 = {diff}</p>
```

---

### Sharing Components in Svelte

### Syntax (Component Export/Import)

```svelte
<!-- components/MyButton.svelte -->
<script lang="ts">
  export let label: string;
  export let onClick: () => void;
</script>

<button on:click={onClick}>{label}</button>
```

```svelte
<!-- App.svelte -->
<script lang="ts">
  import MyButton from './components/MyButton.svelte';
</script>
```

---

### Example(Component Usage)

```svelte
<!-- App.svelte -->
<script lang="ts">
  import MyButton from './components/MyButton.svelte';

  function handleClick() {
    alert("Button clicked!");
  }
</script>

<h1>Using Modules in Svelte</h1>
<MyButton label="Click Me" onClick={handleClick} />
```

---
