// Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified. For example:

// console.log('hello'.repeatify(3));
// Should print hellohellohello.

String.prototype.repeatify = String.prototype.repeatify || function(count) {
    if(typeof count !== 'number' || count === null) {
        throw new Error();
    }
    let result = '';
    for(let i=0; i<count; i++) {
        result += this;
    }
    return result;
}

console.log('hello'.repeatify('s'));