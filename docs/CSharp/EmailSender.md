# Email Sender
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
How to an Send Email

```cpp
 using System;
    using System.Net.Mail;
    public class EmailSender
    {
        private SmtpClient Client = new SmtpClient();
        private System.Net.NetworkCredential smtpcreds = null;
        public EmailSender(string fromEmail, string passoword)
        {
            smtpcreds = new System.Net.NetworkCredential(fromEmail, passoword);
        }
        public void SendEmail(string sendTo, string sendFrom, string Subject, string body)
        {
            try
            {
                //change Host& Port names Based on SMTP server
                Client.Host = "Smtp.gmail.com";//1
                Client.Port = 587;//2
                Client.UseDefaultCredentials = false;
                Client.Credentials = smtpcreds;
                Client.EnableSsl = true;
                MailMessage msg = MakeMessage(sendTo, sendFrom, Subject, body);
                Client.Send(msg);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        private MailMessage MakeMessage(string sendTo, string sendFrom, string Subject, string body)
        {
            MailMessage msg = new MailMessage();
            MailAddress to = new MailAddress(sendTo);
            MailAddress from = new MailAddress(sendFrom);
            msg.Subject = Subject;
            msg.Body = body;
            msg.From = from;
            msg.To.Add(to);
            return msg;
        }
    }
/*
//HOW TO USE
//take  email &  password
string fromEmail = "example@gmail.com";
EmailSender obj = new EmailSender(fromEmail, "fromemailPassword");
obj.SendEmail(TxtTo.Text, Txtfrom.Text, TxtSubject.Text, TxtMessage.Text);
*/
```
