
const shortestSubarrayForSorting = (arr) => {
    if(arr[0] > arr[arr.length-1]) {
        return {'start': 0,
        'end': arr.length-1};
    }
    let i = 0;
    let j = arr.length-1;
    while(i < arr.length) {
        if(arr[i] < arr[i+1]) {
            i++;
        } else {
            break;
        }
    }

    while(j > 0) {
        if(arr[j] > arr[j-1]) {
            j--;
        } else {
            break;
        }
    }
    
    const min = Math.min(...arr.slice(i,j));
    const max = Math.max(...arr.slice(i,j));

    while(i >= 0) {
        if(arr[i] <= max && arr[i] >=min) {
            i--;
        } else {
            break;
        }
    }
    while(j <= arr.length-1) {
        if(arr[j] <= max && arr[j] >=min) {
            j++;
        } else {
            break;
        }
    }
    return {'start': i+1,
            'end': j-1};
}

console.log(shortestSubarrayForSorting([0,2,3,1,7,8,6,9]));