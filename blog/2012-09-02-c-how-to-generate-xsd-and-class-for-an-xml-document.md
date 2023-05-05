---
tags: ["CSharp"]
---

# C#: Generate xsd and class for an XML document

Using xsd.exe which will be install with the Visual studio can be used.  
Open Visual Studio Command Prompt and use the following commands

Setting environment for using Microsoft Visual Studio 2010 x86 tools.

C:Program Files (x86)Microsoft Visual Studio 10.0VC>cd C:

**C:>xsd CPPData.xml**

 Microsoft (R) Xml Schemas/DataTypes support utility
 \[Microsoft (R) .NET Framework, Version 4.0.30319.1\]
 Copyright (C) Microsoft Corporation. All rights reserved.
 Writing file 'C:CPPData.xsd'.
C:>xsd CPPData.xsd /classes
 Microsoft (R) Xml Schemas/DataTypes support utility
 \[Microsoft (R) .NET Framework, Version 4.0.30319.1\]
 Copyright (C) Microsoft Corporation. All rights reserved.
 Writing file 'C:CPPData.cs'.
C:>
