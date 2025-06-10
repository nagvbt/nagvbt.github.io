---
sidebar_position: 5
---

# ATL, ActiveX FAQ

## ATL
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
1. What is ATL?
2. Versions of ATL?
3. Features of ATL?
4. ATL/COM Object Hierarchy?
5. Explain about ATL Classes?
6. How to Implement two interfaces say IMath, IAdvanedMath in ATL Component?
7. How to Load Controls Specified at Run Time?
8. What Is "AtlAxWin80"?
9. What Is the ATL Control-Hosting API?
10. Which ATL Classes Facilitate ActiveX Control Containment?
11. How to Implement multiple dual interfaces ?
12. How to Reuse interface implementation in source in ATL projects ?
13. How to Implement static object hierarchies in ATL ?
14. How to Use structs in Automation-compatible interfaces?
15. How to Obtain data from the client via an outgoing event dispinterface in ATL ?
16. Will ATL create all of the topological relationships within the topology layer?
17. Does ATL require an application server to operate?
18. What are the known problems with the ATL 2.0 Object Wizard?
19. What problems might be encountered when using \_ATL_MIN_CRT?
20. What causes the linker error that \_main is unresolved during Release builds?
21. What are the reasons an ATL server might fail to register?
22. How to Use structs in Automation-compatible interfaces?

## ACTIVEX Controls

1. Explain about activex control events? - ABB
2. Activex control is derived from which interface? - ABB
3. How to add a method in ActiveX? - ABB
4. What is aggregation, should client know the Inner object directly?
5. How will Activex controls send messages to their parents?
6. How can Activex controls set properties?
7. What is an ActiveX interface?

   An ActiveX interface is a group of related functions that
   are grouped together

8. What is an ActiveX method?

   A method is an exposed function that can be applied to a
   control via the IDispatch interface.

9. What are the properties exposed by ActiveX controls?

   ActiveX controls have four types of properties:
   l Stock:-> These are standard properties supplied to every
   control, such as font or
   color. The developer must activate stock properties, but
   there is little or no
   coding involved.

   2 Ambient:-> These are properties of the environment that
   surrounds the control -
   properties of the container into which it has been placed.
   These can't be changed,
   but the control can use them to adjust its own properties.
   For example, it can set
   the control's background color to match the container's
   background color.

   3 Extended:-> These are properties that the container
   handles, usually involving size
   and placement onscreen.

   4 Custom:-> These are properties added by the control
   developer.

10. What are some other development tools that support creating and using ActiveX controls?

    - MFC
    - ATL
    - C++
    - VB

    through Visual Studio.

11. What Does the Logo Mean?

This comes at the comiplization time, If we give the LOGO option to the compiler, it take a bitmap file (i.e, ) as logo before loading the Application.
