//Translate border-left-width to borderLeftWidth

// const camelize = (str) => {
//     if(typeof str !== 'string' || str === null ) {
//         return false;
//     }
//     const uppercasefirstletter = (str) => {
//         return str[0].toUpperCase() + str.slice(1);
//     }

//     let splitstr = str.split('-');
//     let result = [splitstr[0]];
//     for(let i=1; i<splitstr.length;i++) {
//         result.push(uppercasefirstletter(splitstr[i]))
//     } 
//     return result.join('');
// }

const camelize = (str) => {
    if(typeof str !== 'string' || str === null ) {
        return false;
    }
    return str.split('-').map(
        (elem, index) => index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1)
    ).join('');
}

//console.log(camelize('border-left-width'));

/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array.
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
*/

const filterRange = (arr, a, b) => {
    if(!(arr instanceof Array) || typeof a !== 'number' || typeof b !== 'number') {
        return 0;
    }

    return arr.filter((elem) => elem >= a && elem < b);
}
let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));
console.log(arr);

/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20}
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/



/*
https://javascript.info/task/calculator-extendable
*/