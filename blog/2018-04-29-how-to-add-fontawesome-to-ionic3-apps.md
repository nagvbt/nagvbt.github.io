---
title: "How to add FontAwesome to ionic3+ apps"
date: "2018-04-29"
categories: 
  - "ionic"
tags: 
  - "ionic"
  - "ionic3"
authors: nagvbt
---

1\. Install Font-Awesome  
**npm install font-awesome --save**  
  
  
2\. Create a config folder at root and create a file custom.copy.config.js  
**config/custom.copy.config.js**  
  
add below code 3. Add config section at the end of package.json  
**"config": {**  
 **"ionic\_copy": "./config/custom.copy.config.js"**  
 **}**  
  
  
4\. Delete package-lock.json  
  
  
5\. In index.html add the following line  
   
   
**FILES**  
Refer the code files in [Github](https://github.com/nagvbt/IonicTemplate/commit/6010ed693d790b1980ab57fbd011554e46cd787a)
