---
tags: ["Ionc", "Angular"]
---

# Ionic – AngularJS templates

The following code snippets demonstrates the format/template which can be used in Ionic or in Angularjs Applications


```js
/**************************
 * Controller 
 **************************/

(function () {
  'use strict';
  var injectParams = [ /* 'dependency1' */];
 
  function SampleCtrl( /* dependency1 */) {
    var SampleVm = this;
 
    //Bindable Properties and functions
    SampleVm.dummyProperty = '';
    SampleVm.dummyBindableFunc = dummyBindableFunc;
 
    //Functions
    function dummyBindableFunc() { 
    }
 
    function myNormalFunc() { 
    } 
  };
 
  SampleCtrl.$inject = injectParams;
  angular.module('app.myModule').controller('SampleCtrl', SampleCtrl);
})();


/**************************
 * Factory 
 **************************/
(function () {
  'use strict';
  var injectParams = [ /* 'dependency1' */];
 
  function sampleFactory( /* dependency1 */) {
    var exports = {
      getData: getData
    };
 
    return exports;
    ////////////////
 
    function getData() { 
    } 
  }
 
  sampleFactory.$inject = injectParams;
  angular.module('app.myModule').factory('sampleFactory', sampleFactory);
})();

/**************************
 * Filter 
 **************************/
(function () {
  'use strict';
 
  function sampleFilter() {
 
    return sampleFilterFunc;
    ////////////////
 
    function sampleFilterFunc(parameters) {
      return parameters;
    } 
  }
 
  angular.module('app.myModule').filter('sampleFilter', sampleFilter);
})();

/**************************
 * Directive 
 **************************/
(function () {
  'use strict';
  var injectParams = [ /* 'dependency1' */];
 
  function customDirective( /* dependency1 */) {
 
    var directive = {
      link: link,
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/myDirective/myDirective.html',
      controller: 'customController',
      controllerAs: 'custom'
    };
    return directive;
 
    function link(scope, element, attrs) {
    }
  };
 
  customDirective.$inject = injectParams;
  angular.module('app.myModule').directive('customDirective', customDirective);
})();
```