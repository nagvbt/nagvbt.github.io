---
sidebar_position: 18
---
# CSS Styling

## **React**

### Definition

React allows different ways to style components:

* **Inline Styling**: Style directly in JSX using objects
* **Internal Styling**: Using a `<style>` tag inside components (not common)
* **External Styling**: Linking `.css` files
* **CSS Modules**: Scoped CSS for each component

---

### Syntax

#### 1. **Inline Styling**

```tsx
<div style={{ color: 'blue', fontSize: '18px' }}>Hello</div>
```

#### 2. **External CSS**

```tsx
import './App.css';
<div className="title">Hello</div>
```

#### 3. **CSS Modules**

```tsx
import styles from './Component.module.css';
<div className={styles.className}>Hello</div>
```

---

### Example: App using All Styles

```tsx
// App.tsx
import React from 'react';
import InlineStyle from './InlineStyle';
import ExternalStyle from './ExternalStyle';
import ModuleStyle from './ModuleStyle';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1 className="mainTitle">🎨 React Styling Methods</h1>

      {/* Inline Styling */}
      <InlineStyle />

      {/* External CSS */}
      <ExternalStyle />

      {/* CSS Modules */}
      <ModuleStyle />

      {/* Internal Styling */}
      <style>
        {`
          .internalStyle {
            background-color: #fffae5;
            padding: 10px;
            border-left: 5px solid orange;
            margin: 10px 0;
          }
        `}
      </style>
      <p className="internalStyle">This is styled using internal CSS.</p>
    </div>
  );
};

export default App;
```

```tsx
// InlineStyle.tsx
import React from 'react';

const InlineStyle: React.FC = () => {
  const styleObj: React.CSSProperties = {
    color: 'green',
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '10px 0',
  };

  return <p style={styleObj}>This is inline styled text.</p>;
};

export default InlineStyle;
```

```tsx
// ExternalStyle.tsx
import React from 'react';

const ExternalStyle: React.FC = () => {
  return <p className="externalText">This is external CSS styled text.</p>;
};

export default ExternalStyle;
```

```css
/* App.css */
.mainTitle {
  color: darkblue;
  text-align: center;
  margin-bottom: 20px;
}

.externalText {
  color: #d63384;
  font-size: 18px;
  margin: 10px 0;
}
```

```tsx
// ModuleStyle.tsx
import React from 'react';
import styles from './ModuleStyle.module.css';

const ModuleStyle: React.FC = () => {
  return <p className={styles.styledText}>This is styled with CSS Modules.</p>;
};

export default ModuleStyle;
```

```css
/* ModuleStyle.module.css */
.styledText {
  color: purple;
  font-size: 20px;
  background-color: #f3f3f3;
  padding: 10px;
  border-radius: 8px;
}
```

---

## **Svelte**

### Definition-CSS Styling in Svelte

Svelte offers various ways to style components:

* **Inline Styling**: Directly on elements using `style=""`
* **External Styling**: In global `.css` files imported via `app.html` or `+layout.svelte`
* **Scoped (Internal) Styling**: Using `<style>` blocks inside components (scoped by default)
* **CSS Modules (via preprocessors or plugins)**: Less common, usually replaced by scoped `<style>`
in `.svelte` files

---

### Syntax Overview

#### 1.**Inline Styling**

```svelte
<p style="color: blue; font-size: 18px;">Hello</p>
````

#### 2.**External CSS**

```html
<!-- global.css -->
.title {
  color: teal;
}
```

```svelte
<!-- App.svelte -->
<h1 class="title">Hello</h1>
```

#### 3. **Scoped CSS (Built-in)**

```svelte
<p class="scoped">Hello</p>

<style>
  .scoped {
    color: purple;
    font-weight: bold;
  }
</style>
```

---

### Example:App using All Styles

#### Folder Structure

```svelte
src/
├── routes/
│   ├── +page.svelte           → App
│   ├── InlineStyle.svelte
│   ├── ExternalStyle.svelte
│   └── ModuleStyle.svelte
├── app.css                    → Global CSS
```

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import InlineStyle from './InlineStyle.svelte';
  import ExternalStyle from './ExternalStyle.svelte';
  import ModuleStyle from './ModuleStyle.svelte';
  import '../app.css';
</script>

<h1 class="mainTitle">🎨 Svelte Styling Methods</h1>

<!-- Inline -->
<InlineStyle />

<!-- External CSS -->
<ExternalStyle />

<!-- Scoped/Module -->
<ModuleStyle />

<!-- Internal Style in this file -->
<p class="internalStyle">This is styled using internal (scoped) CSS.</p>

<style>
  .internalStyle {
    background-color: #fffae5;
    padding: 10px;
    border-left: 5px solid orange;
    margin: 10px 0;
  }
</style>
```

```svelte
<!-- InlineStyle.svelte -->
<p style="color: green; font-weight: bold; font-size: 18px; margin: 10px 0;">
  This is inline styled text.
</p>
```

```svelte
<!-- ExternalStyle.svelte -->
<p class="externalText">This is external CSS styled text.</p>
```

```css
/* app.css */
.mainTitle {
  color: darkblue;
  text-align: center;
  margin-bottom: 20px;
}

.externalText {
  color: #d63384;
  font-size: 18px;
  margin: 10px 0;
}
```

```svelte
<!-- ModuleStyle.svelte -->
<p class="styledText">This is styled with scoped internal CSS.</p>

<style>
  .styledText {
    color: purple;
    font-size: 20px;
    background-color: #f3f3f3;
    padding: 10px;
    border-radius: 8px;
  }
</style>
```
