# Coding Standards
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 -->
### 1. Lint Errors

ESLint statically analyses the code to quickly find problems and fixes most probles Automatically.

Ensure there are no eslint errors
How to check lint errors

- Use command `yarn lint`
- Husky will check for lint errors during git commit and git pushnly on the modified files

Following are the packages used for the Linting rules.

```js
'airbnb',
  'react-app',
  'prettier/standard',
  'prettier/react',
  'plugin:prettier/recommended',
  'plugin:jsx-a11y/recommended',
  'plugin:flowtype/recommended',
  'plugin:react-hooks/recommended',
  'plugin:promise/recommended',
  'plugin:testing-library/react',
  'plugin:jest-dom/recommended';
```

For more info refer - <https://eslint.org/>

### 2. Unit Testing & Code Covereage

This Project uses react-testing-library for unit testing refer <https://testing-library.com/docs/react-testing-library/intro/>
Ensure you had enough code coverage by writing the tests for the components

- Use command `yarn test:dev` to know the test coverage
- One can view the detailed test coverage report from the `<root>/coverage/lcov-report/index.html`

### 3. Style Guide

This project uses Airbnb Style guide which is mostly reasonable approach to React and JSX. Instead of listing all the rules in this document we suggest to refer the original style gude here <https://airbnb.io/javascript/react/>

### 4. Code Formatting

This project uses Prettier An opinionated code formatter. Code formatting errors will be validated by eslint hence the developer need not run any command for Prettier separately.
Why use Prettier ?

- You press save and code is formatted
- No need to discuss style in code review
- Saves you time and energy

For more info refer - <https://prettier.io/>

### 5. Consistent coding styles

EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. Ensure if you are using Visual Studio Guide install EditorConfig Plugin for Visual Studio Code @ <https://github.com/editorconfig/editorconfig-vscode>

For more info refer: <https://EditorConfig.org>

### Further Reading

1. [Naming Conventions](?path=/docs/getting-started-development-naming-conventions--page)
2. [Code Review Checklist](?path=/docs/getting-started-development-code-review-checklist--page)
