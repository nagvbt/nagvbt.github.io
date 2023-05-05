---
tags: ["MFC"]
---

# Message Map vs Virtual Functions

Message Map is a logical table that maps the windows messages to the member functions of the class. Message map is preferred than virtual functions due  to avoid following drawbacks:

1. Most windows only process a small number of messages, yet each window require to giant virtual function table with the entries of each message. 

2. More efficient and use less space then virtual functions. 

3. Virtual functions don't handle user defined messages and other custom cases.
