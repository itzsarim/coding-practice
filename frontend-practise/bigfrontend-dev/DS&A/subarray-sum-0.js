
const subarraySumK = (arr, k) => {
    if (Array.isArray(arr) && arr !== null && arr.length !== 0) {
        let subArrSum = new Map();
        let sumTilli = 0;

        for(var i=0; i<arr.length; i++) {
            sumTilli += arr[i];
            if(sumTilli === k) {
                return arr.slice(0,i+1);
            }
            if(subArrSum.has(sumTilli - k)) {
                return arr.slice(subArrSum.get(sumTilli-k)+1, i+1);
            }
            subArrSum.set(sumTilli, i);
        }
    }
    return null;
}

console.log(subarraySumK([2,4,-2,1,-3,5,-3], -4));