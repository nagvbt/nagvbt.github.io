# WCF Step by Step Tutorial

## Basics of WCF

### Definition of WCF

Windows Communication Foundation (WCF) is a framework for building service-oriented applications. Using WCF we can build secure, reliable, transacted solutions that integrate across platforms.

WCF is a unified framework which provides :

1. NET Remoting
2. Distributed Transactions
3. Message Queues and
4. Web Services into a single service-oriented programming model for distributed computing.

WCF interoperate between WCF-based applications and any other processes that communicate via SOAP (Simple Object Access Protocol) messages.

### Features of WCF

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

To know more about features of WCF see: [http://msdn.microsoft.com/en-us/library/ms733103.aspx](http://msdn.microsoft.com/en-us/library/ms733103.aspx)

### Terms of WCF

A WCF service is exposed to the outside world as a collection of endpoints.

**1\. Endpoint:** Endpoint is a construct at which messages are sent or received (or both). Endpoint comprises of **ABC's**

**_What are ABC's of WCF ?_**

**_A. Address_** - Address is a location that defines where messages can be sent

**_B. Binding_** - Binding is a specification of the communication mechanism (a binding) that described how messages should be sent

**_C. Contract_** - Contract is a definition for a set of messages that can be sent or received (or both) at that location (a service contract) that describes what message can be sent.

**2\. Service:** A construct that exposes one or more endpoints, with each endpoint exposing one or more service operations.

**3\. Contracts:** A contract is a agreement between two or more parties for common understanding and it is a is a platform-neutral and standard way of describing what the service does. In WCF, all services expose contracts.

### Types of Contracts:

1. Operation Contract: An operation contract defines the parameters and return type of an operation.

```cs
[OperationContract]
double Add(double i, double j);
```

2. Service Contract: Ties together multiple related operations contracts into a single functional unit.

```cs
[ServiceContract] //System.ServiceModel
public interface IMath
{
[OperationContract]
double Add(double i, double j);
[OperationContract]
double Sub(double i, double j);
[OperationContract]
Complex AddComplexNo(Complex i, Complex j);
[OperationContract]
Complex SubComplexNo(Complex i, Complex j);
}
```

3. Data Contract: The descriptions in metadata of the data types that a service uses.

```cs
// Use a data contract
[DataContract] //using System.Runtime.Serialization
public class Complex
{
private int real;
private int imaginary;

[DataMember]
public int Real { get; set; }

[DataMember]
public int Imaginary { get; set; }
}
```

## **WCF Step by Step Tutorial**

This is the Basic WCF Tutorial 'wcfMathSerLib' will be created in a step by step approach. This 'wcfMathSerLib' will be tested by 'ConsoleMathClient' and with 'WCF Test Client'

**Steps for creating wcfMathSerLib**

1. Open Visual Studio 2010 and File->NewProject
2. select WCF in 'Recent Templates'
3. select 'WCF Service Library'
4. Give Name as wcfMathServiceLibrary
5. Click OK
6. Delete IService1.cs and Service1.cs
7. Add IMath.cs and MathService.cs and add the code listed below

**IMath.cs**

```cpp
using System.Runtime.Serialization;
using System.ServiceModel;

namespace WcfMathServLib
{
[ServiceContract] //System.ServiceModel
public interface IMath
{
[OperationContract]
double Add(double i, double j);
[OperationContract]
double Sub(double i, double j);
[OperationContract]
Complex AddComplexNo(Complex i, Complex j);
[OperationContract]
Complex SubComplexNo(Complex i, Complex j);
}
// Use a data contract
[DataContract] //using System.Runtime.Serialization
public class Complex
{
    private int real;
    private int imaginary;

    [DataMember]
    public int Real { get; set; }

    [DataMember]
    public int Imaginary { get; set; }
}&amp;lt;/code&amp;gt;&amp;lt;/pre&amp;gt;

}
```

**MathService.cs**

```cpp
namespace WcfMathServLib
{
  public class MathService : IMath
  {
        public double Add(double i, double j)
        {
            return (i + j);
        }

        public double Sub(double i, double j)
        {
            return (i - j);
        }

        public Complex AddComplexNo(Complex i, Complex j)
        {
            Complex result = new Complex();
            result.Real = i.Real + j.Real;
            result.Imaginary = i.Imaginary + j.Imaginary;
            return result;
        }

        public Complex SubComplexNo(Complex i, Complex j)
        {
            Complex result = new Complex();
            result.Real = i.Real - j.Real;
            result.Imaginary = i.Imaginary - j.Imaginary;
            return result;
        }
  }
}
```

4. Modify the App.config file as shown

**App.config**

```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>

<system.web>
<compilation debug="true" />
</system.web>

<system.sericeModel>
<services>
<service name="WcfMathServLib.MathService">
  <host>
      <baseAddresses>
        <add baseAddress = "http://localhost:8732/Design\_Time\_Addresses/WcfMathServLib/MathService/" />
      </baseAddresses>
    </host>

    <!-- Service Endpoints -->
    <endpoint address ="" binding="wsHttpBinding" contract="WcfMathServLib.IMath">
      <identity>
        <dns value="localhost"/>
      </identity>
    </endpoint>

    <!-- Metadata Endpoints -->
    <endpoint address="mex" binding="mexHttpBinding" contract="IMetadataExchange"/>
  </service>
</services>
<behaviors>

  <serviceBehaviors>
    <behavior>
       <serviceMetadata httpGetEnabled="True"/>
      <serviceDebug includeExceptionDetailInFaults="False" />
    </behavior>
  </serviceBehaviors>
</behaviors>
</system.sericeModel>

</configuration>
```

**Result Using WCF Test Client**

1. Run the WcfMathServLib project you will get the ‘WCF Test Client’
2. Select each method say ‘AddComplexNo’ Give the values in ‘Request’
3. Click on Invoke button
4. See the results in “Response”

## Steps for creating ConsoleMathClient

1. Open Visual Studio 2010 and File->NewProject
2. select Visual C#->Windows in ‘Installed Templates’
3. select ‘Console Application’
4. Give Name as ConsoleMathClient
5. Click OK
6. Go to ‘Solution Explorer’ Right click on ConsoleMathClient -> Select ‘Add Service Reference’ the below dialog will be displayed
7. Click on Discover button
8. Give namespace as ‘MathServiceReference’ and click OK

The service reference will be added now modify the program.cs as shown below.

**Program.cs**

```cpp
using System;
using ConsoleMathClient.MathServiceReference;

namespace ConsoleMathClient
{
  class Program
  {
    static void Main(string\[\] args)
    {
        Console.WriteLine(Press Enter to run the client....);
        Console.ReadLine();

        MathClient math = new MathClient();
        Console.WriteLine(Add of 3 and 2 = {0}, math.Add(3, 2));
        Console.WriteLine(Sub of 3 and 2 = {0}, math.Sub(3, 2));

        Complex no1 = new Complex();
        no1.Real = 3;
        no1.Imaginary = 3;

        Complex no2 = new Complex();
        no2.Real = 2;
        no2.Imaginary = 2;

        Complex result = new Complex();
        result = math.AddComplexNo(no1, no2);
        Console.WriteLine(Add of 3+3i and 2+2i = {0}+{1}i, result.Real, result.Imaginary);

        result = math.SubComplexNo(no1, no2);
        Console.WriteLine(Sub of 3+3i and 2+2i = {0}+{1}i, result.Real, result.Imaginary);

        Console.ReadLine();
    }
  }

}
```

**Result**

Compile and Run the project to see the Result
