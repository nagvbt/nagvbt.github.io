---
tags: ["React", "Front End"]
authors: [mrnbt]
---

# Static Code Analysis in a React App

## **Introduction**

Code quality is crucial in modern web development, ensuring that projects remain maintainable,
readable, and free from potential issues. In this guide, we will set up **static code analysis**
in a **React** project using **Yarn**, integrating the following tools:

- **Husky** → Manages Git hooks to enforce linting before commits.
- **Lint-staged** → Runs linters only on staged files for efficiency.
- **ESLint** → Lints JavaScript/TypeScript code for better quality.
- **Prettier** → Formats code automatically for consistency.
- **Stylelint** → Lints and fixes CSS/SCSS code.

Let's dive into the step-by-step setup.
<!--truncate-->
---

## **1️⃣ Installing Required Packages**

Run the following command to install all necessary dependencies as dev dependencies:

```sh
yarn add -D husky lint-staged eslint prettier stylelint eslint-config-prettier eslint-plugin-prettier
eslint-plugin-react stylelint-config-standard
```

### **Why these tools?**

- **ESLint**: Ensures consistent JavaScript/TypeScript code by enforcing best practices and detecting
 potential issues.
- **Prettier**: Automatically formats code to maintain a uniform style.
- **Stylelint**: Lints and fixes CSS/SCSS styles.
- **Husky**: Hooks into Git workflows to run linters before committing changes.
- **Lint-staged**: Runs linters only on staged files to improve efficiency.

---

## **2️⃣ Configuring ESLint**

To configure **ESLint**, create a file named `.eslintrc.json` in the root directory and add the following
content:

```json
{
  "extends": ["react-app", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### **Why ESLint?**

✅ Catches syntax errors early.  
✅ Helps maintain a consistent coding style.  
✅ Enforces best practices in JavaScript and React development.

---

## **3️⃣ Configuring Prettier**

To ensure consistent code formatting, create a `.prettierrc.json` file:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### **Why Prettier?**

✅ Automatically formats code on save.  
✅ Eliminates debates over code style.  
✅ Works seamlessly with ESLint.

---

## **4️⃣ Configuring Stylelint**

To enforce CSS/SCSS best practices, create a `.stylelintrc.json` file:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,
    "string-quotes": "double"
  }
}
```

### **Why Stylelint?**

✅ Ensures consistent styling rules.  
✅ Detects and fixes errors in CSS/SCSS.  
✅ Avoids potential styling issues in projects.

---

## **5️⃣ Setting Up Husky & Lint-Staged**

### **Installing Husky**

Initialize Husky:

```sh
yarn husky install
```

Modify your `package.json` to include Husky and lint-staged:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "src/**/*.{css,scss}": [
    "stylelint --fix",
    "prettier --write"
  ]
}
```

### **Enable Pre-Commit Hook**

Run the following command to enable Husky’s pre-commit hook:

```sh
yarn husky add .husky/pre-commit "yarn lint-staged"
```

### **Why Husky & Lint-Staged?**

✅ Prevents committing bad code.  
✅ Runs linters only on changed files (performance-friendly).  
✅ Ensures consistent formatting and linting before every commit.

---

## **6️⃣ Running Linters Manually**

To check code quality manually, run:

```sh
yarn lint       # Runs ESLint
yarn format     # Runs Prettier
yarn stylelint  # Runs Stylelint
```

---

## **Conclusion**

By following these steps, we have successfully set up **Husky, lint-staged, ESLint, Prettier, and Stylelint**
in a **React project** using **Yarn**. This setup ensures:

✔ **Better code quality**  
✔ **Automatic formatting**  
✔ **Enforced best practices**  
✔ **Prevention of bad code commits**  

With this configuration in place, your React project will maintain high coding standards, making it
 more maintainable and scalable! 🚀
