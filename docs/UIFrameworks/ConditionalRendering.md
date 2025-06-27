---
sidebar_position: 13
---

# Conditional Rendering

## **React**

### Definition

Conditional rendering in React means showing or hiding UI components based on a condition
(like a boolean or value).

---

### Syntax

#### 1. if-else

```ts
if (condition) {
  return <ComponentA />;
} else {
  return <ComponentB />;
}
```

#### 2. Ternary Operator

```ts
condition ? <ComponentA /> : <ComponentB />;
```

#### 3. Logical AND (&&)

```ts
condition && <ComponentA />;
```

#### 4. Switch Statement

```ts
switch (value) {
  case 'one':
    return <Component1 />;
  default:
    return <DefaultComponent />;
}
```

---

### Example: Simple App using all conditionals

```tsx
// App.tsx
import React, { useState } from 'react';
import Greeting from './Greeting';
import LoginStatus from './LoginStatus';
import RoleMessage from './RoleMessage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [role, setRole] = useState<'user' | 'admin' | 'guest'>('user'); // user | admin | guest

  return (
    <div>
      <h1>React Conditionals Demo</h1>

      {/* IF-ELSE inside Greeting */}
      <Greeting isLoggedIn={isLoggedIn} />

      {/* TERNARY inside LoginStatus */}
      <LoginStatus isLoggedIn={isLoggedIn} />

      {/* SWITCH inside RoleMessage */}
      <RoleMessage role={role} />

      {/* && condition inside App */}
      {isLoggedIn && <p>Welcome back!</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <br />
      <select
        onChange={(e) => setRole(e.target.value as 'admin' | 'user' | 'guest')}
        value={role}
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </select>
    </div>
  );
};

export default App;
```

```tsx
// Greeting.tsx (if-else)
import React from 'react';

interface Props {
  isLoggedIn: boolean;
}

const Greeting: React.FC<Props> = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h2>Hello, User!</h2>;
  } else {
    return <h2>Please sign in.</h2>;
  }
};

export default Greeting;
```

```tsx
// LoginStatus.tsx (ternary)
import React from 'react';

interface Props {
  isLoggedIn: boolean;
}

const LoginStatus: React.FC<Props> = ({ isLoggedIn }) => (
  <p>Status: {isLoggedIn ? 'Logged In ✅' : 'Logged Out ❌'}</p>
);

export default LoginStatus;
```

```tsx
// RoleMessage.tsx (switch)
import React from 'react';

interface Props {
  role: 'admin' | 'user' | 'guest';
}

const RoleMessage: React.FC<Props> = ({ role }) => {
  switch (role) {
    case 'admin':
      return <p>You are an admin 👑</p>;
    case 'user':
      return <p>Welcome, regular user 👤</p>;
    case 'guest':
      return <p>Browsing as guest 👥</p>;
    default:
      return <p>Unknown role</p>;
  }
};

export default RoleMessage;
```

---

## **Svelte**

### Definition-Conditional rendering

Conditional rendering in Svelte means showing or hiding parts of the UI based on conditions like
booleans or values using special templating syntax.

---

### Syntax Overview

#### 1.if-else

```svelte
{#if condition}
  <ComponentA />
{:else}
  <ComponentB />
{/if}
````

#### 2. Ternary Operator (in attributes or expressions only)

```svelte
<p>{condition ? 'Yes' : 'No'}</p>
```

#### 3. Logical AND (only in expressions)

```svelte
{condition && <ComponentA />}
```

#### 4.Switch Statement

```svelte
{#if value === 'one'}
  <Component1 />
{:else}
  <DefaultComponent />
{/if}
```

> Note: Svelte doesn't have built-in switch syntax; use chained `if`/`else if` blocks.

---

### Example:Simple App using all conditionals

```svelte
<!-- App.svelte -->
<script lang="ts">
  import Greeting from './Greeting.svelte';
  import LoginStatus from './LoginStatus.svelte';
  import RoleMessage from './RoleMessage.svelte';

  let isLoggedIn: boolean = false;
  let role: 'user' | 'admin' | 'guest' = 'user';
</script>

<h1>Svelte Conditionals Demo</h1>

<!-- IF-ELSE inside Greeting -->
<Greeting {isLoggedIn} />

<!-- TERNARY inside LoginStatus -->
<LoginStatus {isLoggedIn} />

<!-- SWITCH (if-else chain) inside RoleMessage -->
<RoleMessage {role} />

<!-- && condition inside App -->
{#if isLoggedIn}
  <p>Welcome back!</p>
{/if}

<button on:click={() => (isLoggedIn = !isLoggedIn)}>
  {isLoggedIn ? 'Logout' : 'Login'}
</button>

<br />

<select bind:value={role}>
  <option value="admin">Admin</option>
  <option value="user">User</option>
  <option value="guest">Guest</option>
</select>
```

```svelte
<!-- Greeting.svelte -->
<script lang="ts">
  export let isLoggedIn: boolean;
</script>

{#if isLoggedIn}
  <h2>Hello, User!</h2>
{:else}
  <h2>Please sign in.</h2>
{/if}
```

```svelte
<!-- LoginStatus.svelte -->
<script lang="ts">
  export let isLoggedIn: boolean;
</script>

<p>Status: {isLoggedIn ? 'Logged In ✅' : 'Logged Out ❌'}</p>
```

```svelte
<!-- RoleMessage.svelte -->
<script lang="ts">
  export let role: 'admin' | 'user' | 'guest';
</script>

{#if role === 'admin'}
  <p>You are an admin 👑</p>
{:else if role === 'user'}
  <p>Welcome, regular user 👤</p>
{:else if role === 'guest'}
  <p>Browsing as guest 👥</p>
{:else}
  <p>Unknown role</p>
{/if}
```

---
