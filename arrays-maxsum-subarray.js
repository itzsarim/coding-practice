const input = [1,2,-1,2,-3,2,-5];

const maxSubarraySum = (a) => {
    let maxGlobal = 0;
    let maxTillHere = 0;

    for(let i=0;i<a.length;i++) {
        maxTillHere = Math.max(a[i], maxTillHere + a[i]);
        maxGlobal = Math.max(maxGlobal, maxTillHere);
    }
    return maxGlobal;
}

console.log('maximum subarray sum for array is', maxSubarraySum(input));

const maxSubarray = (a) => {
    let maxGlobal = 0;
    let maxTillHere = 0;
    let end;

    for(let i=0;i<a.length;i++) {
        maxTillHere = Math.max(a[i], maxTillHere + a[i]);
        if(maxTillHere > maxGlobal) {
            maxGlobal = maxTillHere;
            end = i;
        }
    }

    let start = end;
    let sum = 0;
    while(sum !== maxGlobal){
        sum = sum + a[start];
        start = start - 1;
    }

    return {'start': start+1, 'end': end};
}

console.log('maximum subarray for array is', maxSubarray(input));
