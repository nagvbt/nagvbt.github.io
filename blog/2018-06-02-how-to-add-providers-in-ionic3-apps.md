---
tags: ["Ionic"]
---

# How to Add Providers in Ionic3+ apps
Providers are special classes which decorated with @Injectable decorator. Providers are used to a specific work.  We can organize the code and code can be reused in multiple places e.g in pages, other providers too.  
  
We will added now simple Local StorageProvider by using the command  
ionic g provider Storage  
  
1. The command creates the StorageProvider in  
providers/storage/storage.ts  

```js  
import { Injectable } from '@angular/core';  
@Injectable()  
export class StorageProvider {  
 constructor() {  
 }  
}  
```
  
2. Adds the StorageProvider in the provider's array of app.module.ts  
  
  
***FILES***  
Refer the code files in [Github](https://github.com/nagvbt/IonicTemplate/commit/da1dba6fe3e42bcc383ea84d190a8dafebf1d108)
