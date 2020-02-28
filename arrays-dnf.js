const pivot = 4;
const arr = [5,3,4,6,4,4,8,9];

const dnf = (arr, pivot) => {

    if(arr == null || !Array.isArray(arr) || arr.length===0 || pivot == undefined) {
        return null;
    }

    let less = 0;
    let more = arr.length - 1;
    let i = 0;
    let temp1;
    let temp2;
    while(i<=more) {
        if(arr[i]<pivot) {
            temp1 = arr[i];
            arr[i] = arr[less];
            arr[less] = temp1;
            less++;
            i++;
        }
        else if(arr[i]>pivot) {
            temp2 = arr[i];
            arr[i] = arr[more];
            arr[more] = temp2;
            more--;
        } else {
            i++;
        }
    }
    return arr;
}

console.log(dnf(arr,pivot));