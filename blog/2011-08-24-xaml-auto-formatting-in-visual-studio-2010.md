---
tags: ["WPF"]
---
# XAML Auto formatting in Visual Studio 2010
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
To Auto format XAML code in a readable and organized way

1. Open Visual Studio 2010
2. Go to Menu: Tools->Options
3. Select Text Editor |->XAML |->Formatting |->Spacing
4. Set the options 1 & 2 as shown in the below image

**Sample Code:**

```xml
<Window x:Class="WpfApplication1.MainWindow" xmlns="[http://schemas.microsoft.com/winfx/2006/xaml/presentation"](http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot); xmlns:x="[http://schemas.microsoft.com/winfx/2006/xaml"](http://schemas.microsoft.com/winfx/2006/xaml&quot); Title="MainWindow" Height="350" Width="525"> 
<Grid> <!--Before Auto formatting --> 
<Button Content="Button" Height="23" HorizontalAlignment="Left" Margin="66,52,0,0" Name="button1" VerticalAlignment="Top" Width="75" /> <!--After Auto formatting --> 
<Button Content="Button" Height="23" HorizontalAlignment="Left" Margin="248,68,0,0" Name="button2" VerticalAlignment="Top" Width="75" /> </Grid> 
</Window> 
```
