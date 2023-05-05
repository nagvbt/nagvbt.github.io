---
tags: ["Technology Evaluation", "PWA", "Ionic"]
---

# Progressive Web App (PWA)

A Progressive Web App (PWA) is an web application which gives an App like experience on mobile devices. PWA are developed with web technologies. These apps need not be installed and can be just access on the mobile browser by adding a short cut to the Home screen using ‘Add to Home Screen’ browser option. PWA fills the gap between mobile websites and mobile apps.  
  
Currently PWA are developed by many Software companies you can find the references from PWA Rocks [website](https://pwa.rocks/)  

## Advantages of PWA

- Native UX (Android/iOS/Windows) on the web which will be a natural app with great immersive user experience.
- Feels like an app, works like a website
- Responsive:Respond quickly to user interactions with smooth scrolling and nice animations. 
- Improved performance, offline data  support using service workers
- Capable of Push Notifications
- Share the app via URL, does not require installation.
- Quicker load times: Loads instantly and never offline indicators like dinosaur.

  
## Technologies to develop PWA

There are different tools and technologies are existing in the market to develop PWA some of them are listed below. This article will use the Ionic 3 to develop the PWA.

1. Ionic Framework 
2. Using a Polymer template
3. React

  

## Develop PWA using Ionic Framework step by step

Ionic 3 uses Angular 4 and Typescript . Below are the steps to develop the PWA.

  

1. Open command prompt/terminal and create a ionic app  
 `ionic start MyIonic3PWA sidemenu`

  
2. Change the directory to MyIonic3PWA and add the browser as a platform
 `ionic platform add browser`
  
3. To Launch the project  
 `ionic run browser`
  
4. To add the Logo create a folder and copy the launch logo.png in the folder MyIonic3PWA `\\src\\assets\\imgs\\` It works for android  
  
For iOS add the below code in index.html   
      
     
5. To add the app name open src/manifest.json and add app name  
  
"name": "MyIonic3PWA",  
"short\_name": "MyIonic3PWA",  
  
and change the index.html  
  
MyIonic3PWA  
  

## **Code Sample**

Sample code given below can be used for creating manifest and index files

**manifest.json**  
  
**index.html**  
  

## **Refrences**

1. [Your First Progressive Web App](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/)

2. [Ionic Framwork](http://ionicframework.com/)
