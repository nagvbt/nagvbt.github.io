---
title: "COM Threading Model vs Win32/MFC Threads"
date: "2012-06-18"
categories: 
  - "com-dcom-atl"
tags: 
  - "com"
---

# 1   Win32/MFC Threads

There are two types of win32/MFC threads.

1. **User-interface thread:** these types of threads are associated with one or more windows. These threads have message loops that keep the window alive and responsive to the users input.
2. **Worker thread:** these threads are associated with background processing and are not associated with a window. These types oh threads does not use message loops.

NOTE: A single process can have multiple user interface threads, multiple worker threads.

# 2   COM Threads

COM uses same type of threads with different names.

1. **Apartment threads (User Interface Thread):** This thread owns the component it creates. COM synchronizes, all calls to the component. The component does not need to be threading safe. COM does all of the marshaling and synchronization.
2. **Free threads (Worker Thread):** COM does not synchronize the calls. Ant thread can access the component. These are free to use. The component must be threading safe. Marshalling is not necessary and component’s job to synchronize.

NOTE: One process can have single apartment or multiple apartments. In-proc server is example for single process with different apartments (server apartment, client apartment both are in same exe).

Out of-proc server is example for single process with single thread.
