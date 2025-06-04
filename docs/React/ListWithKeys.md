---
sidebar_position: 10
---

# List with keys

Warning: Each child in a list should have a unique "key" prop.

```jsx
//NameList.jsx

import React from "react";

const Name = ({ name }) => {
  return <li>{name.toUpperCase()} </li>;
};

const NamesList = ({ names }) => {
  let listItems = Object.keys(names).map((key, index) => (
    <Name key={key} name={names[key]}></Name>
  ));
  return <ul>{listItems}</ul>;
};

export default NamesList;


//App.jsx
import React from "react";
import NamesList from "./NamesList";

const names = {
  'id1' : 'Ram',
  'id2' : 'Sita',
  'id3' : 'Lakshman'
}

function App() {
  return (
    <div className="App">
      <NamesList names={names} />
    </div>
  );
}

export default App;

```
