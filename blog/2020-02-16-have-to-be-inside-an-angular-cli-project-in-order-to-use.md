---
title: "Ionic5 Error:'You have to be inside an angular-cli project"
date: "2020-02-16"
categories: 
  - "ionic"
tags: 
  - "hybrid-mobile-app"
  - "ionic"
  - "ionic-5"
authors: nagvbt
---

## PS C:nagTabs> ng test

As a forewarning, we are moving the CLI npm package to "@angular/cli" with the next release, which will only support Node 6.9 and greater. This package will be officially deprecated shortly after. To disable this warning use "ng set --global warnings.packageDeprecation=false". You have to be inside an angular-cli project in order to use the test command.

### **Answer:**

**Install the latest angular version using the following command**

npm install -g @angular/cli@latest
