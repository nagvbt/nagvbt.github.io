---
sidebar_position: 15
---
# Forms

## **React**

### Definition

In React, **forms** are used to collect user input. React supports both **controlled** and
**uncontrolled** forms:

* **Controlled Form**: Form data is handled by React state.
* **Uncontrolled Form**: Form data is handled by the DOM using refs.

---

### Syntax

#### Controlled Form

```tsx
const [value, setValue] = useState<string>('');
<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
```

#### Uncontrolled Form

```tsx
const inputRef = useRef<HTMLInputElement>(null);
<input type="text" ref={inputRef} />
```

---

### Example: Controlled Form with Multiple Inputs

```tsx
// App.tsx
import React, { useState, FC, ChangeEvent } from 'react';
import FormInput from './FormInput';
import FormDisplay from './FormDisplay';

const App: FC = () => {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>React Forms Example</h1>
      <FormInput formData={formData} onChange={handleChange} />
      <FormDisplay formData={formData} />
    </div>
  );
};

export default App;
```

```tsx
// FormInput.tsx
import React, { FC, ChangeEvent } from 'react';

interface Props {
  formData: {
    name: string;
    email: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<Props> = ({ formData, onChange }) => (
  <form>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={onChange}
      placeholder="Name"
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={onChange}
      placeholder="Email"
    />
  </form>
);

export default FormInput;
```

```tsx
// FormDisplay.tsx
import React, { FC } from 'react';

interface Props {
  formData: {
    name: string;
    email: string;
  };
}

const FormDisplay: FC<Props> = ({ formData }) => (
  <div>
    <p><strong>Name:</strong> {formData.name}</p>
    <p><strong>Email:</strong> {formData.email}</p>
  </div>
);

export default FormDisplay;
```

---

## **Svelte**

### Definition-Forms

In Svelte, **forms** are used to collect user input similarly to React. But Svelte makes it simpler
 with **two-way binding** using `bind:`.

* **Controlled Form**: Use `bind:` to directly connect input fields to variables.
* **Uncontrolled Form**: You can still access values using `refs` or DOM APIs, but it's less common
due to Svelte's simplicity.

---

### Syntax Overview

#### Controlled Forms

```svelte
<script lang="ts">
  let value: string = '';
</script>

<input type="text" bind:value />
````

#### Uncontrolled Forms

```svelte
<script lang="ts">
  let inputRef: HTMLInputElement;
  
  function handleClick() {
    alert(inputRef.value);
  }
</script>

<input type="text" bind:this={inputRef} />
<button on:click={handleClick}>Show Value</button>
```

---

### Example:Controlled Form with Multiple Inputs

```svelte
<!-- App.svelte -->
<script lang="ts">
  import FormInput from './FormInput.svelte';
  import FormDisplay from './FormDisplay.svelte';

  let formData = {
    name: '',
    email: ''
  };
</script>

<h1>Svelte Forms Example</h1>
<FormInput bind:formData />
<FormDisplay {formData} />
```

```svelte
<!-- FormInput.svelte -->
<script lang="ts">
  export let formData: {
    name: string;
    email: string;
  };
</script>

<form>
  <input
    type="text"
    placeholder="Name"
    bind:value={formData.name}
  />
  <input
    type="email"
    placeholder="Email"
    bind:value={formData.email}
  />
</form>
```

```svelte
<!-- FormDisplay.svelte -->
<script lang="ts">
  export let formData: {
    name: string;
    email: string;
  };
</script>

<div>
  <p><strong>Name:</strong> {formData.name}</p>
  <p><strong>Email:</strong> {formData.email}</p>
</div>
```

---
