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


function findLCA(root, a,b) {
    if(a==null || b==null) {
        return 'input is null';
    }
    if(root === null) {
        return null;
    }

    if(root.val === a.val || root.val === b.val) {
        return root;
    }

    var nodeLeft = findLCA(root.left, a, b);
    var nodeRight = findLCA(root.right,a,b);

    if(nodeLeft !== null && nodeRight !== null) {
        return root;
    }

    return nodeRight !== null ? nodeRight : nodeLeft;
}

console.log('LCA is', findLCA(node1, node4, node7 ).val);