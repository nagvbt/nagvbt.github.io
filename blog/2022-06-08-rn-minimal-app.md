---
authors: nagvbt
tags: [React Native]
---

# React Native minimal app component

Minimal code required to start a React-Native component is

a. An App Class which extends from React.Component

b. styles that are created from `StyleSheet.Create({})`
<!--truncate-->

```jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
```
