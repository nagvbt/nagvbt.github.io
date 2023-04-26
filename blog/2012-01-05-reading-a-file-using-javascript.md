---
title: "Reading a file using JavaScript"
date: "2012-01-05"
categories: 
  - "javascript-html"
tags: 
  - "javascript"
---

\[source language="javascript"\] function ReadFile(filename) { try { var fso = new ActiveXObject("Scripting.FileSystemObject"); var fh = fso.OpenTextFile(filename,1); var contents = fh.ReadAll(); fh.Close(); return contents; } catch (Exception) { var msg = "ERROR:"+"""+filename+ """+ ": " +Exception.description; alert(msg); return msg; } } \[/source\]
