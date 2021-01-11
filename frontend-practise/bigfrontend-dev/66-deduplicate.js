function deduplicate(arr) {
    // your code here
    let set = new Set();
    let j=0;
    for(let i=0; i<arr.length; i++) {
      if(!set.has(arr[i])) {
        arr[j] = arr[i];
        set.add(arr[i]);
        j++;
      }
    }
    arr.splice(j-1);
  }

  let arr = [1,5,'b',5,1,undefined, 'a', 'a', 'a', 'b', true, 'true',false, {}, {}];
  deduplicate(arr);
  console.log(arr);