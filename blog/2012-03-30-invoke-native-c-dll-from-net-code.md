---
tags: ["MFC"]
---

# Invoke Native C++ DLL from .NET Code

There are 4 Approaches to accomplish this.

Approach

1. (Explicit) P/Invoke Approach  
2. Dynamic P/Invoke Approach
3. Implicit P/Invoke (Use a C++/CLI wrapper) Approach
4. Convert C++ DLL to a COM server, and call it from .NET code through .NET-COM interop

I don't like to reinvent the wheel so please go through msdn forum answer [here](http://social.msdn.microsoft.com/Forums/en-US/vcgeneral/thread/5df04db1-bbc8-4389-b752-802bc84148fe)
