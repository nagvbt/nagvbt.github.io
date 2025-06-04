# Log4net Integration
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
Logging Using Log4net in ASP.Net
`http://logging.apache.org/log4net/download.html`

**Steps**

Log4net is an Open Source utility used for log/report statements to various kinds of output targets (text file, email, database, event viewer etc.): `http://logging.apache.org/`. It can be a very handy utility for application instrumentation purposes.
Configuring Log4net

Step 1: Add a reference of Log4net.dll to the project.

Step 2: Add Global.asax to the project, if not already added. In the "Application_Start" event of global.asax, add the following code:
log4net.Config.XmlConfigurator.Configure();

Step 3: In the web.config file, under Configuration->Configsections, add the following section:

```xml
<section name="log4net" type="log4net.Config. Log4NetConfigurationSectionHandler, log4net"/>
```

Step 4: In web.config, add a new section `<log4net>`. This section will contain all the settings related to the Log4net configuration.

Step 5: In web.config, under "log4net" section, add the required appenders (output target) configuration sections in the following way:

File appender configuration, used for log statements in a text file

```
<appender name="LogFileAppender" type="log4net.Appender.FileAppender">
<param name="File" value="Logs\\Log4Net.log"/>
<layout type="log4net.Layout.PatternLayout">
<param name="ConversionPattern" value="%d [%t] %-5p %c %m%n"/>
</layout></appender>
```

SMTP appender configuration, used for log statements by sending email

```
<appender name="SmtpAppender" type="log4net.Appender.SmtpAppender">
<to value="" /><from value="" />
<subject value="" /><smtpHost value="" />
<bufferSize value="512" /><lossy value="true" />
<evaluator type="log4net.Core.LevelEvaluator">
<threshold value="WARN"/></evaluator>
<layout type="log4net.Layout.PatternLayout">
<conversionPattern value="%newline%date [%thread] %-5level
%logger [%property] - %message%newline%newline%newline" />
</layout>
</appender>
```

Step 6: In the web.config file, under "log4net" section, for each appender, add loggers in the following way:

```
<logger name="File"><level value="All" />
<appender-ref ref="LogFileAppender" />
</logger>
<logger name="EmailLog">
<level value="All" />
<appender-ref ref="SmtpAppender" />
</logger>
```

Step 7: Now, whenever we want to log any information/error/warning, call the appropriate method in the following manner:

```
//for logging to file
log4net.ILog logger = log4net.LogManager.GetLogger("File");
//for emailing
log4net.ILog logger = log4net.LogManager.GetLogger("EmailLog");
logger.Info("Starting page load");
```

## Code Files

### Web.config

```xml
<?xml version="1.0"?>
<configuration>
      < configSections>
         < section name ="roleService " type=" System.Web.Configuration.ScriptingRoleServiceSection, System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35" requirePermission= "false" allowDefinition=" MachineToApplication"/>
         </ sectionGroup>
                  </ sectionGroup>
            </ sectionGroup>
    <!-- Author: log-->
    < section name ="log4net " type=" log4net.Config.Log4NetConfigurationSectionHandler, log4net "/>
  </configSections>
  <!--Author: File-->
  <log4net debug=" true">
    < appender name ="LogFileAppender " type=" log4net.Appender.FileAppender">
      <!-- <param name="File" value="Logs\\Log4Net.log"/> -->
      < param name ="File " value ="C:\\Logs\\TestLog.log "/>
      < layout type ="log4net.Layout.PatternLayout ">
        < param name ="ConversionPattern " value ="%d [%t] %-5p %c %m%n "/>
      </ layout>
    </ appender>
    <!-- email-->
    < appender name ="SmtpAppender " type ="log4net.Appender.SmtpAppender ">
      < to value ="" />
      < from value ="" />
      < subject value ="" />
      < smtpHost value ="" />
      < bufferSize value ="512 " />
      < lossy value ="true " />
      < evaluator type ="log4net.Core.LevelEvaluator ">
        < threshold value ="WARN "/>
      </ evaluator>
      < layout type ="log4net.Layout.PatternLayout ">
        < conversionPattern value ="%newline%date [%thread] %-5level
          %logger [%property] - %message%newline%newline%newline " />
      </ layout>
    </ appender>

    <!-- Event Viewer-->
    < appender name ="EventLogAppender " type=" log4net.Appender.EventLogAppender">
      < param name ="LogName " value ="MyLog " />
      < param name ="ApplicationName " value ="MyApp " />
      < layout type ="log4net.Layout.PatternLayout ">
        < conversionPattern value ="%date [%thread] %-5level %logger [%property{NDC}] - %message%newline" />
      </ layout>
    </ appender>
    <!-- SQL Server-->
    < appender name ="AdoNetAppender " type=" log4net.Appender.AdoNetAppender">
      < bufferSize value ="100 " />
      < connectionType value ="System.Data.SqlClient.SqlConnection, System.Data, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" />
      < connectionString value ="Data Source=.;Initial Catalog=Northwind;User Id=sa;Password=123;" />
      < commandText value ="INSERT INTO Log ([Date],[Thread],[Level],[Logger],[Message],[Exception]) VALUES (@log_date, @thread, @log_level, @logger, @message, @exception)" />
      < parameter>
        < parameterName value ="@log_date " />
        < dbType value ="DateTime " />
        < layout type ="log4net.Layout.RawTimeStampLayout " />
      </ parameter>
      < parameter>
        < parameterName value ="@thread " />
        < dbType value ="String " />
        < size value ="255 " />
        < layout type ="log4net.Layout.PatternLayout ">
          < conversionPattern value ="%thread " />
        </ layout>
      </ parameter>
      < parameter>
        < parameterName value ="@log_level " />
        < dbType value ="String " />
        < size value ="50 " />
        < layout type ="log4net.Layout.PatternLayout ">
          < conversionPattern value ="%level " />
        </ layout>
      </ parameter>
      < parameter>
        < parameterName value ="@logger " />
        < dbType value ="String " />
        < size value ="255 " />
        < layout type ="log4net.Layout.PatternLayout ">
          < conversionPattern value ="%logger " />
        </ layout>
      </ parameter>
      < parameter>
        < parameterName value ="@message " />
        < dbType value ="String " />
        < size value ="4000 " />
        < layout type ="log4net.Layout.PatternLayout ">
          < conversionPattern value ="%message " />
        </ layout>
      </ parameter>
      < parameter>
        < parameterName value ="@exception " />
        < dbType value ="String " />
        < size value ="2000 " />
        < layout type ="log4net.Layout.ExceptionLayout " />
      </ parameter>
    </ appender>

<!-- Logger-->
    < logger name ="EmailLog ">
      < level value ="All " />
      < appender-ref ref ="SmtpAppender " />
    </ logger>
    < logger name ="File ">
      < level value ="All " />
      < appender-ref ref ="LogFileAppender " />
    </ logger>
    < logger name ="EventViewer ">
      < level value ="All " />
      < appender-ref ref ="EventLogAppender " />
    </ logger>
    < logger name ="SQLServer ">
      < level value ="All " />
      < appender-ref ref ="AdoNetAppender " />
    </ logger>
  </log4net>

  <appSettings></appSettings>

 ..........
...............
</configuration>
```

## Class

```cpp
public partial class HierarchicalMenuDemo : System.Web.UI.Page
{
    //for logging to file
    private static readonly ILog log = log4net.LogManager.GetLogger("File" );
    private static readonly ILog evlog = log4net.LogManager.GetLogger("EventViewer" );
    private static readonly ILog sqllog = log4net.LogManager.GetLogger("SQLServer" );

    protected void Page_Load(object sender, EventArgs e)
    {
         if (!IsPostBack)
            XmlDataSource1.Data = GetMenuData();
         log.Info( "Starting page load");
         log.Debug( "This a test debug message" );
         log.Error( "Page Load failed : ");
         evlog.Info( "Starting page load");
         evlog.Debug( "This a test debug message" );
         evlog.Error( "Page Load failed : ");
         sqllog.Info( "Starting page load");
         sqllog.Debug( "This a test debug message" );
         sqllog.Error( "Page Load failed : ");
    }
}
```

### DB script

```sql
CREATE TABLE [dbo].[Log] (
[Id] [int] IDENTITY (1, 1) NOT NULL,
[Date] [datetime] NOT NULL,
[Thread] [varchar] (255) NOT NULL,
[Level] [varchar] (50) NOT NULL,
[Logger] [varchar] (255) NOT NULL,
[Message] [varchar] (4000) NOT NULL,
[Exception] [varchar] (2000) NULL
)
```

## MultiLogger

How to use log4net - MultiLogger

```cpp
using System.Configuration;
using log4net;
/// <summary>
/// Summary description for MultiLogger
/// </summary>
public class MultiLogger
{
   private enum LOGTYPE
   {
       FILE,
       EVENTVIEWER,
       SQLSERVER,
       ALL
   }
   private enum MSGTYPE
   {
       INFO,
       DEBUG,
       ERROR
   }
   //for logging to file
   private static readonly ILog log = log4net.LogManager.GetLogger("File");
   private static readonly ILog evlog = log4net.LogManager.GetLogger("EventViewer");
   private static readonly ILog sqllog = log4net.LogManager.GetLogger("SQLServer");
   private static bool all = bool.Parse((string)ConfigurationManager.AppSettings["LOGTYPE.ALL"]);
   private static bool file = bool.Parse((string)ConfigurationManager.AppSettings["LOGTYPE.FILE"]);
   private static bool ev = bool.Parse((string)ConfigurationManager.AppSettings["LOGTYPE.EVENTVIEWER"]);
   private static bool sql = bool.Parse((string)ConfigurationManager.AppSettings["LOGTYPE.SQLSERVER"]);
   public static void Info(string msg)
   {

       if (all)
       {
           Writer(msg, LOGTYPE.ALL, MSGTYPE.INFO);
       }
       else
       {
           if (sql)
           {
               Writer(msg, LOGTYPE.SQLSERVER, MSGTYPE.INFO);
           }
           if (file)
           {
               Writer(msg, LOGTYPE.FILE, MSGTYPE.INFO);
           }
           if (ev)
           {
               Writer(msg, LOGTYPE.EVENTVIEWER, MSGTYPE.INFO);
           }
       }
   }
   public static void Debug(string msg)
   {
       if (all)
       {
           Writer(msg, LOGTYPE.ALL, MSGTYPE.DEBUG);
       }
       else
       {
           if (sql)
           {
               Writer(msg, LOGTYPE.SQLSERVER, MSGTYPE.DEBUG);
           }
           if (file)
           {
               Writer(msg, LOGTYPE.FILE, MSGTYPE.DEBUG);
           }
           if (ev)
           {
               Writer(msg, LOGTYPE.EVENTVIEWER, MSGTYPE.DEBUG);
           }
       }
   }
   public static void Error(string msg)
   {
       if (all)
       {
           Writer(msg, LOGTYPE.ALL, MSGTYPE.ERROR);
       }
       else
       {
           if (sql)
           {
               Writer(msg, LOGTYPE.SQLSERVER, MSGTYPE.ERROR);
           }
           if (file)
           {
               Writer(msg, LOGTYPE.FILE, MSGTYPE.ERROR);
           }
           if (ev)
           {
               Writer(msg, LOGTYPE.EVENTVIEWER, MSGTYPE.ERROR);
           }
       }
   }
   private static void Writer(string msg, LOGTYPE logtype, MSGTYPE msgtype )
   {
       switch (logtype)
       {
           case LOGTYPE.FILE:
                LogInFile(msg, msgtype);
               break;
           case LOGTYPE.EVENTVIEWER:
                LogInEvw(msg, msgtype);
               break;
           case LOGTYPE.SQLSERVER:
                LogInSql(msg, msgtype);
               break;
           case LOGTYPE.ALL:
               {
                   LogInFile(msg, msgtype);
                   LogInEvw(msg, msgtype);
                   LogInSql(msg, msgtype);
               }
               break;
           default:
               break;
       }
   }
   private static void LogInFile(string msg, MSGTYPE msgtype)
   {
       switch (msgtype)
       {
           case MSGTYPE.INFO:
               log.Info(msg);
               break;
           case MSGTYPE.DEBUG:
               log.Debug(msg);
               break;
           case MSGTYPE.ERROR:
               log.Error(msg);
               break;
       }
   }
   private static void LogInSql(string msg, MSGTYPE msgtype)
   {
       switch (msgtype)
       {
           case MSGTYPE.INFO:
               sqllog.Info(msg);
               break;
           case MSGTYPE.DEBUG:
               sqllog.Debug(msg);
               break;
           case MSGTYPE.ERROR:
               sqllog.Error(msg);
               break;
       }
   }
   private static void LogInEvw(string msg, MSGTYPE msgtype)
   {
       switch (msgtype)
       {
           case MSGTYPE.INFO:
               evlog.Info(msg);
               break;
           case MSGTYPE.DEBUG:
               evlog.Debug(msg);
               break;
           case MSGTYPE.ERROR:
               evlog.Error(msg);
               break;
       }
   }
}
/*
//HOW TO USE
MultiLogger.Info("info msg");
MultiLogger.Debug("Debug msg");
MultiLogger.Error("Error m");sg
*/
```

### References

How to use log4net for ASP

`http://www.codeproject.com/KB/aspnet/log4net.aspx`

Configure Log4Net in ASP.NET 2.0

`http://www.codeproject.com/KB/aspnet/Log4Net_Configuration.aspx`

`http://log4net.sourceforge.net/release/1.2.0.30316/doc/manual/faq.html`

Eventviewer
`http://geekswithblogs.net/TimH/archive/2006/04/13/75063.aspx`
