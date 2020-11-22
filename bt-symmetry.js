var TreeNode = require('./tree-structure.js');

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(2);
var node4 = new TreeNode(3);
var node5 = new TreeNode(3);
var node6 = new TreeNode(3);



node1.left = node2;
node1.right = node3;
node2.right = node4
node3.left = node5;
//node3.right = node6;
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return root == null || hasSymmetry(root.left, root.right);
};

var hasSymmetry = function(l,r) {
    if(l == null && r == null) {
        return true;
    } else if(l != null && r != null) {
        if(l.val == r.val &&
          hasSymmetry(l.left, r.right) &&
          hasSymmetry(l.right, r.left)) {
            return true;
        }
    }
    return false;
}

console.log(isSymmetric(node1));