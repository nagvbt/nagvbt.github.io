---
sidebar_position: 9
---
# Ternary Operator & RenderHTML

## Ternary Operator Definition

## **REACT**

The **Ternary Operator** is a short-hand `if-else` statement.
It evaluates a condition and returns one value if `true` and another if `false`.

---

### Syntax

```ts
condition ? valueIfTrue : valueIfFalse;
```

---

### Example

```tsx
// File: Greeting.tsx
import React from 'react';

type GreetingProps = {
  isLoggedIn: boolean;
  username: string;
};

const Greeting= ({ isLoggedIn, username }).GreetingProps => {
  return (
    <div>
      <h2>
        {isLoggedIn ? `Welcome, ${username}!` : "Please log in."}
      </h2>
    </div>
  );
};

export default Greeting;
```

---

### Usage in `App.tsx`

```tsx
// File: App.tsx
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  const userLoggedIn = true;
  const name = "NBT";

  return (
    <div>
      <Greeting isLoggedIn={userLoggedIn} username={name} />
    </div>
  );
};

export default App;
```

---

### Short Explanation

* `isLoggedIn ? ... : ...` is a **ternary condition**.
* If `isLoggedIn` is `true`, it shows `"Welcome, NBT!"`.
* If `false`, it shows `"Please log in."`.
* Ternary is useful for quick decisions inside JSX.

---

## **SVELTE**

### Syntax of Ternary Operaor in Svelte

```ts
condition ? valueIfTrue : valueIfFalse
```

In Svelte (inside markup):

```svelte
{condition ? 'Yes' : 'No'}
```

---

### Example of Ternary Operaor in Svelte

```svelte
<!-- File: Greeting.svelte -->
<script lang="ts">
  export let isLoggedIn: boolean;
  export let username: string;
</script>

<h2>{isLoggedIn ? `Welcome, ${username}!` : 'Please log in.'}</h2>
```

```svelte
<!-- File: App.svelte -->
<script lang="ts">
  import Greeting from './Greeting.svelte';

  let userLoggedIn = true;
  let name = "NBT";
</script>

<Greeting isLoggedIn={userLoggedIn} username={name} />
```

---

### Explanation

* `{isLoggedIn ? ... : ...}` works exactly like in React JSX.
* The **ternary operator** checks a condition and chooses which text to display.
* Ideal for small conditional logic inside markup.

## **REACT** - Render HTML

### Definition of Render HTML

In React, HTML is rendered using **JSX (JavaScript XML)** — a syntax that allows us to write
HTML-like code inside JavaScript/TypeScript.
React components return JSX to display UI on the browser.

---

### Syntax of Render HTML

```tsx
// A basic React component rendering HTML
const ComponentName: React.FC = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
};
```

---

### Example of Render HTML

```tsx
// File: RenderHTMLExample.tsx
import React from 'react';

const RenderHTMLExample: React.FC = () => {
  const title: string = "Welcome to React!";
  const description: string = "This is rendered using JSX in TypeScript.";

  return (
    <div>
      <h1>{title}</h1> {/* Rendering a variable inside HTML */}
      <p>{description}</p> {/* You can also insert JS/TS values using {} */}
      <ul>
        <li>Reusable Components</li>
        <li>Typed Props & State</li>
        <li>JSX Syntax</li>
      </ul>
    </div>
  );
};

export default RenderHTMLExample;
```

---

### Explanation of the above example

* React uses **JSX** to render HTML inside components.
* You can use **TypeScript variables** inside `{}` to display dynamic content.
* JSX looks like HTML but compiles to `React.createElement()` under the hood.
* Use `return (...)` inside a component to show UI.

---

## **SVELTE - Render HTML**

### Definition of Render HTML in Svelte

In **Svelte**, HTML is written **directly inside the `.svelte` component**, without JSX.
You can insert **JavaScript or TypeScript variables** inside `{}` to display dynamic content —
similar to JSX in React.

---

### Syntax of Render HTML in Svelte

```svelte
<!-- A basic Svelte component rendering HTML -->
<script lang="ts">
  let title: string = "Title";
  let description: string = "Description";
</script>

<div>
  <h1>{title}</h1>
  <p>{description}</p>
</div>
```

---

### Example of Render HTML in Svelte

```svelte
<!-- File: RenderHTMLExample.svelte -->
<script lang="ts">
  let title: string = "Welcome to Svelte!";
  let description: string = "This is rendered using native HTML in a Svelte component.";
</script>

<div>
  <h1>{title}</h1> <!-- Rendering a variable -->
  <p>{description}</p>

  <ul>
    <li>Reactive Statements</li>
    <li>Simple Syntax</li>
    <li>TypeScript Support</li>
  </ul>
</div>
```

---

### Explanation of the above Example

* No JSX is needed — just regular HTML with embedded `{}` for dynamic values.
* Variables declared in the `<script>` block can be used directly in the markup.
* Svelte compiles this to highly optimized vanilla JS at build time.
