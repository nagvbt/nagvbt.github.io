---
title: "How to Add FontAwesome Icons in the SideMenu of ionic3+ Apps"
date: "2018-05-12"
categories: 
  - "Ionic"
tags: 
  - "Ionic"
authors: nagvbt
---

First go through the below articles  
1\. [How to create a basic ionic3 + mobile application](http://nagvbt.blogspot.com/2018/02/how-to-create-basic-ionic3-mobile.html)  

[2\. How to add FontAwesome to ionic3+ apps](http://nagvbt.blogspot.com/2018/04/how-to-add-fontawesome-to-ionic3-apps.html)

  

Steps:

1\. In app.component.ts add icon property in the pages array and add the icon name 
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

2\. Add _tag in the app.html_

_FILES  

Refer the code files in [Github](https://github.com/nagvbt/IonicTemplate/commit/c5db580b97e1385728490facbe46c7823d422dfa)

_