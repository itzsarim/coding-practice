/**
 * Definition for a binary tree node.*/
function TreeNode(val) {
     this.val = val;
      this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    var n = preorder.length;
    if (n == 0) return null;
    var stack = [];
    var root = new TreeNode(preorder[0]);
    stack.push(root);
    
    for (var i = 1; i < n; i++) {
        // take the last element of the deque as a parent
        // and create a child from the next preorder element
        var node = stack[stack.length-1];
        var child = new TreeNode(preorder[i]);
        // adjust the parent 
        while (stack.length!=0 && stack[stack.length-1].val < child.val) {
          node = stack.pop();  
        }
      
        // follow BST logic to create a parent-child link
        if (node.val < child.val){
            node.right = child;
        }else {
            node.left = child;
        } 
        // add the child into deque
        stack.push(child);
      }
      
      return root;
};

console.log(bstFromPreorder([8,5,1,7,10,12]));