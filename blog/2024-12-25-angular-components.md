---
tags: ["Angular", "Front End"]
---

# Basics of Angular: Understanding Components

Angular is a powerful front-end framework that allows developers to build dynamic, modern web applications. One of the fundamental building blocks of an Angular application is the **Component**. In this blog post, we will explore what an Angular component is, how it works, and different ways to define and style it.

## What is a Component?

A **Component** in Angular is a reusable UI element that consists of three main parts:

1. **TypeScript class** – Contains the logic and properties of the component.
2. **HTML template** – Defines the structure and content to be displayed.
3. **CSS styles** – Applies styles to the component.

### Defining a Basic Angular Component

In Angular, a component is defined using the `@Component` decorator. Below is a simple example:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Hello, {{ title }} {{ 1 + 2 }}`,
  styles: [`:host {color: red;}`],
})
export class AppComponent {
  title: string = 'NBT'; // A class property holding a title
}
```

### Explanation:

- **selector:** Defines the custom HTML tag to use this component. For example, `<app-root />`.
- **template:** Contains the HTML structure, where `{{ title }}` binds data dynamically.
- **styles:** Contains inline styles specific to this component.

#### **Output:**

```
Hello, NBT 3
```

## Using External Template and CSS Files

Instead of defining the template and styles directly within the component file, we can separate them into external files.

### **app.component.ts** (Component Definition)

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NBT';
}
```

### **app.component.html** (Template File)

```html
<main id="main">
  <div class="content">
      <h1>Hello, {{ title }}</h1>      
  </div>
</main>

<router-outlet />
```

### **app.component.css** (Stylesheet)

```css
.content {
    color: blue;
    font-size: 20px;
}
```

#### **Output:**

```
Hello, NBT
```

## Conclusion

In this blog post, we learned:

- What an Angular component is.
- How to create a basic component.
- How to use external HTML and CSS files to organize code better.

Components are a crucial part of Angular applications. By using them effectively, we can create modular, reusable, and maintainable applications. Stay tuned for more Angular tips and best practices!

