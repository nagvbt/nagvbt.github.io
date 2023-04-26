# Debugging & Tracing

```xml
Tracing
 //Trace-1
 Trace.Write( "Custom Category", "Page_Load called" );
<!--Trace 2- pageOutput="true" see in the page-->
      < trace enabled ="true " requestLimit ="100 " pageOutput ="true " traceMode=" SortByTime" localOnly=" false" mostRecent=" true">
      </ trace>

Page wise
<asp: Content ID ="Content1" ContentPlaceHolderID ="HeadContent" runat ="server" trace="true">

Debugging
---------
<!--Balaji: debug-for entire website--> 
    < compilation debug ="true " targetFramework ="4.0 ">
      < assemblies>
....
</compilation>

Page wise
<asp: Content ID ="Content3" ContentPlaceHolderID ="HeadContent"  Debug ="true" runat="server">


Custom Error Page
  
<!-- Balaji: Custom error page-->
      < customErrors defaultRedirect = "SiteErrorPage.aspx " mode = "On " >
        < error statusCode = "404 " redirect = "FileNotFound.aspx " />
```