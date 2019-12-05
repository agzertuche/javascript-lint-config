// !IMPORTANT NOTE: this is a sample file with JavaScript errors in order to fix them using static analysis tools

// ----------------------------------
// FUNCTIONS
// ----------------------------------
const addTwoNumbers = (x: number, y: number): number => {
  return x + y
}
console.assert(addTwoNumbers(1, 2) === 3, 'Should be equal to 3')

const createFooObject = (): {foo: number} => ({
  foo: 1,
})

console.assert(createFooObject().foo == 1, 'Foo value should be equal to 1')
