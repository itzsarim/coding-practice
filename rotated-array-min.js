const rotatedArrayMin = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let last = arr[end];

    while (start <= end) {
        mid = start + Math.floor((end - start)/2);
        if (arr[mid] <= last && (mid === 0 || arr[mid-1] > arr[mid])) {// compare with last to know which way to go
            return arr[mid];
        } else if (arr[mid] > last) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

console.log(rotatedArrayMin([1,2,3,4,5,0]));