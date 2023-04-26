---
title: "Example: $on and $broadcast in angular"
date: "2017-01-10"
categories: 
  - "angular"
tags: 
  - "angularjs"
---

## With out Arguments:

To $broadcast use the $rootScope:

$scope.startCamera = function() {     $rootScope.$broadcast('camera-started'); }

To receive, use the $scope of your controller:

$scope.$on('camera-started', function(event, args) {     // do something });

## With Arguments:

To pass arguments when you $With out Arguments:

$rootScope.$broadcast('camera-started', { any: {} }); To receive arguments :

$scope.$on('camera-started', function(event, args) {     var anyArg = args.any;     // do something });
