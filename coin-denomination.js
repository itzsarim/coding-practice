function coinChange(arr, bufferarr, target, startIndex, bufferIndex, sum) {
  // termination case
  if (sum === target) {
    printBufferUptoBufferIndex(bufferarr, bufferIndex);
    return;
  }
  if (sum > target) {
    return;
  }
  
  // find candidates for bufferindex
  for (var i=startIndex; i<arr.length; i++) {
    // fill buffer at index
    bufferarr[bufferIndex] = arr[i];
    //recurse to next index
    coinChange(arr, bufferarr,target, i, bufferIndex + 1, sum + arr[i]);
  }
}
function printBufferUptoBufferIndex(bufferArr, index) {
    console.log(bufferarr.slice(0,index))
}

var arr = [1,2,5]
var bufferarr = [];
var target = 5;
coinChange(arr, bufferarr, target, 0, 0, 0);