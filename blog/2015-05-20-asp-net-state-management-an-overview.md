---
tags: ["ASP.Net"]
---

# ASP.Net State Management: An overview

All the web applications uses HTTP protocol. By nature HTTP is a stateless protocol so after every web request, the client disconnects from server and the ASP.NET engine discards the objects that were created for the page. This will avoid running out of server memory.

### Levels of state management

1. Control level: In ASP.NET, by default controls provide state management automatically.
2. Variable or object level: In ASP.NET, member variables at page level are stateless and thus we need to maintain state explicitly.
3. Single or multiple page level: State management at single as well as multiple page level i.e., managing state between page requests.
4. User level: State should be preserved as long as a user is running the application.
5. Application level: State available for complete application irrespective of the user, i.e., should be available to all users.
6. Application to application level: State management between or among two or more applications.

**State Management techniques**

State Management techniques are based on client side and server side. Their functionality differs depending on the change in state, so here is the hierarchy:

**Client-side | Techniques**

Client-Side State Management techniques are:

- View State
- Hidden field
- Cookies
- Control State
- Query Strings

**Server-side | Technique**

Server-Side State Management techniques are:

- Session State
- Application State
