var TreeNode = require('./tree-structure.js');
var inOrderTraversal = [1,3,6,4,7,2,5];
var preOrderTraversal = [4,3,1,6,2,7,5];

var inorderHashMap = {};
inOrderTraversal.forEach(function(elem,i) {
    inorderHashMap[elem] = i;
})

function reconstructTree(preOrderTraversal, preStart, preEnd, inOrderTraversal, inStart, inEnd, inorderHashMap) {
    if(preStart>preEnd || inStart>inEnd) {
        return null;
    }
    var val = preOrderTraversal[preStart];
    var node = new TreeNode(val);
    var nodeIndex = inorderHashMap[val]; 

    node.left = reconstructTree(preOrderTraversal, preStart+1, preStart+nodeIndex-inStart, inOrderTraversal, inStart, nodeIndex-1, inorderHashMap);
    node.right = reconstructTree(preOrderTraversal, preStart + nodeIndex - inStart + 1, preEnd, inOrderTraversal, nodeIndex + 1, inEnd, inorderHashMap);

    return node;
}
var preSize = preOrderTraversal.length;
var inSize = inOrderTraversal.length;
var tree = reconstructTree(preOrderTraversal, 0, preSize-1, inOrderTraversal, 0,  inSize-1, inorderHashMap);
console.log(tree);