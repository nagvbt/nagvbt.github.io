---
tags: ["Ionic"]
---

# Temporary Storage which persists only when the app is live for Ionic3+ Apps

AppStateProvider - is developed for Temporary Storage which persists only when the app is live once the app is closed the AppState data will be destroyed. For small data to save permanently use StorageProvider which is a local Storage.  
**app-state.ts**   

```js
import { Injectable } from '@angular/core';  
import { AppStateDTO } from './app-state-DTO'  
  
\**   
 * Class representing a AppState - AppStateProvider - 
 * this state persists only when the app is live once the app is   
 * closed the AppState data will be destroyed.  
 * NOTE: For small data to save permanently use StorageProvider which is a local Storage  
 * Author - Nag  
 */  
@Injectable()  
export class AppStateProvider {  
 private stateData = {};  
 private globalData: AppStateDTO;  
  
 constructor() {  
 }  
  
 \*\*  
 \* Save the AppState  
 \* @param {AppStateDTO} data save the AppStateDTO   
 \*  
 public setAppState(data: AppStateDTO) {  
 this.globalData = data;  
 }  
  
 \*\*  
 \* Get the saved AppState  
 \* @return {AppStateDTO} the saved AppStateDTO data  
 \*/  
 public getAppState(): AppStateDTO {  
 return this.globalData;  
 }  
  
 \*\*  
 \* Get the clone of the current stateData  
 \* @return {state} state a clone of the current state  
 \*/  
 get state() {  
 return this.stateData = this.clone(this.stateData);  
 }  
  
 \*\*  
 \* get the value based on key  
 \* @param {any} key   
 \* @return {any} value of key  
 \*/  
 get(key?: any) {  
 const state = this.state;  
 return state.hasOwnProperty(key) ? state\[key\] : state;  
 }  
  
 \*\*  
 \* Set value don't allow mutation  
 \* @param {any} value state a clone of the current state  
 \*/  
 set state(value) {  
 throw new Error('do not mutate the `stateData` directly');  
 }  
  
 \*\*  
 \* Set the key value pair  
 \* @param {string} key  
 \* @param {any} any value  
 \* @return {any} the state  
 \*  
 set(key: string, value: any) {  
 return this.stateData\[key\] = value;  
 }  
  
 /\*\*  
 \* Clone the object  
 \* @param {object} clone the input object  
 \* @return {any} object   
 \*/  
 private clone(object) {  
 return JSON.parse(JSON.stringify(object));  
 }  
}  
```  
  
AppStateDTO - used to store the values that are required for the App  
  
**app-state-dto.ts**  
```js
/\*\*   
 \* Class representing a AppStateDTO  
 \* Author - Nag  
 \*/  
export class AppStateDTO {  
 APP_NAME: string;  
 APP_VERSION: string;  
 EMAIL: string;  
 APP_ID: string;  
 APP_DOWNLOAD_URL: string;  
 MORE_APPS_URL: string;  
 ADS_BANNER_ID: string;  
 ADS_INTERSTITIAL_ID: string;  
 ADS_VEDIOREWARDS_ID: string;  
 IS_MOBILE: boolean;  
}  
```
**FILES:**  
Refer the code files in [Github](https://github.com/nagvbt/IonicTemplate/commit/9ce7e8458cb06328eb4673e1d79f3d293d75c2ea)
