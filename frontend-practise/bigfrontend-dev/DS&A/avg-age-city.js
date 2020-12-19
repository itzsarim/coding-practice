// Input:
// [{ name: ‘john’, city : ‘Honolulu’, age: 31},
// {name: ‘Kat’, city : ‘Austin’, age: 21},
// {name: ‘Adam’, city : ‘Honolulu’, age: 18},
// {name: ‘May’, city : ‘Honolulu’, age: 62},
// {name: ‘Pat’, city : ‘San Jose’, age: 67},
// {name: ‘Jake’, city : ‘Austin’, age: 80}
// }]

// Output: 
// {
// Honolulu : (31+18+62)/3
// Austin: (21+80)/2
// San Jose: 67
// }

function ageAvgByCity(data) {
    if(typeof data !== 'object') {
        throw Error('data invalid');
    }

    let map = {};

    data.forEach((entry) => {
        for(key in entry) {
            if(key === 'city') {
                if(!map[entry[key]]) {
                    map[entry[key]] = [entry['age']];
                } else {
                    map[entry[key]].push(entry['age']);
                }
            }
        }
    })

    for(key in map) {
        map[key] = map[key].reduce((acc,elem) => elem+=acc, 0) / map[key].length;
    }
    return map;
}

const input = 
[{ 'name': 'john', 'city' : 'Honolulu', 'age': 31},
{'name': 'Kat', 'city' : 'Austin', 'age': 21},
{'name': 'Adam', 'city' : 'Honolulu', 'age': 18},
{'name': 'May', 'city' : 'Honolulu', 'age': 62},
{'name': 'Pat', 'city' : 'SanJose', 'age': 67},
{'name': 'Jake', 'city' : 'Austin', 'age': 80}
]

console.log(ageAvgByCity(input));

