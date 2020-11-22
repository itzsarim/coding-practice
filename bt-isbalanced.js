var TreeNode = require('./tree-structure.js');

var node1 = new TreeNode(7);
var node2 = new TreeNode(6);
var node3 = new TreeNode(4);
var node4 = new TreeNode(3);
var node5 = new TreeNode(2);
var node6 = new TreeNode(1);
var node7 = new TreeNode(12);
var node8 = new TreeNode(24);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5
node3.left = node6;
node6.left = node7;
node7.right = node8;



// function height(node) {
//     if(node === null) {
//         return -1;
//     }
//     return 1 + Math.max(height(node.left), height(node.right));
// }

// function diffHeights(node) {
//     if(node === null) {
//         return null;
//     }
//     return Math.abs(height(node.left) - height(node.right));
// }

// if(diffHeights(node1) <= 1) {
//     console.log('Tree is balanced');
// } else {
//     console.log('Tree is not balanced');
// }


var isBalanced = function(root) {
    if(root == null) {
        return true;
    }
    
    let diff = Math.abs(height(root.left) - height(root.right));
    return diff > 1 ? false: true;
};

var height = function(root) {
    if(root == null) {
        return -1;
    }
    
    return Math.max(height(root.left), height(root.right)) + 1;
}

console.log(isBalanced(node1));