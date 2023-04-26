---
title: "Simple Windows Form in C#"
date: "2012-01-18"
categories: 
  - "windows-apps"
tags: 
  - "csharp"
  - "winforms"
---

Minimal code to write a c# windows form:

```cs using System.Windows.Forms;

namespace ConsoleFormApp { class MyWindow : Form { public MyWindow() { this.Text = "First Form"; } }

class Program { static void Main(string\[\] args) { Application.Run(new MyWindow()); } } } ```
