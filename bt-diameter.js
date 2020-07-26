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

var height = function(root) {
    if(root == null) {
        return 0;
    }

    heightLeft = height(root.left);
    heightRight = height(root.right);
    
    return 1 + Math.max(heightLeft, heightRight );
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(root == null) {
        return 0;
    }
    
    var diameterLeft = diameterOfBinaryTree(root.left);
    var diameterRight = diameterOfBinaryTree(root.right);
    
    var ht = height(root.left) + height(root.right);
    
    // diameterOfBinaryTree is max of left diameter, right diameter and height of tree
    
    return Math.max(ht, Math.max(diameterLeft, diameterRight));
};

console.log(diameterOfBinaryTree(node1));