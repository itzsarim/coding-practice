var sortedArr = [4,5,6,7,8,9,10];

function createBST(arr, start, end) {
    if(start > end || end > arr.length) {
        return null;
    }

    var mid = start + (end-start)/2;
    var node = {};
    node.val = arr[mid];
    node.left = createBST(arr, start, mid-1);
    node.right = createBST(arr, mid+1, end);
    return node;
}

console.log(createBST(sortedArr,0,sortedArr.length-1));