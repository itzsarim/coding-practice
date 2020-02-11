var TreeNode = require('./tree-structure.js');

var node1 = new TreeNode('A');
var node2 = new TreeNode('B');
var node3 = new TreeNode('C');
var node4 = new TreeNode('D');
var node5 = new TreeNode('E');
var node6 = new TreeNode('F');

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4
node5.left = node6;

function printPaths(root, result) {
    if(root === null) {
        return;
    }
    result.push(root.val);
    if(root.left === null && root.right === null) {
        console.log(result)
    }
    printPaths(root.left,result);
    printPaths(root.right, result);
    result.pop();
}
var result = [];
printPaths(node1, result);