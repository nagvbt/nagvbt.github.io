---
tags: ["Javascript"]
---

# Reading a file using JavaScript
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
To read a file from the browser used the below sample code.

```js
 function ReadFile(filename) {
   try {
    var fso = new ActiveXObject("Scripting.FileSystemObject"); 
    var fh = fso.OpenTextFile(filename,1); 
    var contents = fh.ReadAll(); 
    fh.Close(); 
    return contents;
    } catch (Exception) {
      var msg = "ERROR:"+"""+filename+ """+ ": " +Exception.description; alert(msg); 
      return msg; 
    } 
} 
 ```
