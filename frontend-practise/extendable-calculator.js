/*
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
*/

class Calculator {

    constructor() {
        this.methods = {
            "+": (a,b) => a + b,
            "-": (a,b) => a - b
        }
    }

    /*
    * @param {string} NUMBER operator NUMBER
    * @return
    *      
    * */
    calculate(expression) {
        let eprarr = expression.split(' ');
        let num1,num2,operator;
        if (eprarr.length !== 0) {
            num1 = parseInt(eprarr[0]);
            num2 = parseInt(eprarr[2]);
            operator = eprarr[1];
        }
        if (isNaN(num1) || isNaN(num2) || typeof operator === 'undefined') {
            return 'string expression should be in the form of NUMBER operator NUMBER';
        } else {
            return this.methods[operator] ? this.methods[operator](num1,num2) : 'operator not supported';
        }
    }
}

let calc = new Calculator;

Calculator.prototype.addMethod = function(name, func) {
    this.methods[name] = func;
}

console.log( calc.calculate("3 + 7") );
console.log( calc.calculate("3 * 7") );
console.log( calc.calculate("3 / 7") );

calc.addMethod('*', (a,b) => a*b);
calc.addMethod('/', (a,b) => a/b);
calc.addMethod('**', (a,b) => a**b);

console.log( calc.calculate("3 + 7") );
console.log( calc.calculate("3 * 7") );
console.log( calc.calculate("3 / 7") );
console.log( calc.calculate("3 ** 7") );
