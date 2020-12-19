function chunk(items, size) {
    // your code here
    let result = [];
    let k;
    for(let i=0; i<items.length;) {
      let temparr = [];
      k = size;
      while(k>0 && i < items.length) {
        temparr.push(items[i]);
        k--;
        i++;
      }
      result.push(temparr);
    }
    return result;
  }

  let items = [1,2,3,4,5];
  console.log(chunk(items, 6));