// !IMPORTANT NOTE: this is a sample file with JavaScript errors in order to fix them using static analysis tools

// ----------------------------------
// ARRAYS
// ----------------------------------
var myArray = null;
if (myArray.length === 0) {
  console.log("Your array is empty... 🤷‍♂️")
}

console.group("vowels")
"aeiou".map((vowel, index) => console.log(`${index}: ${vowel}`));
console.groupEnd("vowels")
