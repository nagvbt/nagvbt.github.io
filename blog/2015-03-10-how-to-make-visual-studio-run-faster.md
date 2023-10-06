---
tags: ["Tools"]
---

# How to make Visual Studio Run Faster
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
1. Make sure the latest service pack for Visual Studio is installed.
2. Disable Navigation Bar – Go to Tools > Options > Text Editor > C# or All Languages and uncheck **_Navigation bar_**.
3. Turn off animations – Go to Tools > Options > Environment and uncheck **_Animate environment tools_.**
4. Turn off Track Active Item – This will turn off jumping in the explorer whenever you select different files in different projects. Go to Tools > Options > Projects and Solutions and uncheck _**Track Active Item**_ in Solution Explorer. This will ensure that if you are moving across files in different projects, the left pane will still be steady instead of jumping around.
5. Turn off Track Changes – Go to Tools > Options > Text Editor and uncheck **_Track changes_**. This will reduce overhead and speeds up IDE response.
6. Turn off HTML Validation – Go to Tools > Options > Text Editor > HTML > Validation and uncheck **_Show errors_**.
7. Turn off Start Page – Go to Tools > Options > Environment > Startup and select **_Load last loaded solution_** from the _At **Startup**_ dropdown. This simply makes Visual Studio load faster when opening the application.

***NOTE:***

Above settings have been used for Visual Studio 2005 specifically but should still be of benefit for earlier and later versions of Visual Studio.
