---
tags: [React]
---

# Using Flow in React Native project
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
Flow is used for static type checking in javascript. Flow works best when installed per-project with explicit versioning rather than globally.

<!--truncate-->

Steps:

1. ***Add a devDependency on the flow-bin npm package:***
`yarn add –dev flow-bin`

2. ***Run below command***
`yarn run flow init`

3. ***To run Flow***
`yarn run flow`

4. Add ‘.flowconfig’ and add ./node\_modules/.\\\*  under \[ignore\]
