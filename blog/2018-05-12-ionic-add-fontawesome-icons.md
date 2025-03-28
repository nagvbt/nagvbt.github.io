---
tags: ["Ionic"]
---

# Add FontAwesome Icons in the SideMenu of ionic3+ Apps

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

First go through the below articles  
[1. How to create a basic ionic3 + mobile application](/blog/2018/02/03/ionic-basic-mobile-app)

[2. How to add FontAwesome to ionic3+ apps](/blog/2018/04/29/ionic-fontawesomes/)
<!-- truncate -->
Steps:

1. In app.component.ts add icon property in the pages array and add the icon name

```js
export class MyApp {
 :
 pages: Array;
 :

 this.pages = [
 { title: 'Home', component: HomePage, icon: "home" },
 { title: 'List', component: ListPage, icon: "list" }
 ];

 :
}
```

2.Add _tag in the app.html_

\_FILES

Refer the code files in [Github](https://github.com/nagvbt/IonicTemplate/commit/c5db580b97e1385728490facbe46c7823d422dfa)

\_
