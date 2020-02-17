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

// find successor of node n
function findSuccessor(n, root) {
    var current;
    var successor;
    if (n == null || root == null) {
        return null;
    }
    // if node n has right child, the successor is the leftmost child of right child
    if (n.right) {
        current = n.right;
        while(current !== null) {
            successor = current;
            current = current.left;
        }
        return successor;
    }
    // else the successor is the first right parent
    else {
        current = root;
        successor = null;
        while(current != null) {
            if(current.val > n.val) {
                successor = current;
                current = current.left;
            } else if(current.val < n.val) {
                current = current.right;
            } else {
                break;
            }
        }
        return successor;
    }
}
var successor = findSuccessor(node7, node1);
successor != null ? console.log(successor.val) : console.log('this is the last element');