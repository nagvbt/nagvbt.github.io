---
tags: ["COM"]
---

# COM Threading Models
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033-->
COM Threading Models / Apartment Model

**Definition**: Multithreading in COM is referred to as the apartment model in COM

**_Apartment_**

The COM apartment is a conceptual entity that allows us to think about components and their clients in a logical way

- An apartment is not a thread, but a thread belongs to only one apartment.

- An apartment is not an instance of a COM object, but each COM instance belongs to only one apartment.

- A process can have one or more apartments, depending on its implementation.

- Apartments are created or entered by calling the CoInitialize or CoInitializeEx function. Each thread that calls CoInitialize(0) or CoInitializeEx( 0, COINIT\_APARTMENTTHREADED )

1. STA (Single Threaded Apartment) : Only One thread can join this Apartment.
2. MTA (MultiThreaded Apartment): Multiple threads can join this Apartment.

**_Differences between STA and MTA_**

<table border="1" cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="33"><strong>No</strong></td><td valign="top" width="515"><strong>Feature</strong></td><td valign="top" width="72"><strong>STA</strong></td><td valign="top" width="67"><strong>MTA</strong></td></tr><tr><td valign="top" width="33">1</td><td valign="top" width="515">Synchronization provided by COM</td><td valign="top" width="72">YES</td><td valign="top" width="67">NO</td></tr><tr><td valign="top" width="33">2</td><td valign="top" width="515">Uses Windows message queues</td><td valign="top" width="72">YES</td><td valign="top" width="67">NO</td></tr><tr><td valign="top" width="33">3</td><td valign="top" width="515">Can have multiple threads in an apartment</td><td valign="top" width="72">NO</td><td valign="top" width="67">YES</td></tr><tr><td valign="top" width="33">4</td><td valign="top" width="515">Must marshal interface pointers between the threads in the same apartment</td><td valign="top" width="72">N/A</td><td valign="top" width="67">YES</td></tr><tr><td valign="top" width="33">5</td><td valign="top" width="515">Must marshal interface pointers between apartments</td><td valign="top" width="72">YES</td><td valign="top" width="67">YES</td></tr><tr><td valign="top" width="33">6</td><td valign="top" width="515">Must call Coinitialize() in every thread that uses a COM Service</td><td valign="top" width="72">YES</td><td valign="top" width="67">YES</td></tr><tr><td valign="top" width="33">7</td><td valign="top" width="515">Performance</td><td valign="top" width="72">Slow</td><td valign="top" width="67">Fast</td></tr></tbody></table>

**NOTE**: ATL object wizard allows you to set the threading model. The values can be

<table border="1" cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="272">Threading Model</td><td valign="top" width="228">Description</td></tr><tr><td valign="top" width="272">Single / No Value</td><td valign="top" width="228">Object knows nothing about threads</td></tr><tr><td valign="top" width="272">Apartment</td><td valign="top" width="228">STA</td></tr><tr><td valign="top" width="272">Free</td><td valign="top" width="228">MTA</td></tr><tr><td valign="top" width="272">Both</td><td valign="top" width="228">Both STA &amp; MTA</td></tr></tbody></table>
