---
title: "[Part-1: Main Function] C++, C#, Java Syntax Differences"
date: "2012-04-12"
categories: 
  - "csharp"
  - "c-cpp-mfc-vcpp"
  - "java"
tags: 
  - "cpp"
  - "csharp"
---

# **Main Function**

**1\. C++** Main function with out any arguments

```c void main() { cout<<"Hello World !!!"; } ```

Main function with commandline Arguments ```c int main(int argc, char\* argv\[\]) { cout<<"Hello World !!!"; return 1; } ``` **2\. C#** Main function with out any arguments ```cs using System; namespace CSharpSample { class Program { static void Main() { Console.WriteLine("Hello World !!!"); } } } ``` Main function with commandline Arguments ```cs using System; namespace CSharpSample { class Program { static int Main(string\[\] args) { Console.WriteLine("Hello World !!!"); return 1; } } } ``` **3\. Java** Main function with out any arguments - Not possible Compilation error java.lang.NoSuchMethodError: main Exception in thread "main" Main function with commandline Arguments \[sourcecode language="java"\] public class Program { public static void main(String args\[\]) { System.out.println( "Hello, World !!!" ); } } ```
