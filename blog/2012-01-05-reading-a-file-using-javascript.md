---
tags: ["Javascript"]
---

# Reading a file using JavaScript

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
