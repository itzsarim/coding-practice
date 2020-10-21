
var createBST = require('./bst-createbst');


var sortedArr = [4,5,6,7,8,9,10];
var root = createBST(sortedArr);


function bstSearch(root, val) {

    if(root == null) {
        return false;
    }

    if(root.val === val) {
        return true;
    }

    if (root.val > val) {
        return bstSearch(root.left, val);
    } else {
        return bstSearch(root.right, val)
    }
}


var val = 6;
console.log(bstSearch(root, val))
