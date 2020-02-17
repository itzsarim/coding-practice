var TreeNode = require('./tree-structure.js');

var node1 = new TreeNode(7);
var node2 = new TreeNode(5);
var node3 = new TreeNode(9);
var node4 = new TreeNode(4);
var node5 = new TreeNode(6);
var node6 = new TreeNode(8);
var node7 = new TreeNode(10);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5
node3.left = node6;
node3.right = node7;

function isBST(root) {
    return isBSTutil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function isBSTutil(root, min, max) {
    if (root === null) {
        return true;
    }

    if (root.val < min || root.val > max) {
        return false;
    }

    return (isBSTutil(root.left, min, root.val - 1) && isBSTutil(root.right, root.val + 1, max));
}

if(isBST(node1)) {
    console.log('Tree is BST');
} else {
    console.log('Tree is not BST');
}