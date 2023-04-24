---
slug: using-flow-in-react
title: Using Flow in React Native project
authors: nagvbt
tags: [react]
---
Flow is used for static type checking in javascript. Flow works best when installed per-project with explicit versioning rather than globally.

*   ***Add a `devDependency` on the `flow-bin` npm package:***

`yarn add –dev flow-bin`

*   ***Run `yarn run flow init` before executing `yarn run flow`.***

`yarn run flow init` 

*   ***To run Flow***

`yarn run flow`

*   Add ‘.flowconfig’ and add ./node\_modules/.\\\*  under \[ignore\]
