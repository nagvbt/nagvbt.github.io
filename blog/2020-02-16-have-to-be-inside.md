---
categories: 
  - "Ionic"
tags: ["Ionic"]
---

# Ionic5 Error:'You have to be inside an angular-cli project

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

## PS C:nagTabs> ng test

As a forewarning, we are moving the CLI npm package to "@angular/cli" with the next release, which will only support Node 6.9 and greater. This package will be officially deprecated shortly after. To disable this warning use "ng set --global warnings.packageDeprecation=false". You have to be inside an angular-cli project in order to use the test command.
<!-- truncate -->

### **Answer:**

**Install the latest angular version using the following command**

`npm install -g @angular/cli@latest`
