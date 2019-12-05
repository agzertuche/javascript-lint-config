// !IMPORTANT NOTE: this is a sample file with JavaScript errors in order to fix them using static analysis tools

// ----------------------------------
// CLASESS
// ----------------------------------
class MyClass {
  name: string
  constructor() {
    this.name = 'MyClass...'
  }

  sayHi(): void {
    console.log('Hi ' + this.name)
  }
}

const myClassInstance = new MyClass()
myClassInstance.sayHi()
