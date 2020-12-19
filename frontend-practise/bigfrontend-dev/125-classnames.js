/**
 * @param {any[]} args
 * @returns {string}
 */

function flatten(arr) {
    return arr.reduce((acc, elem) => Array.isArray(elem) ? acc.concat(flatten(elem)) : acc.concat(elem), [])
}

function getClassNames(...args) {
    let ans = [];
    classNames(args, ans);
    return ans.join(' ');
}

function classNames(args, ans) {
    // your code here
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] == 'string' || typeof args[i] == 'number') {
            ans.push(args[i]);
        }
        if (typeof args[i] == 'object') {
            if (Array.isArray(args[i])) {
                let flat = flatten(args[i]);
                classNames(flat, ans);
            } else {
                for (key in args[i]) {
                    if (args[i][key])
                        ans.push(key);
                }
            }
        }
    }
}

//console.log(classNames('BFE', 'dev', 100) );
const obj = new Map()
obj.cool = '!';
//console.log(classNames({BFE: [], dev: true, is: 3}, obj)); 
console.log(getClassNames(['BFE', [{dev: true}, ['is', [obj]]]]));