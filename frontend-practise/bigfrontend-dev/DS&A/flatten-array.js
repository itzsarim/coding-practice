let arr = [4,[2,3,1],6,[12,[66,23,[21,34]]]];

let flattenHelper = (arr, result) => {

    arr.forEach((elem) => {
        if(!Array.isArray(elem)) {
            result.push(elem);
        } else {
            flattenHelper(elem, result);
        }
    })
    return;
}

let flatten = (arr) => {
    let result = [];
    flattenHelper(arr,result);
    return result;
}

console.log(flatten(arr));