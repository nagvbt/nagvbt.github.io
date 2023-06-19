# Creating React Native app with Typescript and expo

## Steps

1. Using a Typescript expo Template to create an app

```ts
npx create-expo-app -t expo-template-blank-typescript
```

2. To run app in browser install

```ts
npx expo install react-dom react-native-web @expo/webpack-config
```

3. Install React native elements package to get the UI components and react-native-vector-icons for icons

```
yarn add react-native-elements
yarn add react-native-vector-icons
```

4. Install react-native-safe-area-context

```
npx expo install react-native-safe-area-context
```

Update your App.tsx

```tsx
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Text>Hello up App.tsx to start working on your app!</Text>
    </SafeAreaProvider>
  );
}
```

5. Run the app

After node_modules installed use below commands to start the app

```
yarn start

or

expo start
```
