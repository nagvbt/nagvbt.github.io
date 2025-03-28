---
tags: ["Ionic"]
---

# How to Add Constants and use across Ionic3+ Apps  

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
  
## Steps  

1. Created a folder constants and create a file app.configs.ts  
  
2. Add below code which needs to be used across app  
<!-- truncate -->
```js
export const AppConfigs = {  
 APP_NAME: "InoicTemplate",  
 APP_VERSION: "  1.0.0",  
 EMAIL: "nagvbt@gmail.com",  
 SQLITE_DB_NAME: "ionictemp",  
 ...  
}  
```
  
3. To use above AppConfigs values add the below code in the page  

```js
import {AppConfigs} from '../../constants'  
  
export class AboutPage {  
 private appName: string;  
 private versionNumber: string;  
  
 constructor(public navCtrl: NavController, public navParams: NavParams) {  
 this.onInit();  
 }  
  
 onInit() {  
 this.appName = AppConfigs.APP_NAME;  
 this.versionNumber = AppConfigs.APP_VERSION;  
 }  
}  
```
  
**FILES:**  
Refer the code files in [Github](https://github.com/nagvbt/IonicTemplate/commit/6928fcdecbd1bf08cecb83daa91332e1237f005b)
