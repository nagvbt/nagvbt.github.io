# ActiveX Control Tutorial

If you are new to ActiveX Control please refer the below items.

[1. Basics of ActiveX Controls](/blog/2012/07/08/basics-of-activex-controls)

Here we will create MFC ActiveX Control which can be used in HTML Pages

**Definition:** ActiveX controls are COM components which are self-registering and Implements standard interfaces that deal specifically with GUI-based tasks such as rendering, sizing, activation, and property persistence.

An ActiveX control is anything you might see in the Toolbox of Visual studio (i.e. EditBox, combobox e.t.c) we can even use the Activex controls in web pages using and handling events with Javascript.

**Steps**

1. Open VS 2008
2. File->NewProject give the project name as "MathOCX" 3.Click OK and Click Finish
3. To add a method
   - Go to class View, Expand "MathOCXLib"
   - RightClick on the "\_DMathOCX" and click 'Add >' Add Method...
4. 'Add Method Wizard' Dialog will be displayed as shown in below fig Add the function returntype, parameter and function names as Add and Sub

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

    **class CMathOCXApp : public COleControlModule -> CWinApp**

    **COleControlModule provides** member functions for initializing control module it is an application object for running the ActivexControl. Only one global object is present.

    class CMathOCXCtrl : public COleControl

1. COleControl Derived from CWnd, this class inherits all the functionality of a Windows window object plus additional functionality specific to OLE, such as event firing and the ability to support methods and properties.
2. COleControl has a dispatch map, which is used to expose a set of functions (called methods) and attributes (called properties) to the control user.

**Dispatch Maps**

1. OLE Automation provides ways to call methods and to access properties across applications.

2. The mechanism supplied by the MFC for dispatching these requests is the "dispatch map," which designates the internal and external names of object functions and properties, as well as the data types of the properties themselves and of function arguments.

**DISP_FUNCTION(theClass, pszName, pfnMember, vtRetVal, vtsParams )**

**Parameters**

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

**Using MathOCX.ocx control in the HTML Page**

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
