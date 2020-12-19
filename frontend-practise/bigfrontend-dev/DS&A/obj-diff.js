let obj1 = {'a':{'b':{'c':2, 'd': 5, 'e': 5}}};
let obj2 = {'a':{'b':{'c':2, 'd': 4, 'e': 5}}};


function diff(obj1,obj2) {
    if(typeof obj1 != 'object' || typeof obj2 != 'object' || obj1 == null || obj2 == null) {
        return;
    }

    let q = [];
    let newObj1 = Object.create(obj1);
    let newObj2 = Object.create(obj2);
    for (key in newObj1) {
        q.push(key);
    }
    while(q.length!=0) {
        let child = q.shift();

        if(typeof newObj1[child] === 'object') {
            for(key in newObj1[child]){
                q.push(key);
            }
            newObj1 = newObj1[child];
            newObj2 = newObj2[child];
        } else {
            if(newObj1[child] !== newObj2[child]) {
                return child;
            } 
        }
    }
    return '';
}

console.log(diff(obj1,obj2)); // d