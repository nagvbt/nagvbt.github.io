---
tags: ["COM"]
---

# COM Containment and Aggregation
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033-->

Containment and aggregation are techniques in which one component uses another component. Those two components are outer component, inner component. Outer component contains the inner component.

<table border="1" cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="343"><strong>Containment</strong></td><td valign="top" width="343"><strong>Aggregation</strong></td></tr><tr><td valign="top" width="343">Outer component re implement the interface say IY of inner component by forwarding calls to the inner component.</td><td valign="top" width="343">Outer component will not re implement the interface say IY of inner component. Instead the outer component passes the inner component interface pointer say IY directly to the client.</td></tr><tr><td valign="top" width="343">Outer component is client to inner component</td><td valign="top" width="343">Inner component will be directly used by the client</td></tr></tbody></table>
