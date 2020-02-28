//-------------------------

function outer() {
  var b = 1;
  function inner() {
    b++;
    console.log(b);
    var b = 3;
    console.log(b);
  }
  inner();
}

outer();

//----------------------

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));


//-----------------
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

/*
 determines if the input is Integer or not
 @param value x
 @returns if true if value is integer else false
*/
function isInteger(x) {
    if (typeof x === 'number' && x%1 === 0) {
        return true;
    }
    return false;
}
console.log(isInteger(1.1));

module.exports.isInteger = isInteger;

/* 
palindrome
@param string x
@return true if palindrome false otherwise
*/

const isPalindrome = (x) => {
    if (typeof x !== 'string' || !x) {
      return false;
    }
  
    return x === x.split('').reverse().join('');
}

console.log(isPalindrome('kayak'));

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
*/

const sum = (...arg) => {
    if(!arg || arg.length === 0) {return null;}
    else if(arg.length === 1) {
      return function(y) { return arg[0]+y }
    }
    return arg.reduce((a,b) => a+b);
  }
console.log(sum(2,3,4,5));

/* 
closure example
*/

function outer() {
    let arr = [];
    for(let i=0; i<5; i++) {
        arr.push(function inner () {
            console.log(i);
        });
    }
    arr[3]();
}
outer();
