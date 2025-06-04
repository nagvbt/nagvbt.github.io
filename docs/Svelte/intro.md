---
sidebar_position: 1
---

# 🧡 Introduction to Svelte

**Svelte** is a modern front-end JavaScript framework for building fast and reactive user interfaces.
Unlike traditional frameworks like React or Angular, **Svelte shifts much of the work to compile
time**,resulting in highly optimized, minimal JavaScript bundles.

Created by **Rich Harris**, Svelte was first released in **2016**, and it has since gained popularity
 for its simplicity, speed, and developer-friendly approach.

## ⚡ Key Features of Svelte

- **No Virtual DOM:** Svelte compiles your code into efficient, imperative JavaScript that updates
the DOM directly.
- **Reactive Variables:** State management is simple—just reassign a variable, and the UI updates automatically.
- **Built-in Animation & Transitions:** Svelte includes tools for adding smooth animations and
transitions without extra libraries.
- **Small Bundle Sizes:** Since the framework compiles away, the resulting apps are smaller and faster.
- **Component-Based Structure:** Like React and Vue, Svelte uses components to structure UI, but
with simpler syntax.

## 🚀 Why Use Svelte?

- Cleaner, more readable code
- Faster performance due to compile-time optimization
- Minimal boilerplate
- Great developer experience with the official tool **SvelteKit**
- Easy learning curve, especially for those new to modern JavaScript frameworks

## 👋 Svelte in Action (Example)

```svelte
<script>
  let name = "World";
</script>

<h1>Hello {name}!</h1>

<input bind:value={name} />
