---
sidebar_position: 14
---
# Lists

## **React**

### Definition

React Lists allow you to render a set of similar components or elements by looping through an array
using `.map()`.

---

### Syntax

```ts
items.map((item, index) => (
  <Component key={index} prop={item} />
));
````

### Example

```tsx
// App.tsx
import React, { FC } from 'react';
import Item from './Item';

const App: FC = () => {
  const fruits: string[] = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <Item key={index} name={fruit} />
        ))}
      </ul>
    </div>
  );
};

export default App;
```

```tsx
// Item.tsx
import React, { FC } from 'react';

interface Props {
  name: string;
}

const Item: FC<Props> = ({ name }) => <li>{name}</li>;

export default Item;
```

---

## **Svelte**

### Definition-Lists

Svelte Lists allow you to render a set of similar elements or components using `{#each}` blocks,
similar to `.map()` in React.

---

### Syntax Overview

```svelte
{#each items as item, index}
  <Component {item} />
{/each}
````

---

### Example-Lists

```svelte
<!-- App.svelte -->
<script lang="ts">
  import Item from './Item.svelte';
  const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
</script>

<h1>Fruit List</h1>
<ul>
  {#each fruits as fruit, index (index)}
    <Item name={fruit} />
  {/each}
</ul>
```

```svelte
<!-- Item.svelte -->
<script lang="ts">
  export let name: string;
</script>

<li>{name}</li>
```

---
