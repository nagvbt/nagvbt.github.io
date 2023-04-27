---

tags: [React Native]
---

# React Native App using Expo

React Native
------------

Create native apps for Android and iOS using React

React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

[Refer](https://reactnative.dev/)

<!--truncate-->

Expo:
-----

Expo is a platform built around React Native and native platforms which enable you to develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

[Refer](https://docs.expo.io/)

### Install Expo

`npm install --global expo-cli`

### Create new project

`expo init nag-rn`

Selection of Template

    >expo init nag-rn
    ? Choose a template: » - Use arrow-keys. Return to submit.
        ----- Managed workflow -----
    >   blank                 a minimal app as clean as an empty canvas
        blank (TypeScript)    same as blank but with TypeScript configuration
        tabs (TypeScript)     several example screens and tabs using react-navigation and TypeScript
        ----- Bare workflow -----
        minimal               bare and minimal, just the essentials to get you started
        minimal (TypeScript)  same as minimal but with TypeScript configuration
    

Selected the Tabs Template

    √ Choose a template: » tabs (TypeScript)     several example screens and tabs using react-navigation and TypeScript
    √ Downloaded and extracted project files.
    � Using Yarn to install packages. Pass --npm to use npm instead.
    √ Installed JavaScript dependencies.
    
    &#x2705; Your project is ready!
    
    To run your project, navigate to the directory and run one of the following yarn commands.
    
    - cd nag-rn
    - yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
    - yarn android
    - yarn ios # requires an iOS device or macOS for access to an iOS s
    - yarn web
    

Change the directory and Start the app.

`cd nag-rn` 

`yarn start`

