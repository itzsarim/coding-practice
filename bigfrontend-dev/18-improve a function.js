// Given an input of array, 
// which is made of items with >= 3 properties

let items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { color: 'blue', type: 'book', age: 17 }
]

// an exclude array made of key value pair
const excludes = [
    { k: 'color', v: 'silver' },
    { k: 'type', v: 'tv' }
]

function excludeItems(items, excludes) {
    return items.filter((item) => {
        let bool = true;
        for (let i = 0; i < excludes.length; i++) {
            let obj = excludes[i];
            if (item[obj.k] == obj.v) {
                bool = false;
                break;
            }
        }
        return bool;
    })
}

function excludeItemsOptimized(items, excludes) {
    // preprocess excludes
    // create a map with key as property and value as set of values with this property
    // eg:- {color: [red, silver], type: [tv, phone]}
    let excludesMap = new Map();
    excludes.forEach((obj) => {
        if(!excludesMap.has(obj.k)) {
            let set = new Set();
            excludesMap.set(obj.k, set.add(obj.v));
        } else {
            excludesMap.get(obj.k).add(obj.v);
        }
    })

    return items.filter((item) => {
        let bool = true;
        let keys = Object.keys(item); // ['color', 'type', 'age']
        for(let i=0; i< keys.length; i++) {
            if(excludesMap.has(keys[i])) {
                if(excludesMap.get(keys[i]).has(item[keys[i]])){
                    bool = false;
                    break;
                }
            }
        }
        return bool;
    })
}

console.log(excludeItems(items, excludes));
console.log(excludeItemsOptimized(items, excludes));