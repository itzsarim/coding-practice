/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n == null || k ==null){
        return [];
    }
    let buffer = new Array(k);
    let result = [];
    combineHelper(n,k,result, buffer,0,0);
    return result;
};

var combineHelper = function(n,k,result,buffer,startIndex, bufferIndex) {
    if(bufferIndex == k) {
        let copy = buffer.slice();
        result.push(copy);
        return;
    }
    
    for(let i=startIndex; i<n; i++) {
        buffer[bufferIndex] = i+1;
        combineHelper(n,k,result,buffer,i + 1, bufferIndex + 1);
    }
}

console.log(combine(4,2));