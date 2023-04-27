---
title: "Step by Step tutorial to create MFC ActiveX Control which can be used in HTML Pages"
date: "2012-04-01"
categories: 
  - "com-dcom-atl"
tags: 
  - "atl"
  - "MFC"
---

**Definition:** ActiveX controls are COM components which are self-registering and Implements standard interfaces that deal specifically with GUI-based tasks such as rendering, sizing, activation, and property persistence.

An ActiveX control is anything you might see in the Toolbox of Visual studio (i.e. EditBox, combobox e.t.c) we can even use the Activex controls in web pages using and handling events with Javascript.

**Steps**

1. Open VS 2008
2. File->NewProject give the project name as "MathOCX" 3.Click OK and Click Finish
3. To add a method
    - Go to class View, Expand "MathOCXLib"
    - RightClick on the "\_DMathOCX" and click 'Add >' Add Method...
4. 'Add Method Wizard' Dialog will be displayed as shown in below fig Add the function returntype, parameter and function names as Add and Sub
    
    DOUBLE Add(DOUBLE i, DOUBLE j)
    
    DOUBLE Sub(DOUBLE i, DOUBLE j);
    
    4\. Three Major classes are created
    
    class CMathOCXApp : public COleControlModule
    
    class CMathOCXCtrl : public COleControl
    
    class CMathOCXPropPage : public COlePropertyPage
    
    # **Descriptions of the Generated classes & Notes** 
    
    **class CMathOCXApp : public COleControlModule -> CWinApp**
    
    **COleControlModule provides** member functions for initializing control module it is an application object for running the ActivexControl. Only one global object is present.
    
    class CMathOCXCtrl : public COleControl
    
    1.COleControl Derived from CWnd, this class inherits all the functionality of a Windows window object plus additional functionality specific to OLE, such as event firing and the ability to support methods and properties.
    

2. COleControl has a dispatch map, which is used to expose a set of functions (called methods) and attributes (called properties) to the control user.

**Dispatch Maps** 1. OLE Automation provides ways to call methods and to access properties across applications.

2\. The mechanism supplied by the MFC for dispatching these requests is the "dispatch map," which designates the internal and external names of object functions and properties, as well as the data types of the properties themselves and of function arguments.

**DISP\_FUNCTION(theClass, pszName, pfnMember, vtRetVal, vtsParams )**

**Parameters** theClass - Name of the class. pszName - External name of the function. pfnMember - Name of the member function. vtRetVal - A value specifying the function's return type. vtsParams - A space-separated list of one or more constants specifying the function's parameter list.

Example: DISP\_FUNCTION\_ID(CMathOCXCtrl, "Add", dispidAdd, Add, VT\_R8, VTS\_R8 VTS\_R8)

class CMathOCXPropPage : public COlePropertyPage

Used to display the properties of a custom control in a graphical interface, similar to a dialog box.

**Using MathOCX.ocx control in the HTML Page**

\[sourcecode language="html"\]
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META NAME="GENERATOR" Content="Microsoft Visual Studio 8.0"&gt;
&lt;TITLE&gt;&lt;/TITLE&gt;
    &lt;style type="text/css"&gt;
 .style1
        {
            width: 25%;
        }
 .style2
 { color: #0000CC;
            font-weight: 700;
        }
 .style3
        {
 width: 213px;
        }
    &lt;/style&gt;
&lt;/HEAD&gt;

&lt;script type="text/javascript"&gt;
    function Button1\_onclick() {

 //Call the MathOCX Add Method
        Result.value = MathOCX.Add(Text1.value, Text2.value);
    }
&lt;/script&gt;

&lt;BODY onload="initPage()" scroll="no"&gt;
    &lt;table class="style1"&gt;
        &lt;tr&gt;
            &lt;td class="style2" colspan="2"&gt;
 Addition of two numbers using MathOCX ActiveX Control
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td class="style3"&gt;
                Enter number :&lt;/td&gt;
            &lt;td&gt;
                &lt;input id="Text1" type="text" /&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td class="style3"&gt;
                Enter number :&lt;/td&gt;
            &lt;td&gt;
                &lt;input id="Text2" type="text" /&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td class="style3"&gt;

    &lt;input id="Button1" type="button" value="Add" onclick="return Button1\_onclick()" /&gt;
                Result:&lt;/td&gt;
            &lt;td&gt;
                &lt;input id="Result" type="text" /&gt;
            &lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;

&lt;!--Initialize the &lt;span class="hiddenSpellError" pre="the "&gt;MathOCX&lt;/span&gt; &lt;span class="hiddenSpellError" pre=""&gt;Activex&lt;/span&gt; Control using the control GUID --&gt;&lt;/pre&gt;
&amp;nbsp;
&lt;pre&gt;
&lt;pre&gt;
 style="left: 0px; top: 0px" width="1" viewastext&gt;
            &lt;param name="\_Version" value="65536"/&gt;
            &lt;param name="\_ExtentX" value="26"/&gt;
            &lt;param name="\_ExtentY" value="26"/&gt;
            &lt;param name="\_StockProps" value="0"/&gt;
      &lt;/object&gt;

&lt;/BODY&gt;
&lt;/HTML&gt;
```
