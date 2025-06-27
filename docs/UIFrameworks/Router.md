---
sidebar_position: 16
---
# Router

## **React**

### Definition

React Router is a standard library used for routing in React applications. It allows you to display
different components or pages based on the URL path — enabling single-page applications (SPAs).

---

### Syntax

#### Setup

```bash
npm install react-router-dom
```

#### Basic Usage

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

---

### Example: App with 3 Pages using React Router

```tsx
// App.tsx
import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Demo</h1>
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
```

```tsx
// Home.tsx
import React, { FC } from 'react';

const Home: FC = () => <h2>🏠 Welcome to the Home Page</h2>;

export default Home;
```

```tsx
// About.tsx
import React, { FC } from 'react';

const About: FC = () => <h2>ℹ️ This is the About Page</h2>;

export default About;
```

```tsx
// Contact.tsx
import React, { FC } from 'react';

const Contact: FC = () => <h2>📞 Contact Us Here</h2>;

export default Contact;
```

---

## **Svelte**

### Definition-Router

SvelteKit uses **file-based routing** — meaning your folder and file structure in the `src/routes`
directory automatically defines the routes in your app. Each `.svelte` file becomes a page.

---

#### Setup->

Install SvelteKit using:

```bash
npm create svelte@latest my-app
````

Inside `src/routes`, create the following files:

```svelte
src/
├── routes/
│   ├── +layout.svelte      → for navigation (shared layout)
│   ├── +page.svelte        → Home page (/)
│   ├── about/+page.svelte  → About page (/about)
│   └── contact/+page.svelte→ Contact page (/contact)
```

### Example: App with 3 Pages using SvelteKit Routing

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  // Layout shared across all routes
</script>

<nav>
  <a href="/">Home</a> |
  <a href="/about">About</a> |
  <a href="/contact">Contact</a>
</nav>

<slot /> <!-- Page content will be injected here -->
```

```svelte
<!-- src/routes/+page.svelte (Home) -->
<script lang="ts">
  // Home Page
</script>

<h2>🏠 Welcome to the Home Page</h2>
```

```svelte
<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  // About Page
</script>

<h2>ℹ️ This is the About Page</h2>
```

```svelte
<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
  // Contact Page
</script>

<h2>📞 Contact Us Here</h2>
```

---

> In SvelteKit, navigation between pages is handled natively — no need for explicit routers like
`BrowserRouter` or `Route`. Just create files in the `routes/` folder and use `<a href="/route">`
to navigate.

---
