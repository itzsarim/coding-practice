// find the index in an unsorted array where the target will be inserted if it were sorted
// eg: [4,1,3,5] target 2

const findIndex = (arr, target) => arr.reduce((accumulator, current) => target > current ? ++accumulator : accumulator, 0)

const arr = [4,1,3,5];
const target = 2;
console.log('the target will be inserted at position', findIndex(arr, target));