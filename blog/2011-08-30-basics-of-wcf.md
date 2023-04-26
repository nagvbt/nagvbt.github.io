---
title: "Basics of WCF"
date: "2011-08-30"
categories: 
  - "wcf"
---

**Definition of WCF** 

Windows Communication Foundation (WCF) is a framework for building service-oriented applications. Using WCF we can build secure, reliable, transacted solutions that integrate across platforms.

WCF is a unified framework which provides :

1\. NET Remoting 2.Distributed Transactions 3.Message Queues and 4.Web Services into a single service-oriented programming model for distributed computing.

WCF interoperate between WCF-based applications and any other processes that communicate via SOAP (Simple Object Access Protocol) messages.

**Features of WCF**

1. Service Orientation
2. Interoperability
3. Multiple Message Patterns
4. Service Metadata
5. Data Contracts
6. Security
7. Multiple Transports and Encodings
8. Reliable and Queued Messages
9. Durable Messages
10. Transactions
11. AJAX and REST Support
12. Extensibility

To know more about features of WCF see: [http://msdn.microsoft.com/en-us/library/ms733103.aspx](http://msdn.microsoft.com/en-us/library/ms733103.aspx)

**Terms of WCF**

A WCF service is exposed to the outside world as a collection of endpoints.

**1\. Endpoint:** Endpoint is a construct at which messages are sent or received (or both). Endpoint comprises of **ABC's** 

**_What are ABC's of WCF ?_** 

_**A. Address**_ - Address is a location that defines where messages can be sent

**_B. Binding_** - Binding is a specification of the communication mechanism (a binding) that described how messages should be sent

**_C. Contract_** - Contract is a definition for a set of messages that can be sent or received (or both) at that location (a service contract) that describes what message can be sent.

**2\. Service:** A construct that exposes one or more endpoints, with each endpoint exposing one or more service operations.

**3\. Contracts:** A contract is a agreement between two or more parties for common understanding and it is a is a platform-neutral and standard way of describing what the service does. In WCF, all services expose contracts. 

Types of Contracts: 1) Operation Contract: An operation contract defines the parameters and return type of an operation.

```cs \[OperationContract\] double Add(double i, double j); ```

2) Service Contract: Ties together multiple related operations contracts into a single functional unit.

```cs \[ServiceContract\] //System.ServiceModel public interface IMath { \[OperationContract\] double Add(double i, double j); \[OperationContract\] double Sub(double i, double j); \[OperationContract\] Complex AddComplexNo(Complex i, Complex j); \[OperationContract\] Complex SubComplexNo(Complex i, Complex j); } ```

3) Data Contract: The descriptions in metadata of the data types that a service uses.

```cs // Use a data contract \[DataContract\] //using System.Runtime.Serialization public class Complex { private int real; private int imaginary;

\[DataMember\] public int Real { get; set; }

\[DataMember\] public int Imaginary { get; set; } } ```

**\*\*[Click here to read step by step tutorial with complete source code !](http://nagvbt.blogspot.com/articles/wcf-tutorials/) \*\***
