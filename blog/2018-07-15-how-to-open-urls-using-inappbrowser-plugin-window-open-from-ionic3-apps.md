---
title: "How to open urls using InAppBrowser plugin & window.open from ionic3+ apps"
date: "2018-07-15"
categories: 
  - "Ionic"
tags: 
  - "Ionic"
authors: nagvbt
---

How to open urls using InAppBrowser plugin & window.open from ionic3+ apps. We can InAppBrowser plugin & window.open for opening urls from ionic3+ app

<!--truncate-->

Steps: 1. Install below plugins ionic cordova plugin 
add cordova-plugin-inappbrowser 

`npm install --save @ionic-native/in-app-browser`

2\. Add InAppBrowser in the app.module.ts 
```js
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LaunchUrlProvider } from '../providers'; 

@NgModule({   declarations: \[     // ...   \],  
 imports: \[     BrowserModule,     IonicModule.forRoot(MyApp),     IonicStorageModule.forRoot()   \],  
  bootstrap: \[IonicApp\],   
  entryComponents: \[     // ...   \],  
   providers: \[     // ...     
   InAppBrowser,     LaunchUrlProvider   \] })
```
3\. Create a LaunchUrlProvider

4\. Inject it in your Page/Componet and call the methods
