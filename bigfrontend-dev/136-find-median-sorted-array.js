function median(arr1, arr2) {
    // your code here
    let combined = [...arr1, ...arr2];
    let median;
    let size = combined.length;
    if(size%2 != 0) {
      median = combined.splice(Math.floor(size/2),1)[0];
    } else {
      let arr = combined.splice(Math.floor(size/2),2)
      median = ( arr[0] + arr[1])/2
    }
    return median;
  }

  console.log(median([1,2],[3,4]));