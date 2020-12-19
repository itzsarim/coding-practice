// You are given an array of N elements in the form "property1: value1; 
// property2: value2;...;propertyX: valueX;" for some some N and any X. 
// There is also another array of M elements of the form "property: value". 
// You are supposed to write an algorithm to remove every element in the N 
// length array that has a "property: value" pair 
// in the M length array.

var data = [
    { "car": "honda", "name": "John"},
    { "car": "bmw", "name": "Johnny", "os": "ios"},
    { "car": "toyota", "name": "JohnX", "os": "android"},
    ];

var filterArr = [{
    "car":"honda"
    }, {
    "os": "android"
    }];

function filter(data, filterArr) {
    if(!Array.isArray(data) || !Array.isArray(filterArr) || data.length === 0 || filterArr.length === 0) {
        return '';
    }
    // create map
    let map = new Map();
    filterArr.forEach((elem) => {
        let key = Object.keys(elem);
        map.set(key[0], elem[key[0]]);
    });

    data.forEach((elem, i) => {
        let keys = Object.keys(elem);
        keys.forEach((key) => {
            if(map.has(key)) {
                if(map.get(key) === elem[key]) {
                    // remove object from array
                    data.splice(i,1);
                }
            }
        })
    })
    return data;
}

console.log(filter(data, filterArr));

