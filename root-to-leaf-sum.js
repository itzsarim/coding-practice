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

var sumNumbers = function(root) {
    let result = [];
    let paths = [];
    findPaths(root,paths,result);
    return result.reduce((acc, elem) => elem + acc, 0);
};

var findPaths = function(root, paths, result) {
    if(root == null) {
        return;
    }
    
    paths.push(root.val);
    if(root.left == null && root.right == null) {
        result.push(Number.parseInt(paths.join(''), 10));
    }
    findPaths(root.left, paths, result);
    findPaths(root.right, paths, result);
    paths.pop();
}
console.log(sumNumbers(node1));