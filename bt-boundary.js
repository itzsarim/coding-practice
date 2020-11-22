
var boundaryOfBinaryTree = function(root) {
    if(root == null) {
        return [];
    }
    // add left boundary, without leaf
    const external = [];
    if(!isLeaf(root))
    external.push(root.val);
    let node = root.left;
    while(node != null) {
        if(!isLeaf(node)) {
            external.push(node.val);
        }
        if(node.left!=null) {
            node = node.left;
        } else {
            node = node.right;
        }
    }
    // add leaves
    addLeaves(root, external);
    // add right boundary without leaf(in reverse)
    let stack = [];
    node = root.right;
    while(node != null) {
        if(!isLeaf(node)) {
            stack.push(node.val);
        }
        if(node.right!=null) {
            node = node.right;
        } else {
            node = node.left;
        }
    }
    while(stack.length!=0) {
        external.push(stack.pop());
    }
    return external;
};

var addLeaves = function(node, external) {
    if(node == null) {
        return null;
    }
    
    if(isLeaf(node)) {
        external.push(node.val);
    }
    addLeaves(node.left, external);
    addLeaves(node.right, external);
    
}

var isLeaf = function(node) {
    return node.left == null && node.right == null;
}