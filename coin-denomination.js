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

// just print the number of ways the target can be achieved with the coins
function returnways(target, arr) {
  var sumTillNow = 0;
  var startIndex = 0;
  var ways = 0;
  function returnwayshelper(target, arr, sumTillNow, startIndex) {
    if(sumTillNow == target) {
      ways++;
      return;
    }
    if(sumTillNow > target) {
      return;
    }

    for(var i = startIndex; i<arr.length; i++) {
      returnwayshelper(target, arr, sumTillNow + arr[i], i);
    }
  }
  returnwayshelper(target, arr, sumTillNow, startIndex);
  return ways;
}

console.log(returnways(4, [1,2,3]));