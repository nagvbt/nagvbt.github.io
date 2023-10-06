---
tags: ["MFC"]
---
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
# Message Map vs Virtual Functions

Message Map is a logical table that maps the windows messages to the member functions of the class. Message map is preferred than virtual functions due  to avoid following drawbacks:

1. Most windows only process a small number of messages, yet each window require to giant virtual function table with the entries of each message.

2. More efficient and use less space then virtual functions.

3. Virtual functions don't handle user defined messages and other custom cases.
