
let c = {
    val: 1,
    next: null
}
let b = {
    val: 2,
    next: c
}
let a = {
    val: 1,
    next: b
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let prev = {val: null,next:null};
    let lr = head; //last runner
    let curr = head;
    let next;
    
    while(lr && lr.next) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        
        // make the runner run
        lr = lr.next.next;  
    }
    
    // now for odd number the curr shud be at the median
    next = curr.next;
    
    while(prev.next || next.next) {
        if(prev.val === next.val) {
            prev = prev.next;
            next = next.next;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(a));