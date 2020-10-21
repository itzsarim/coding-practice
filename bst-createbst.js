var sortedArr = [4,5,6,7,8,9,10];

function createBSTutil(arr, start, end) {
    if(start > end || end > arr.length) {
        return null;
    }

    var mid = start + (end-start)/2;
    var node = {};
    node.val = arr[mid];
    node.left = createBSTutil(arr, start, mid-1);
    node.right = createBSTutil(arr, mid+1, end);
    return node;
}

function createBST(arr) {
    return createBSTutil(arr, 0, arr.length-1);
}

//console.log(createBST(sortedArr));

module.exports = createBST;