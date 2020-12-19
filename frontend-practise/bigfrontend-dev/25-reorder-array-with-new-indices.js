 function sort(items, newOrder) {
    // reorder items inline
    var res = new Array(items.length);
    res.fill(0);
    for(let i=0;i<items.length;i++){
      res.splice(newOrder[i],1, items[i]);
    }
    return res;
  }

  const A = ['A', 'B', 'C', 'D', 'E', 'F']
  const B = [1,   5,   4,   3,   2,   0]
  //console.log(sort(A,B));

  function sort1(items, newOrder) {
    // reorder items inline
    for(let i=0;i <newOrder.length; i++){
        newOrder[i] = newOrder[i] + items[i];
    }
    newOrder.sort((a,b) =>  a[0] - b[0]);
    for(let i=0; i<items.length;i++) {
        items[i] = newOrder[i][1];
    }
    return items;
  }

  console.log(sort1(A,B));