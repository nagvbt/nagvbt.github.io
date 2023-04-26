---
title: "Console Application Event Handling"
date: "2011-09-03"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "mfc"
  - "vc"
  - "win32"
---

Using **SetConsoleCtrlHandler** we can Add an application-defined HandlerRoutine function say myConsoleHandler.

**Note:** If the second parameter is TRUE, the handler is added; if it is FALSE, the handler is removed by SetConsoleCtrlHandler function.

**Sample code is Shown Below**

```c
#include "stdafx.h"
#include "windows.h"

void myConsoleHandler(DWORD ctrlEvent)
{
   switch(ctrlEvent)
   {
        case CTRL\_CLOSE\_EVENT:
            MessageBox(NULL,"Program being closed!","CTRL\_CLOSE\_EVENT",MB\_OK);
        break;

        case CTRL\_C\_EVENT:
            MessageBox(NULL,"Copy Event!","CTRL\_C\_EVENT",MB\_OK);
        break;
   }

}

int main(int argc, \_TCHAR\* argv\[\])
{
    SetConsoleTitle("Console Event Handler Demo");

    if(SetConsoleCtrlHandler((PHANDLER\_ROUTINE)myConsoleHandler, TRUE))
    {
         printf( "nThe Control Handler is installed.n" );
         printf( "n -- Now try pressing Ctrl+C or closing the console..." );
         while(1)
         {
           //Do Nothing
         }
    }
    else
    {
        printf( "nERROR: Could not set control handler");
        return 1;
    }
    return 0;
}
```
