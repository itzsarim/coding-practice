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

// sort in decreasing order

const decreasingOrder = (arr) => {
    return arr.slice().sort((a,b) => {
        return b-a;
    })
}
const input = [5, 2, 1, -10, 8];
console.log('decreasing order of ', input, 'is ', decreasingOrder(input));

/*
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code 

* alert( names ); // John, Pete, Mary
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let mapToNames = (users) => {
    return users.map(elem => elem.name);
}

let names = mapToNames(users);
console.log(names);

/*
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O
*/

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let unique = (arr) => {
    let set = new Set(arr);
    return Array.from(set);
}

console.log( unique(strings) );



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

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  let groupById = (users) => {
    return users.reduce((obj, user) => { obj[user.id] = user; return obj }, {})
  }

  console.log(groupById(users));
/*
https://javascript.info/task/calculator-extendable
*/