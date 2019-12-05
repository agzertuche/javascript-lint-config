// !IMPORTANT NOTE: this is a sample file with JavaScript errors in order to fix them using static analysis tools

// ----------------------------------
// ARRAYS
// ----------------------------------
const myArray: Array<string> = []
if (myArray.length === 0) {
  console.log('Your array is empty... 🤷‍♂️')
}

console.group('vowels')

'aeiou'.split('').map((vowel, index) => console.log(`${index}: ${vowel}`))
console.groupEnd()
