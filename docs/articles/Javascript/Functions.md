
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