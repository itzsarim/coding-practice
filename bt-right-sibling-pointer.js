var connect = function(root) {
    let leftMost = root;
    // start pointer marking on each levels leftmost node
    while(leftMost != null && leftMost.left!=null){
        markRightOnLevel(leftMost);
        leftMost = leftMost.left;
    }
    return root;
};

var markRightOnLevel = function(node) {
    let iter = node;
    
    while(iter!=null) {
        iter.left.next = iter.right;
        if(iter.next!=null) {
            iter.right.next = iter.next.left;
        }
        iter = iter.next;
    }
}