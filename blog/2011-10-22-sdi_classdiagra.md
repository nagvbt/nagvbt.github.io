---
title: "Single Document Interface Class Diagram"
date: "2011-10-22"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

A CSDIApp MFC application will have a single CWinApp class object. This holds a CDocManager object which is used by the MFC to handle all the CDocTemplate objects that we registered with the framework.

The CWinApp object also creates a CMainFrame object which is the main window of CSDIApp application.

Every time if we open/create a document in CSDIApp application, a CDocument object of the right type will be created. A pointer to CDocument object will be stored in a list under the corresponding CDocTemplate object.
