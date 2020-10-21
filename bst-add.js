
var createBST = require('./bst-createbst');


var sortedArr = [4,5,6,7,8,9,10];
var root = createBST(sortedArr);



function addToBst(root, val) {
    if(root == null) {
        return null;
    }
    if (root.val >= val) {
        addToBst(root.left, val);
    } else {
        addToBst(root.right, val);
    }
}
var val = 11;
console.log(addToBst(root, val));