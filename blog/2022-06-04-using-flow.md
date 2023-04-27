---
tags: [React]
---

# Using Flow in React Native project

Flow is used for static type checking in javascript. Flow works best when installed per-project with explicit versioning rather than globally.

<!--truncate-->

Steps:

*   ***Add a devDependency on the `flow-bin` npm package:***

`yarn add –dev flow-bin`

*   ***Run `yarn run flow init` before executing `yarn run flow`.***

`yarn run flow init` 

*   ***To run Flow***

`yarn run flow`

*   Add ‘.flowconfig’ and add ./node\_modules/.\\\*  under \[ignore\]
