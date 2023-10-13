---
tags: ["Angular"]
---

# Tutorial to create an Angular app

## Steps to install

1. Install latest nodejs from <https://nodejs.org/en/download>

2. Install Angular  

    ```ts
    npm install -g @angular/cli
    ```

    <!--truncate-->

3. Install VS Code from <https://code.visualstudio.com/>

## Steps to create app

1. Download the initial app from
<https://angular.io/generated/zips/first-app-lesson-00/first-app-lesson-00.zip>

2. Unzip folder and rename the folder to your app name

3. Open the folder in VSCode and in terminal run

    ```ts
    yarn install
    ```

4. To start the app

    ```ts
    ng serve
    ```

5. open url <http://localhost:4200/> to see the output in the browser

## Create the Component

1. Open Terminal and run

    ```ts
    ng generate component home --standalone --inline-template --skip-tests
    ```

2. Add HomeComponent to your app's layout

- Open app.component.ts in the editor.
- In app.component.ts, import HomeComponent by adding this line to the file
level imports.

    ```ts
    import { HomeComponent } from './home/home.component';
    ```

- In app.component.ts, in @Component, update the imports array property and add HomeComponent.

    ```ts
    imports: [
      HomeComponent,
    ],
    ```

- In app.component.ts, in @Component, update the template property to include the
following HTML code.

```ts
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
```
