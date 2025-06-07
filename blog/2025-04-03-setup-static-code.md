---
tags: ["React", "Front End", "Project Setup"]
authors: [mrnbt]
---

# Setting Up a Modern React Project with Linting, Formatting, Styling and Spell Checking

When working on a React project, maintaining clean and consistent code is essential. This guide will
walk you through setting up a **React** project with **ESLint, Prettier, Stylelint, Husky,
lint-staged, and cspell** to automate code formatting, linting, and spell checking.

<!--truncate-->

## **Step 1: Create a New React App**

```sh
npx create-react-app my-app --use-npm
cd my-app
```

This sets up a new React project.

---

## **Step 2: Initialize Git**

```sh
git init
```

---

## **Step 3: Install Dependencies**

Install necessary development dependencies:

```sh
yarn add -D eslint prettier stylelint husky lint-staged stylelint-config-standard cspell stylelint-config-standard
```

---

## **Step 4: Configure ESLint**

Initialize ESLint:

```sh
npx eslint --init
```

Modify `.eslintrc.json`:

```json
{
  "extends": ["react-app", "eslint:recommended", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

Create `.eslintignore`:

```text
# Third party
**/node_modules

# Build products
build/
static/
docs/
```

### **Add ESLint Scripts to `package.json`**

```json
"scripts": {
    "lint:ts": "eslint \"./src/**/*.{ts,tsx}\" --max-warnings 0",
    "lint:ts:fix": "eslint --fix \"./src/**/*.{ts,tsx}\" --max-warnings 0"
}
```

---

## **Step 5: Configure Prettier**

Create `.prettierrc`:

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

Create `.prettierignore`:

```text
.git
.github
.yarn
.husky
build
node_modules
static
```

### **Add Prettier Scripts to `package.json`**

```json
"scripts": {
    "format": "prettier --write .",
    "format:diff": "prettier --list-different ."
}
```

---

## **Step 6: Configure Stylelint**

Create `.stylelintrc`:

```json
{
    "extends": "stylelint-config-standard",
  "rules": {
    "selector-class-pattern": null,
    "value-keyword-case": ["lower", { "camelCaseSvgKeywords": true }]
  }
}
```

### **Add Stylelint Scripts to `package.json`**

```json
"scripts": {
   "lint:style": "stylelint \"**/*.css\"",
   "lint:style:fix": "yarn lint:style --fix"
}
```

---

## **Step 7: Configure cspell (Spell Checker)**

Initialize cspell:

```sh
npx cspell --init
```

Modify `.cspell.json`:

```json
{
  "version": "0.2",
  "language": "en",
  "ignorePaths": ["node_modules", "build", "static", ".docusaurus", "i18n"],
  "dictionaryDefinitions": [
    {
      "name": "project-words",
      "path": "./project-words.txt",
      "noSuggest": true
    }
  ],
  "dictionaries": [
    "css",
    "html",
    "fonts",
    "typescript",
    "softwareTerms",
    "companies",
    "lorem-ipsum",
    "project-words"
  ]
}
```

Create a `project-words.txt` file to store custom words.

### **Add cspell Script to `package.json`**

```json
"scripts": {
 "lint:spelling": "cspell \"docs/**/*.md\" \"blog/**/*.md\" \"src/**/*.js\" \"src/**/*.tsx\" 
 \"docusaurus.config.js\" --no-progress --show-context --show-suggestions",
  "lint:spelling:fix": "yarn rimraf project-words.txt && echo \"# Project Words - DO NOT TOUCH - 
  This is updated through CI\" >> project-words.txt && yarn -s lint:spelling --words-only --unique 
  --no-exit-code --no-summary \"**\" | cross-env LC_ALL=en_US.UTF-8 sort --ignore-case >> project-words.txt"
}
```

`lint:spelling:fix` does

---

## **Step 8: Configure Husky for Pre-Commit Hooks**

Initialize Husky:

```sh
npx husky init
```

Add pre-commit hook:

```sh
echo "yarn run lint-staged" > .husky/pre-commit
```

Add pre-push hook:

```sh
echo "yarn run lint-staged" > .husky/pre-push
```

## **Step 9: Configure Lint-Staged**

Modify `package.json`:

```json
"lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --fix --max-warnings=0",
      "prettier --write",
      "cspell --no-progress --show-context --show-suggestions"
    ],
    "src/**/*.{css,scss}": [
      "stylelint --fix",
      "prettier --write"
    ],
    "{docs,blog}/**/*.{md,mdx}": [
      "cspell --no-progress --show-context --show-suggestions"
    ]
  }
```

---

## **Step 10: Run the Setup**

```sh
yarn lint:ts
yarn format
yarn lint:style
yarn lint:spelling
```

---

## **Conclusion**

By following these steps, your React project is now set up with:

- **ESLint** for code linting
- **Prettier** for code formatting
- **Stylelint** for CSS linting
- **cspell** for spell checking
- **Husky & lint-staged** for pre-commit checks

This ensures cleaner, more readable, and error-free code throughout your development process. 🚀
