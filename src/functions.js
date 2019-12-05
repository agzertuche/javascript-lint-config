// !IMPORTANT NOTE: this is a sample file with JavaScript errors in order to fix them using static analysis tools

// ----------------------------------
// FUNCTIONS
// ----------------------------------
var addTwoNumbers = (x, y) => {
  x + y;
};
console.assert(addTwoNumbers(1, 2), "Should be equal to 3");

var createFooObject = () => { 1; };
console.assert(createFooObject.foo == 1, "Foo value should be equal to 1");
