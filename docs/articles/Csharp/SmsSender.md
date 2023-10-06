# SMS Sender
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
 How to Send SMS Register at <http://enterprise.smsgupshup.com> to get the username and password

 ```cpp
using System;
using System.IO;
using System.Net;
using System.Text;
     
public class Sms
{
    private WebResponse myResponse = null;
    private string result = string.Empty;
    public string SendSms(string ToMobileNo , string Message)
    {
        try
          {
    
            DateTime mydate = System.DateTime.Now;
            string url = "";
            url += "method=sendMessage";
            url += "&userid=2000053955"; // your loginId - 1 
            url += "&password=Gdgek2yiT";//password - 2
            url += "&msg=" + mydate.ToString();
            url += Message;
            url += "&send_to="; // a valid 10 digit phone no.
            url += ToMobileNo;
            url += "&v=1.1";
            url += "&msg_type=TEXT"; // Can by "FLASH" or "UNICODE_TEXT" or "BINARY"
            url += "&auth_scheme=PLAIN";
            string finalUrl = "http://enterprise.smsgupshup.com/GatewayAPI/rest?" + url;
            HttpWebRequest myRequest = (HttpWebRequest)WebRequest.Create(finalUrl);
            myResponse = myRequest.GetResponse();
            Stream st = myResponse.GetResponseStream();

            Encoding ec = System.Text.Encoding.GetEncoding("utf-8");
            StreamReader reader = new System.IO.StreamReader(st, ec);
            result = reader.ReadToEnd();                
         
            reader.Close();
            st.Close();
            return result;
        }
        catch (Exception exp)
        {
           return result;
        }
        finally
        {
            if (myResponse != null) myResponse.Close();
     
        }
    }
}
/*
//HOW TO USE
Sms smsObj = new Sms();
lblMessage.Text= smsObj.SendSms(txtToMobileNo.Text, txtMessage.Text);
*/
```
