
/**
 * @param {number[]} arr
 */
 function mergeSort(arr) {

    function merge(left, right){
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }

    // add remaining elements in the result
      
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));;
  }

  function divide(arr){
    if(arr.length <=1) {
      return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(divide(left), divide(right) )
  }

  return divide(arr);

}



// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     return merge(mergeSort(left), mergeSort(right))

// }

// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     // add remaining elements in the result
//     return result
//     .concat(left.slice(leftIndex))
//     .concat(right.slice(rightIndex));
// }


console.log(mergeSort([4,2,100,99,10000,-1, 99, 2]));