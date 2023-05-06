---
tags: ["CSharp"]
---

# Sending SMS using C#

**Step 1:** Create a new project in Microsoft Visual Studio 2008 (File -> New -> Project -> Visual C# -> Console Application). Give SMS_Sender name and also specify the location where to store the project.

**Step 2:** Now add a new item to the project we just created (Project -> Add New Item -> Class). Specify a name to the class as ‘SMSHelper’. The code now looks like as follows. The namespace used is

```cpp
using System.IO; 
using System.Net; 
```

**SMSHelper.cs**

```cs
 public class SMSHelper { 
  private WebResponse myResponse = null; 
  private string result = string.Empty; 
  private string formatUrl(string ToMobileNo, string Message) {
     DateTime mydate = System.DateTime.Now; 
     string url = ""; url += "method=sendMessage"; 
     url += "&userid=2000053959"; // your loginId - 1 
     url += "&password=Gdgek2yiY";//password - 2 
     url += "&msg=" + mydate.ToString(); 
     url += Message; 
     url += "&send_to="; // a valid 10 digit phone no. 
     url += ToMobileNo; url += "&v=1.1"; 
     url += "&msg_type=TEXT";  // Can be "FLASH" or "UNICODE\_TEXT" or "BINARY" 
     url += "&auth_scheme=PLAIN"; 
     return url; 
     }

    public string SendSms(string ToMobileNo , string Message)
    {
        try
          {
            string finalUrl = "http://enterprise.smsgupshup.com/GatewayAPI/rest?" + formatUrl(ToMobileNo, Message);
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
```

**Step 3:** Open Program.cs and in Main write the following lines to send the SMS

```cpp
 class Program { 
  static void Main(string[] args) { 
    SMSHelper smsObj = new SMSHelper(); 
    string Text = smsObj.SendSms("1234567890", "HelloWorld"); 
    Console.WriteLine(Text); 
    } 
} 
```
