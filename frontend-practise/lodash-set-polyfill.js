function set (obj, path, value) {

    if(typeof obj !== 'object' || !path || !value) {
        return;
    }
    let pathArr;
    let objRef = obj;
    if(!Array.isArray(path)) {
        if(typeof path === 'string') {
            pathArr = path.split('.');
        }
    } else {
        pathArr = path.slice();
    }

    pathArr.forEach((key,i, arr) => {
        if(i != arr.length-1) {
            if(objRef[key] === 'undefined') {
                objRef = {};
            } else {
                objRef = objRef[key];
            }
        } else {
            objRef[key] = value;
        }
    })
}


let obj = {'a': {'b':{'c': [{'d':3}, {'e':4}]}}}
console.log(obj.a.d);
set(obj, 'a.d', 5);
console.log(obj.a.d);
// console.log('obj before', obj.a.b.c[0].d);
// set(obj,'a.b.c.0.d', 5);
// console.log('obj after',obj.a.b.c[0].d);