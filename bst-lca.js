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

function findLCA(root, a, b) {
    if(root == null || a == null || b == null) {
        return 'cannot find lca';
    }

    while(root!=null) {
        if(root.val > a && root.val > b) {
            root = root.left;
        } else if(root.val < a && root.val < b) {
            root = root.right;
        } else {
            return root.val;
        }
    }
}

console.log(findLCA(node1, 8, 6));