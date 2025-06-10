---
sidebar_position: 4
---

# ActiveX Control Tutorial

## Basics of ActiveX Controls
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
**Definition:** ActiveX controls are COM components which are self-registering and Implements standard interfaces that deal specifically with GUI-based tasks such as rendering, sizing, activation, and property persistence.

An ActiveX control is anything you might see in the Toolbox of Visual studio (i.e. EditBox, combobox e.t.c) we can even use the Activex controls in web pages using

**Connectable Object**

_Connectable Object:_ is a COM Component or object that defines and uses an outgoing interface.

_Sink_: A client that implements the outgoing interface of a component is called sink.

**Control Container:** An application (Dialog or View ) that houses ActiveX control is called the control container. The control container communicates with a ActiveX control via methods and properties of a control.

**ActiveX Control Properties:** There are two types of properties 1.Stock Properties 2.Custom properties

1.Stock Properties Stack properties are common properties (Caption, foreground and background colors) that most controls expose. The COleControl data members provides stock properties implementation and also provides notification functions for the stock properties.

2.Custom properties Custom properties are the properties which are specific to the control. There are four different ways to implement Custom properties. a. Member variable: b. Member variable with notification function: c. Get/Set methods d. Parameterized (property array)

**ActiveX Control Methods** There are two types of methods 1.Stock methods 2.Custom methods

1.Stock methods The COleControl provides the stock methods implementation. there are only two stock properties DoClick() - fires an event from the control Refresh() - updates the control appearance

2.Custom methods Custom methods are the methods which are specific to the control.

**ActiveX Control Events** A member function of an outgoing interface is called an event. An activeX controlcan notify the containerof a state change using events. There are two types of Events 1.Stock Events 2.Custom Events

1.Stock Events The COleControl provides the common stock Events implementation like mouse button clicks and keyboard input.

2.Custom Events Custom Events are the events which are specific to the control.

## Steps to create an ActiveX Control

1. Open VS 2008
2. File->NewProject give the project name as "MathOCX" 3.Click OK and Click Finish
3. To add a method
   - Go to class View, Expand "MathOCXLib"
   - RightClick on the "\_DMathOCX" and click 'Add >' Add Method...
4. 'Add Method Wizard' Dialog will be displayed as shown in below fig Add the function return type, parameter and function names as Add and Sub

   ```cpp
   DOUBLE Add(DOUBLE i, DOUBLE j)

   DOUBLE Sub(DOUBLE i, DOUBLE j);
   ```

5. Three Major classes are created

   ```cpp
   class CMathOCXApp : public COleControlModule
   class CMathOCXCtrl : public COleControl
   class CMathOCXPropPage : public COlePropertyPage
   ```

## Descriptions of the Generated classes & Notes

`class CMathOCXApp : public COleControlModule -> CWinApp``

COleControlModule provides member functions for initializing control module it is an application object for running the ActivexControl. Only one global object is present.

`class CMathOCXCtrl : public COleControl`

1. COleControl Derived from CWnd, this class inherits all the functionality of a Windows window object plus additional functionality specific to OLE, such as event firing and the ability to support methods and properties.
2. COleControl has a dispatch map, which is used to expose a set of functions (called methods) and attributes (called properties) to the control user.

### Dispatch Maps

1. OLE Automation provides ways to call methods and to access properties across applications.

2. The mechanism supplied by the MFC for dispatching these requests is the "dispatch map," which designates the internal and external names of object functions and properties, as well as the data types of the properties themselves and of function arguments.

`DISP_FUNCTION(theClass, pszName, pfnMember, vtRetVal, vtsParams )`

#### Parameters

- theClass - Name of the class.
- pszName - External name of the function.
- pfnMember - Name of the member function.
- vtRetVal - A value specifying the function's return type.
- vtsParams - A space-separated list of one or more constants specifying the function's parameter list.

Example: DISP_FUNCTION_ID(CMathOCXCtrl, "Add", dispidAdd, Add, VT_R8, VTS_R8 VTS_R8)

```cpp
class CMathOCXPropPage : public COlePropertyPage
```

Used to display the properties of a custom control in a graphical interface, similar to a dialog box.

#### Using MathOCX.ocx control in the HTML Page

```html
<HTML>
<HEAD>
<META NAME="GENERATOR" Content="Microsoft Visual Studio 8.0">
<TITLE></TITLE>
<style type="text/css">
 .style1 {
    width: 25%;
    }
 .style2 {
    color: #0000CC;
    font-weight: 700;
    }
 .style3 {
    width: 213px;
    }
</style>
</HEAD>

<script type="text/javascript">
    function Button1_onclick() {
        //Call the MathOCX Add Method
        Result.value = MathOCX.Add(Text1.value, Text2.value);
    }
</script>

<BODY onload="initPage()" scroll="no">
    <table class="style1">
        <tr>
            <td class="style2" colspan="2">Addition of two numbers using MathOCX ActiveX Control </td>
        </tr>
        <tr>
            <td class="style3">Enter number :</td>
            <td><input id="Text1" type="text" /></td>
        </tr>
        <tr>
            <td class="style3"> Enter number :</td>
            <td><input id="Text2" type="text" /></td>
        </tr>
        <tr>
            <td class="style3"> <input id="Button1" type="button" value="Add" onclick="return Button1_onclick()" />
                Result:</td>
            <td>
                <input id="Result" type="text" />
            </td>
        </tr>
    </table>

<!--Initialize the <span class="hiddenSpellError" pre="the ">MathOCX</span> <span class="hiddenSpellError" pre="">Activex</span> Control using the control GUID -->
</pre>
<pre>
<pre>
 style="left: 0px; top: 0px" width="1" viewastext>
            <param name="_Version" value="65536"/>
            <param name="_ExtentX" value="26"/>
            <param name="_ExtentY" value="26"/>
            <param name="_StockProps" value="0"/>
      </object>

</BODY>
</HTML>
```
