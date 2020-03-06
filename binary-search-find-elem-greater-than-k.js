const findGreater = (arr, k) => {
    let mid = 0;
    let start = 0;
    let end = arr.length - 1;
    while(start<=end) {
        mid = start + Math.floor((end-start)/2);
        if(arr[mid] <= k && k < arr[mid+1]) {
            return mid+1;
        } else if (k < arr[mid]) {
            end = mid-1;
        } else if (k >= arr[mid]) {
            start = mid + 1;
        }
    }
}

console.log(findGreater([1,2,4,5,6], 5));