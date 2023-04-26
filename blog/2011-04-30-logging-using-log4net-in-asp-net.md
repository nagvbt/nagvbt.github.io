---
title: "Logging using Log4Net in ASP.Net"
date: "2011-04-30"
---

Log4net is an Open Source utility used for log/report statements to various kinds of output targets Namely.

- TextFile
- EventViewer
- SQL Server
- Email
    
    ## **Integrating Log4net in simple 4 steps**
    
    Step 1: Add a reference of _Log4net.dll_ to the project. Step 2: Add _Global.asax_ to the project and add the following code:

```cs log4net.Config.XmlConfigurator.Configure(); ```

a. In the web.config file, under Configuration->ConfigSections, add the following section:

```xml &lt;section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler, log4net"/&gt; ```

b. Add a new section "“ & add the required appenders (output target) configuration sections in the following way:

```xml &lt;configSections&gt; &lt;section name="&lt;span class=" hiddenspellerror="" pre=""&gt;log4net" type="log4net.Config.Log4NetConfigurationSectionHandler, log4net"/&gt;&lt;/section&gt; &lt;/configSections&gt; &lt;log4net debug="true"&gt; &lt;appender name="LogFileAppender" type="log4net.Appender.FileAppender"&gt; &lt;param name="File" value="C:\\Logs\\TestLog.log"/&gt; &lt;layout type="log4net.Layout.PatternLayout"&gt; &lt;/layout&gt; &lt;/appender&gt; : : &lt;logger name="File"&gt; &lt;level value="All"/&gt; &lt;appender-ref ref="LogFileAppender"/&gt; &lt;/logger&gt; &lt;/log4net &gt; ```

Step 3: call the appropriate method in the class .**cs file where we log** 

```cs public partial class HierarchicalMenuDemo : System.Web.UI.Page { //for logging to file private static readonly ILog log = log4net.LogManager.GetLogger("File"); private static readonly ILog evlog = log4net.LogManager.GetLogger("EventViewer"); private static readonly ILog sqllog = log4net.LogManager.GetLogger("SQLServer"); <pre><code>protected void Page\_Load(object sender, EventArgs e) {

if (!IsPostBack) { XmlDataSource1.Data = GetMenuData(); }

log.Info("Starting page load"); log.Debug("This a test debug message"); log.Error("Page Load failed : ");

evlog.Info("Starting page load"); evlog.Debug("This a test debug message"); evlog.Error("Page Load failed : ");

sqllog.Info("Starting page load"); sqllog.Debug("This a test debug message"); sqllog.Error("Page Load failed : ");

}</code></pre> } ```

**Step 3: Use** **Database script**

If you want to target the logging information in the SQL Server use the following script create Table in the existing database.

\[sourcecode language="sql"\] CREATE TABLE \[dbo\].\[Log\] ( \[Id\] \[int\] IDENTITY (1, 1) NOT NULL, \[Date\] \[datetime\] NOT NULL, \[Thread\] \[varchar\] (255) NOT NULL, \[Level\] \[varchar\] (50) NOT NULL, \[Logger\] \[varchar\] (255) NOT NULL, \[Message\] \[varchar\] (4000) NOT NULL, \[Exception\] \[varchar\] (2000) NULL ) ```

## **OUTPUT Screens**

Download **log4Net**: [](http://logging.apache.org/log4net/download.html)[http://logging.apache.org/log4net/download.html](http://logging.apache.org/log4net/download.html)

The Sample uses NorthWind Database download it from : [](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=06616212-0356-46a0-8da2-eebc53a68034&displaylang=en "http://www.microsoft.com/downloads/en/details.aspx?FamilyID=06616212-0356-46a0-8da2-eebc53a68034&displaylang=en")[http://www.microsoft.com/downloads/en/details.aspx?FamilyID=06616212-0356-46a0-8da2-eebc53a68034&displaylang=en](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=06616212-0356-46a0-8da2-eebc53a68034&amp;displaylang=en)
