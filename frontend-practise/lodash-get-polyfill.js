// _.set(object, path, value)
//Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.
// var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
// _.set(object, 'a[0].b.c', 4);
// console.log(object.a[0].b.c);
// // => 4
 
// _.set(object, ['x', '0', 'y', 'z'], 5);
// console.log(object.x[0].y.z);
// => 5

function set (obj, path, value) {
    if(obj) 
}