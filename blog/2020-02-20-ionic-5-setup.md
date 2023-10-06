---
categories: 
  - "Ionic"
tags: ["Ionic"]
---

# Ionic 5 setup
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
1. Install Ionic - Open the command prompt and run
`npm install -g @ionic/cli`

2. Update the angular cli
`npm install -g @angular/cli@latest`

3. Create an app ionic start nagTabs tabs syntax: _ionic start_ app types are a. tabs: A tabs based layout b. sidemenu: A sidemenu based layout c. blank: An empty project with a single page

<!--truncate-->
4. Create framework features syntax: _ionic generate \[options\]_

_type_ of framework features:

page
componet
service
module
class
directive
gaurd

_name_: The name/path of the feature being generated

5\. Run the App on browser _cd myApp_ _ionic serve_

**Run the app on Android/iOS/Windows**

6\. ionic cordova build Build (prepare + compile) an Ionic project for a given platform syntax: _ionic cordova build \[options\]_ eg: _ionic cordova build android_

7\. ionic cordova run Run an Ionic project on a connected device syntax: _ionic cordova run \[\] \[options\]_ eg: _ionic cordova run android_
