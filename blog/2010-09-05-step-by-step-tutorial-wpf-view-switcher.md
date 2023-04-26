---
title: "Step by Step Tutorial - WPF View Switcher"
date: "2010-09-05"
categories: 
  - "wpf"
tags: 
  - "wpf"
authors: nagvbt
---

Dynamic Switching of views in WPF using UserControl and Grid Layout.

- [1\. Controls and Layouts used](#1-controls-and-layouts-used)
- [2\. Step by Step approach for creating the project](#2-step-by-step-approach-for-creating-the-project)
- [3\. MainWindow Code Explanation](#3-mainwindow-code-explanation)
- [4\. RedView Code Explanation](#4-redview-code-explanation)
- [5\. GreenView Code Explanation](#5-greenview-code-explanation)

## 1\. Controls and Layouts used

Views – UserContol  
ViewHolder – Grid

## 2\. Step by Step approach for creating the project

1. Launch Visual Studio.
2. From the menu bar select File, New Project.
3. Select the WPF Project Template
4. Name your new application SwitchingViews, and then click OK.
5. Rename Window1.xaml to MainWindow.xaml find and replace all the occurrences of Window1.xaml to MainWindow.xaml.
6. Follow MainWindow Code Explanation section for modifying the code.
7. Add  User Control
8. Name User Control RedView, and then click OK.
9. Follow RedView Code Explanation section for modifying the code .
10. 10 .For creating GreenView repeat step 8 and 9.

## 3\. MainWindow Code Explanation

The gridMain is main Grid which hosts the ‘View Holder ‘ Grid (gridViewHolder). On clicking the Red/Green Button we can switch the Default view to Red/Green View.The void ChangeViewTo(VIEWTYPE viewType) method clears the child/existing view to the specified viewType and Adds the new View.

MainWindow.xaml

```html
<Grid Background="Black" Name="gridMain">  
<Grid.RowDefinitions>  
<RowDefinition Height="46-" />  
<RowDefinition Height="213-" />  
</Grid.RowDefinitions>

<Button Background="Red"  
HorizontalAlignment="Left"  
Margin="24,12,0,11"  
Width="75" Height ="22"  
Name="btnRedView"  
Content="Red View"  
Click="btnRedView_Click">  
</Button>  
<Button Background="Green"  
HorizontalAlignment="Left"  
Margin="105,12,0,11"  
Width="75" Height ="22"  
Name="btnGreenView"  
Content="Green View"  
Click="btnGreenView_Click">  
</Button>  
<Button Background="Gold"  
HorizontalAlignment="Left"  
Margin="348,13.21,0,12.21"  
Width="75"  
Name="bnClear"  
Content="Clear Holder"  
Click="bnClear_Click">  
</Button>  
<Button HorizontalAlignment="Right"  
Margin="0,13.21,20,12.21"  
Width="75"  
Name="btnCancel"  
Content="Cancel"  
Click="btnCancel_Click">  
</Button>

<!--View Holder Grid -->
<Grid Background="Gray"  
Grid.Row="1"  
Name="gridViewHolder">  
<Label FontSize="15"  
FontWeight="bold"  
Margin="217,85,202,98"  
Name="lblViewHolder"  
Content="View Holder">  
</Label>  
</Grid>

</Grid>  
</Window>
```

## 4\. RedView Code Explanation

The void AdjustSize()Makes the size of the UserControl Adjustable to the size of view holder Grid at Runtime.

RedView.xaml

```html
<UserControl x:Class="SwitchingViews.RedView"  
xmlns="[http://schemas.microsoft.com/winfx/2006/xaml/presentation"](http://schemas.microsoft.com/winfx/2006/xaml/presentation");  
xmlns:x="[http://schemas.microsoft.com/winfx/2006/xaml"](http://schemas.microsoft.com/winfx/2006/xaml");  
Height="300" Width="300" Background="Red">  
<Grid><Label VerticalAlignment="Top"  
FontSize="15"  
FontWeight="bold"  
Margin="115,35,109,0"  
Height="29"  
Name="lblViewHolder"  
Content="Red View">  
</Label> </Grid>  
</UserControl>
```

## 5\. GreenView Code Explanation

Same as RedView.
