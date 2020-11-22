class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    printFullName(spouse) {
        console.log('full name',this.firstName, this.lastName, spouse);
    }
}

let person1 = new Person('Sarim', 'Zaidi');
let person2 = new Person('Uzma', 'Tafsir');

person1.printFullName.call(person2, 'Sarim');

// implement myCall method which behaves like call above

Function.prototype.mycall = function(thisArg, ...args) {
    // your code here
    thisArg = thisArg || window; // thisArg can be empty
    thisArg = Object(thisArg); // transform primitive value
    let func = Symbol(); // create a unique property 
    thisArg[func] = this; // assign the function to a unique method created on the context
    let res = thisArg[func](...args) // call the method with passed args
    delete thisArg[func]; // delete this unique method so as to not cause any sideeffects
    return res;
  }

person1.printFullName.mycall(person2, 'Sarim');

new Promise((resolve, reject) => {
    resolve(1)
    resolve(2)
    reject('error')
  }).then((value) => {
    console.log(value)
  }, (error) => {
    console.log('error')
  })