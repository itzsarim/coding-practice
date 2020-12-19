/*
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one.
*/

let aclean = (arr) => {
    let map = new Map();
    arr.forEach((elem) => {
        let sortedElem = elem.split('').sort().join('').toLowerCase();
        if(!map.has(sortedElem)) {
            map.set(sortedElem, elem);
        }
    })

    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));