---
tags: ["Ionic"]
---

# FontAwesome in ionic3+ apps

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

## Steps

1. Install Font-Awesome  
  `npm install font-awesome --save`  
  
2. Create a config folder at root and create a file custom.copy.config.js  
  `config/custom.copy.config.js`  
 <!-- truncate --> 
add below code 3. Add config section at the end of package.json  
  `"config": {`  
  `"ionic\_copy": "./config/custom.copy.config.js"`  
  `}`  
  
4. Delete package-lock.json  
  
5. In index.html add the following line  

`FILES`  
Refer the code files in [Github](https://github.com/nagvbt/IonicTemplate/commit/6010ed693d790b1980ab57fbd011554e46cd787a)
