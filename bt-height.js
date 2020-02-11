var TreeNode = require('./tree-structure.js');

var node1 = new TreeNode(7);
var node2 = new TreeNode(6);
var node3 = new TreeNode(4);
var node4 = new TreeNode(3);
var node5 = new TreeNode(2);
var node6 = new TreeNode(1);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5
node3.left = node6;

function findHeight(root) {
    var maxHeight = {value:-1};
    height(root, -1, maxHeight);
    return maxHeight.value;
}

function height(node, prevHeight, maxHeight) {
    if(node === null) {
        return;
    }
    var currentHeight = prevHeight + 1;
    if (currentHeight > maxHeight.value) {
        maxHeight.value = currentHeight;
    }
    if(node!==null) {
        height(node.left, currentHeight, maxHeight);
        height(node.right, currentHeight, maxHeight);
    }
}

console.log(findHeight(node1));

function findBottomToTopHeight(node) {
    if(node === null) {
        return -1;
    }
    return 1 + Math.max(findBottomToTopHeight(node.left), findBottomToTopHeight(node.right));
}

console.log(findBottomToTopHeight(node1));