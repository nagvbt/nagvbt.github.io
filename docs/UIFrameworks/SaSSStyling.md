---
sidebar_position: 19
---

# Sass Styling

## **React**

### Definition

React supports SCSS (Sass) styling using `.scss` or `.module.scss` files for component or global styling:

* **Inline Styling**: Same as regular CSS-in-JS (Sass doesn't apply)
* **External SCSS**: Import global SCSS files into components
* **SCSS Modules**: Scoped styles using `.module.scss`

---

### Syntax

#### 1. **Inline Styling** (CSS only)

```tsx
<div style={{ color: 'green', fontSize: '18px' }}>Hello</div>
```

#### 2. **External SCSS**

```tsx
import './App.scss';
<div className="title">Hello</div>
```

#### 3. **SCSS Modules**

```tsx
import styles from './Component.module.scss';
<div className={styles.className}>Hello</div>
```

---

### Example: App using All SCSS Styles

```tsx
// App.tsx
import React from 'react';
import InlineStyle from './InlineStyle';
import ExternalStyle from './ExternalStyle';
import ModuleStyle from './ModuleStyle';
import './App.scss';

const App: React.FC = () => {
  return (
    <div>
      <h1 className="mainTitle">🎨 React SCSS Styling</h1>

      <InlineStyle />
      <ExternalStyle />
      <ModuleStyle />
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
  return <p className="externalText">This is external SCSS styled text.</p>;
};

export default ExternalStyle;
```

```scss
/* App.scss */
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
import styles from './ModuleStyle.module.scss';

const ModuleStyle: React.FC = () => {
  return <p className={styles.styledText}>This is styled with SCSS Modules.</p>;
};

export default ModuleStyle;
```

```scss
/* ModuleStyle.module.scss */
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

### Definition - SCSS Styling in Svelte

Svelte supports SCSS via the `lang="scss"` attribute in `<style>` blocks or external SCSS files:

* **Inline Styling**: Use `style=""` directly on elements
* **External SCSS**: Global `.scss` files imported in `+layout.svelte` or `app.html`
* **Scoped SCSS**: Use `<style lang="scss">` inside `.svelte` files

---

### Syntax Overview

#### 1. **Inline Styling**

```svelte
<p style="color: blue; font-size: 18px;">Hello</p>
```

#### 2.**External SCSS**

```scss
/* app.scss */
.title {
  color: teal;
}
```

```svelte
<!-- App.svelte -->
<h1 class="title">Hello</h1>
```

#### 3. **Scoped SCSS (Built-in)**

```svelte
<p class="scoped">Hello</p>

<style lang="scss">
  .scoped {
    color: purple;
    font-weight: bold;
  }
</style>
```

---

### Example:App using All SCSS Styles

#### Folder Structure

```svelte
src/
├── routes/
│   ├── +page.svelte           → App
│   ├── InlineStyle.svelte
│   ├── ExternalStyle.svelte
│   └── ModuleStyle.svelte
├── styles/
│   └── app.scss               → Global SCSS
```

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import InlineStyle from './InlineStyle.svelte';
  import ExternalStyle from './ExternalStyle.svelte';
  import ModuleStyle from './ModuleStyle.svelte';
  import '../styles/app.scss';
</script>

<h1 class="mainTitle">🎨 Svelte SCSS Styling</h1>

<InlineStyle />
<ExternalStyle />
<ModuleStyle />

<p class="internalStyle">This is styled using scoped SCSS.</p>

<style lang="scss">
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
<p class="externalText">This is external SCSS styled text.</p>
```

```scss
/* app.scss */
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
<p class="styledText">This is styled with scoped SCSS.</p>

<style lang="scss">
  .styledText {
    color: purple;
    font-size: 20px;
    background-color: #f3f3f3;
    padding: 10px;
    border-radius: 8px;
  }
</style>
```
