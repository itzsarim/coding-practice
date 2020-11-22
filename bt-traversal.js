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
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Recursive Solution
var inorderTraversal = function (root) {
    if (root === null) {
        return [];
    }
    var ret = [];
    inorderTraversalBuilder(root, ret);
    return ret;
};

function inorderTraversalBuilder(root, ret) {
    if (root === null) {
        return;
    }
    inorderTraversalBuilder(root.left, ret);
    ret.push(root.val);
    inorderTraversalBuilder(root.right, ret);
}

// function preorderTraversal(root) {
//     if(root === null) {
//         return null;
//     }
//     var result = [];
//     preorderTraversalHelper(root, result);
//     return result;
// }

// function preorderTraversalHelper(root, result) {
//     if(root === null) {
//         return;
//     }
//     result.push(root.val);
//     preorderTraversalHelper(root.left, result);
//     preorderTraversalHelper(root.right, result);
// }

// TreeNode.prototype.postOrderTraversal = function() {
//     if (this === null) {
//         return null;
//     }

//     var result = [];
//     this._postOrderTraversalHelper(this, result);
//     return result;
// }

// TreeNode.prototype._postOrderTraversalHelper = function(root, result) {
//     if(root === null) {
//         return;
//     }

//     this._postOrderTraversalHelper(root.left, result);
//     this._postOrderTraversalHelper(root.right, result);
//     result.push(root.val);
// }

// TreeNode.prototype.iterativePostOrder = function() {
//     if(this === null) {
//         return null;
//     }
//     var stack = [];
//     var result = [];
//     this._iterativePostOrderHelper(this, stack, result);
//     return result;
// };

// TreeNode.prototype._iterativePostOrderHelper = function(root, stack, result) {

//     stack.push(root);

//     while(stack.length !== 0) {
//         var node = stack.pop();
//         if(node && node.visited) {
//             result.push(node.val);
//         } else {
//             if(node!== null) {
//                 node.visited = true;
//                 stack.push(node);
//                 if(node !== null) {
//                     stack.push(node.right);
//                 }
//                 if (node !== null) {
//                     stack.push(node.left);
//                 }
//             }
//         }
//     }

// }

// function iterativePostOrder(root) {
//     var stack = [];
//     var result = [];
//     stack.push(root);

//     while(stack.length > 0) {
//         var node = stack.pop();
//         if(node && node.visited) {
//             result.push(node.val);
//         } else {
//             if(node!== null) {
//                 node.visited = true;
//                 stack.push(node);
//                 if(node !== null) {
//                     stack.push(node.right);
//                 }
//                 if (node !== null) {
//                     stack.push(node.left);
//                 }
//             }
//         }
//     }
//     return result;
// }

// function iterativePreOrder(root) {
//     var stack = [];
//     var result = [];
//     stack.push(root);
//     while(stack.length > 0) {
//         var node = stack.pop();
//         result.push(node.val);
//         if(node.right != null)
//         stack.push(node.right);
//         if(node.left != null)
//         stack.push(node.left);
//     }
//     return result;
// }

function iterativeInorderTraversal(root) {
    let stack = [root];
    let traversal = [];
    while(stack.length!=0) {
        let node = stack.pop(); 
        if(node && node.visited) {
            traversal.push(node.val);
        } else {
            node.visited = true;
            if(node.right) 
            stack.push(node.right);
            stack.push(node);
            if(node.left)
            stack.push(node.left);
        }
    }
    return traversal;
}

console.log('Inorder traversal', inorderTraversal(node1));
// console.log('Preorder traversal', preorderTraversal(node1));
// console.log('Postorder traversal', node1.postOrderTraversal());
// console.log('Postorder traversal iterative', iterativePostOrder(node1));
// console.log('Predorder traversal iterative', iterativePreOrder(node1));
console.log('Inorder traversal iterative', iterativeInorderTraversal(node1));