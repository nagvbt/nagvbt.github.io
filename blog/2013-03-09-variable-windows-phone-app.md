---
tags: ["Windows Phone"]
---

# Set a variable that can be accessed on all pages of a Windows Phone App

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

**App.xaml.cs**

```cs
public partial class App : Application {
 public string sName { get; set; }

 public static new App Current
 {
     get { return Application.Current as App; }
 }
  ...
  ...


} 
```

**Page1.xaml.cs**

```cs
public partial class Page1 : PhoneApplicationPage { 
 public string _sName;

 public Page1()
 {
    InitializeComponent();

    _sName = App.Current.sName;
 }

} 
```
