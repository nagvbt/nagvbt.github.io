---
title: "Basics of ActiveX Controls"
date: "2012-07-08"
categories: 
  - "com-dcom-atl"
tags: 
  - "atl"
---

**Definition:** ActiveX controls are COM components which are self-registering and Implements standard interfaces that deal specifically with GUI-based tasks such as rendering, sizing, activation, and property persistence.

An ActiveX control is anything you might see in the Toolbox of Visual studio (i.e. EditBox, combobox e.t.c) we can even use the Activex controls in web pages using

**Connectable Object**

_Connectable Object:_ is a COM Component or object that defines and uses an outgoing interface.

_Sink_: A client that implements the outgoing interface of a component is called sink.

**Control Container:** An application (Dialog or View ) that houses ActiveX control is called the control container. The control container communicates with a ActiveX control via methods and properties of a control.

**ActiveX Control Properties:** There are two types of properties 1.Stock Properties 2.Custom properties

1.Stock Properties Stack properties are common properties (Caption, foreground and background colors) that most controls expose. The COleControl data members provides stock properties implementation and also provides notification functions for the stock properties.

2.Custom properties Custom properties are the properties which are specific to the control. There are four different ways to implement Custom properties. a. Member variable: b. Member variable with notification function: c. Get/Set methods d. Parameterized (property array)

**ActiveX Control Methods** There are two types of methods 1.Stock methods 2.Custom methods

1.Stock methods The COleControl provides the stock methods implementation. there are only two stock properties DoClick() - fires an event from the control Refresh() - updates the control appearence

2.Custom methods Custom methods are the methods which are specific to the control.

**ActiveX Control Events** A member function of an outgoing interface is called an event. An activeX controlcan notify the containerof a state change using events. There are two types of Events 1.Stock Events 2.Custom Events

1.Stock Events The COleControl provides the common stock Events implementation like mouse button clicks and keyboard input.

2.Custom Events Custom Events are the events which are specific to the control.
