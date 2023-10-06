---
title: "Example: $on and $broadcast in angular"
tags: ["Angular"]
---
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
# $on and $broadcast in angular

## With out Arguments

To $broadcast use the $rootScope:

```js
$scope.startCamera = function() { $rootScope.$broadcast('camera-started'); }
```

To receive, use the $scope of your controller:

```js
$scope.$on('camera-started', function(event, args) { // do something });
```

## With Arguments

To pass arguments when you $With out Arguments:

```js
$rootScope.$broadcast('camera-started', { any: {} }); To receive arguments :

$scope.$on('camera-started', function(event, args) { var anyArg = args.any;  // do something });
```
