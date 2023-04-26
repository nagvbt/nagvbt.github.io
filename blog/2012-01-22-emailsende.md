---
title: "Sending Emails using C#"
date: "2012-01-22"
categories: 
  - "csharp"
tags: 
  - "csharp"
---

**Step By Step Procedure:**

**Step 1:** Create a new project in Microsoft Visual Studio 2008 (File -> New -> Project -> Visual C# -> Console Application). Give Email\_Sender name and also specify the location where to store the project.

**Step 2:** Now add a new item to the project we just created (Project -> Add New Item -> Class). Specify a name to the class as ‘TNV\_EmailHelper’. The code now looks like as follows. The namespace used is

```cs using System.Net.Mail; ```

**TNV\_EmailHelper.cs**

```cs class TNV\_EmailHelper { private SmtpClient \_sClient = new SmtpClient(); private System.Net.NetworkCredential \_smtpCreds = null; private string \_sendTo; private string \_sendFrom; private string \_subject; private string \_body;

```
    //Constructor
    //change Host& Port names Based on SMTP server
    public TNV_EmailHelper(string host, int port)
    {
        _sClient.Host = host;
        _sClient.Port = port;
    }

    public void SendEmail(string sendFrom, // From EmailAddress
                          string password, // Password
                          string sendTo,   // To Email Address
                          string subject,  // Subject of email
                          string body)     // Boady of email
    {
        try
        {
            _sendFrom = sendFrom;
            _sendTo   = sendTo;
            _subject  = subject;
            _body     = body;

            _smtpCreds = new System.Net.NetworkCredential(
                                                    sendFrom,
                                                    password);
            _sClient.UseDefaultCredentials = false;
            _sClient.Credentials = _smtpCreds;
            _sClient.EnableSsl = true;

            MailMessage msg = BuildMessage();
            _sClient.Send(msg);
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    private MailMessage BuildMessage()
    {
        MailMessage msg = new MailMessage();
        MailAddress to = new MailAddress(_sendTo);
        MailAddress from = new MailAddress(_sendFrom);

        msg.Subject = _subject;
        msg.Body = _body;
        msg.From = from;
        msg.To.Add(to);

        return msg;
    }
}
```

```

**Step 3:** Open Program.cs and in Main write the following lines to send the email

**Program.cs**

```cs class Program { static void Main(string\[\] args) { TNV\_EmailHelper em = new TNV\_EmailHelper( "Smtp.gmail.com", 587); em.SendEmail("from@gmail.com", "password", "to@gmail.com", "SUB: From Email Sender", "BODY: Hello World !"); } } ```
