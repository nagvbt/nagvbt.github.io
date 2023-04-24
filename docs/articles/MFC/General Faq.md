#FAQ

## MFC & VC++ Version Numbers
| MFC version |	Visual C++ version |
| ----  | --- |
|1.0 |	Microsoft C/C++ 7.0 |
|2.0|	Visual C++ 1.0
|2.5	|Visual C++ 1.5
|3.0	|Visual C++ 2.0
|3.1	|Visual C++ 2.1
|3.2	|Visual C++ 2.2
|4.0	|Visual C++ 4.0
|4.1	|Visual C++ 4.1
|4.2	|Visual C++ 4.2
|4.21 (mfc42.dll)|	Visual C++ 5.0
|6.0 (mfc42.dll)|	Visual C++ 6.0
|7.0 (mfc70.dll)	|Visual C++ .NET 2002
|7.1 (mfc71.dll)	|Visual C++ .NET 2003
|8.0 (mfc80.dll)	|Visual C++ 2005

## What is a message map, and what is the purpose of message map instead of virtual function?
Message Map is a logical table that maps the windows messages to the member functions of the class.
Message map is to avoid following drawbacks:
 
1. Most windows only process a small number of messages, yet each window require to giant virtual function table with the entries of each message.
 
2. more efficient and use less space then virtual functions
 
3. Virtual functions don't handle user defined messages and other custom cases.

## Explain about PostMessage/SendMessage ?

**PostMessage**

Places (posts) a message in the message queue associated with the thread that created the specified window and returns without waiting for the thread to process the message.
To post a message in the message queue associated with a thread, use the PostThreadMessage function.
Syntax
```cpp
BOOL WINAPI PostMessage(
  __in_opt  HWND hWnd,
  __in      UINT Msg,
  __in      WPARAM wParam,
  __in      LPARAM lParam
);
```
 
**SendMessage**

Sends the specified message to a window or windows. The SendMessage function calls the window procedure for the specified window and does not return until the window procedure has processed the message.
To send a message and return immediately, use the SendMessageCallback or SendNotifyMessage function. To post a message to a thread's message queue and return immediately, use the PostMessage or PostThreadMessage function.
Syntax
```cpp
LRESULT WINAPI SendMessage(
  __in  HWND hWnd,
  __in  UINT Msg,
  __in  WPARAM wParam,
  __in  LPARAM lParam
);
```
 
## Message Map vs Virtual Functions ?
Message Map is a logical table that maps the windows messages to the member functions of the class. Message map is to avoid following drawbacks:

1. Most windows only process a small number of messages, yet each window require to giant virtual function table with the entries of each message.

2. more efficient and use less space then virtual functions.

3. Virtual functions don't handle user defined messages and other custom cases.
