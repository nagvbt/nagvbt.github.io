---
tags: ["Technology Evaluation", "Machine Learning"]
---

# Microsoft Bot in steps
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
## First thing first

**Steps**  
1\. Install Visual Studio 2015 Update 2 or higher.  
  
2\. Download the project template zip from [here](http://aka.ms/bf-bc-vstemplate)  
Save the file to %USERPROFILE%\\Documents\\Visual Studio 2015\\Templates\\ProjectTemplates\\Visual C#.  
  
3\. Install the BotFrameworks which gives the Bot Emulator  
[here](https://emulator.botframework.com/)  
  
4\. Build the project and launch on the browser  
  
5\. Open emulator and add the your url `http://localhost:3978/api/messages`
port number 3978 may vary based on the the endpoint launch and leave the MicrosoftAppId field and MicrosoftAppPassword field empty  
  
6\. To check the bot is working  
In emulator bottom Text Box enter a message say hello, this message will be echoed back to you, like below  
You sent hello which was 5 characters  
  
**Reference:**  
Microsoft [documentation](https://docs.botframework.com/en-us/csharp/builder/sdkreference/gettingstarted.html)
