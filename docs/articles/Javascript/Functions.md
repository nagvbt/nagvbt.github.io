<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052 mD041-->
```js
// 1: Assigning the result to something
var x = function() {
};

// 2: Passing the result into a function
bar(function() {
});

// 3: Calling the function immediately
(function(){
})();

// 4: Also calling the function immediately (parens at end are different)
(function(){
}());

// 5: Also calling the function immediately
!function(){
}();
```
