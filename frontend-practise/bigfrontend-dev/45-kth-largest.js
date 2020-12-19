function findKThLargest(arr, k) {
    // your code here
    if(k>arr.length){
        return null;
    }
    let largerThanPivot = [];
    let randomIndex;
    let pivot;
    while(true) {
      largerThanPivot = [];
      randomIndex = Math.floor(Math.random()*(arr.length));
      pivot = arr[randomIndex];
      for(let i =0;i<arr.length;i++) {
        if(arr[i] > pivot) {
          largerThanPivot.push(arr[i]);
        } 
      }
      if(largerThanPivot.length == k-1)
      break;
    }
    return pivot;
  }

  console.log(findKThLargest([7,2,3,4,8,1], 4));