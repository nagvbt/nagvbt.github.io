---
title: "Ionic 2 Tutorial"
tags: ["Ionic"]
---

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD025 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

# Ionic 2 Tutorial

## Introduction

[Ionic 2](http://ionicframework.com/docs/v2/) is an open source cross platform application development [framework](http://ionicframework.com/). For the below questions your answer is YES and you can use the Ionic 2 for your app development.  

1. I want to develop Apps for Android, iOS, Windows but don't know there respective technologies like Java for Android apps, objective-C/Swift for iOS apps, C# for windows apps ?
2. Do you know only web front-end technologies like HTML/CSS/Javascript  and  likes to develop mobile/tablet app?
3. We want to develop the app with less effort and faster ?

Ionic 2 apps can be developed with Angular 2 and preferably with  typescript.  

##  Development environment setup

To install the development environment perform the below steps  

1. Install Node.js 6 or greater  [Download the installer](https://nodejs.org/en/)
2. Open cmd and use the following commands to install the Ionic CLI and Cordova  
            **_npm install -g ionic_**  
            **_npm install -g cordova_**

## Create a sample first app

To create first sample app, Open the cmd window and use the below command  
_**ionic start sampleApp --v2**_

1. To run your app, `cd` into the _**sampleApp**_ directory

2. To run on browser  **`ionic serve`**

3. To run on ios **`ionic run ios`**

4. To run on Android **`ionic run android`**

5. To know the environment details use **`ionic info`**  

Your system information:  

```  
Cordova CLI: 6.1.1  
Gulp version: CLI version 3.9.1  
Gulp local: Local version 3.9.1  
Ionic Framework Version: 2.0.0-rc.1  
Ionic CLI Version: 2.1.0  
Ionic App Lib Version: 2.1.0-beta.1  
OS: Windows 8.1  
Node Version: v6.2.1
````

## Generate new Page and Service

1. To create a **page** in the sampleApp  use

```
ionic g page [pageName]
ionic g page demoPage
```

CLI creates the following three files under 'sampleApp/src/pages/demo-page'

- demo-page.html -> the view code
- demo-page.ts -> component/class code similar to controller
- demo-page.scss -> your style/sass code

2. To create a **service**, replace `page` with `provider`:  

```
ionic g provider [providerName]
ionic g provider demoData
```

CLI creates the demo-data.ts under 'sampleApp/src/providers/' folder this file serves likes service/factory.  

3. Add DemoPage module in 'sampleApp\\src\\app\\app.module.ts'  

```js
import { NgModule } from '@angular/core';  
import { IonicApp, IonicModule } from 'ionic-angular';  
import { MyApp } from './app.component';  
import { AboutPage } from '../pages/about/about';  
import { ContactPage } from '../pages/contact/contact';  
import { HomePage } from '../pages/home/home';  
import { TabsPage } from '../pages/tabs/tabs';  
import { DemoPage } from '../pages/demo-page/demo-page'; //import DemoPage   
  
@NgModule({  
  declarations: [ 
    MyApp,  
    AboutPage,  
    ContactPage,  
    HomePage,  
    TabsPage,  
    DemoPage //Add DemoPage  
  ],  
  imports: [ 
    IonicModule.forRoot(MyApp)  
  ],  
  bootstrap: [IonicApp],  
  entryComponents: [ 
    MyApp,  
    AboutPage,  
    ContactPage,  
    HomePage,  
    TabsPage,  
    DemoPage //Add DemoPage  
  ],  
  providers: []  
})  
export class AppModule {}  
```

## Navigate to DemoPage

1. Add button on Home.html

    `Show DemoPage`

2. Add the code to navigate in the HomePage class

    ```js
     goToDemoPage(){  
     this.navCtrl.push(DemoPage);  
     }
    ```

3. Launch the app and click on the 'SHOW DEMOPAGE' Button you will be navigated to the DemoPage

Bingo !!! you created a new page and plugged in app and implemented the navigation.
