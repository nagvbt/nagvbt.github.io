---
tags: ["Ionic"]
---

# Create & Use a Local StorageProvider in Ionic Apps"

Add a provider to the Ionic3 app refer and follow the below steps  
[How to Add Providers in Ionic3+](blog/2018/06/02/how-to-add-providers-in-ionic3-apps/)

<!--truncate-->

## Steps:

1. Inject the Storage to the StorageProvider  and that was created in the [How to Add Providers in Ionic3+](blog/2018/06/02/how-to-add-providers-in-ionic3-apps/)

2. Add IonicStorageModule to the imports list in your NgModule declaration in  src/app/app.module.ts

```js
import { IonicStorageModule } from '@ionic/storage';
import { StorageProvider } from '../providers';
@NgModule({
 declarations: [
 // ...
 ],
 imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
 ],
 bootstrap: [IonicApp],
 entryComponents: [
 // ...
 ],
 providers: [
    // ...
    StorageProvider,
 ]
})
```

3. To use StorageProvider in your Page/Component inject it and use it

```js
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { StorageProvider } from '../../providers';

 \*\*
 \*  Class representing a StorageProvider Demo
 \*  Author - Nag
 \*
@IonicPage()
@Component({
 selector: 'page-storage',
 templateUrl: 'storage.html',
})
export class StoragePage {
 private editValue;
 constructor(public storageProvider: StorageProvider) {
 }
 set() {
 this.storageProvider.setValue('EDIT\_KEY', this.editValue);
 }
 get() {
 this.storageProvider.getValue('EDIT\_KEY').then((value) => {
 alert('StorageTest \\nSaved value: ' + value);
 });
 }
}
```

FILES  
Refer the code files in [Github](https://github.com/nagvbt/IonicTemplate/commit/15805bd428b81b3faf4b54a4d30d92c1f60eb270)
