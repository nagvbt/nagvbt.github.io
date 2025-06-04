# .Net Framework FAQ
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033-->
## 1. Define C# ?

C# is a general-purpose object-oriented programming language designed by Microsoft. It is loosely based on C/C++, and is very similar to Java.

## 2. What is .NET Framework ?

.NET Framework is an integrated environment in which we can code, compile execute and deploy language independent applications.

## 3. What are the major components  of .NET Framework ?

The .NET framework has two major components.

1. Common Language Runtime (CLR)  or .NET runtime
2. Class Library

## 4. What is CLR ?

CLR is the heart of the .NET framework. CLR is the .Net framework runtime execution environment. It takes MSIL, collects all base class libraries and assembly manifest and generates native code.

## 5. How source code is converted to Native code in .Net ?

Source Code  Language Compiler  MSIL   CLR   JIT -> Native Code
Compilation occurs in two steps in .NET:

1. Compilation of source code to Microsoft Intermediate Language (IL).
2. Compilation of IL to platform-specific code by the CLR.

## 6. What is a IL or What is MSIL or CIL , What is JIT ?

Intermediate Language (IL) is also known as MSIL (Microsoft Intermediate Language) or CIL (Common Intermediate Language). All .NET source code is compiled to IL. This IL is then converted to machine code at the point where the software is installed, or at run-time by a Just-In- Time (JIT) compiler.

## 7. What are the responsibilities of CLR ?

1. Garbage Collection
2. Code Access Security
3. Code Verification
4. IL-Native translators or optimizers

## 8. Define Garbage Collection ?

CLR automatically manages memory thus eliminating memory leaks. When objects are not referred GC automatically releases those memories thus providing efficient memory management.

## 9. Explain about Code Access Security (CAS) ?

CAS grants rights to the program depending upon the security configuration of the machine - Example: Program has right to delete a file but the security configuration of machine does not allow the program to delete the file. CAS will take care that the program runs under the security configuration of machine.

## 10. Explain Code Verification ?

Code Verification prevents the source code to perform illegal operation such as accessing invalid memory locations. It ensures proper code execution and type safety while code runs.

## 11. Explain about IL-Native translators or optimizers ?  

CLR uses JIT to compile IL to machine code and executes. CLR also determines depending on the platform what is optimized way of running the IL code.

## 12. What is the difference between Managed code and Un Managed code ?

***Managed Code:***
Code running under the control of the CLR is often termed managed code. Code which gives information about itself to the runtime. The .NET framework provides several core run-time services to the programs that run within it. For example exception handling and security. For these services to work the code must provide a minimum level of information to runtime. Such code is called as Managed Code.

***Un Managed code:***
VB6 or VC++ component they are unmanaged code as .NET runtime (CLR) does not have control over the source code execution of the language.

## 13. Explain about Managed Data ?

Managed data is the data for which memory management is done by .NET runtime’s garbage collector this includes tasks for allocation de-allocation.

## 14. Explain about CTS: Common type system ?

- CTS defines a predefined set of data types supported by .net framework to provide language interoperability.
- To communicate one language with another language smoothly, CLR has CTS.

***Example:*** VB6 “Integer” data type is not compatible with c++ “long” type. With CTS, both are converted to System.int32, which is a data type of CTS.

## 15. What is Interoperability ?

Interoperability is a interaction between managed code and unmanaged code.

## 16. Explain about CLS: Common Language Specification ?

CLS is a minimum set of standards that all compilers targeting .net must support. It is a subset of the CTS. Or CLS is a Guidelines that a language must follow in order to communicate with other .NET languages in a seamless manner.
