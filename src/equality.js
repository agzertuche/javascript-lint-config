// !IMPORTANT NOTE: this is a sample file with JavaScript errors in order to fix them using static analysis tools

// ----------------------------------
// EQUALITY OPERATORS
// ----------------------------------
console.assert(1 == "1", "Loose equality");
console.assert(1 === "1", "Strict equality");

var myNumber = 8;
console.log("My number is:" + myNumber);
if (myNumber = 10) {
  console.log("You're wrong! 👎");
} else {
  console.log("You're right! 👍");
}
console.log("My number is:" + myNumber);
