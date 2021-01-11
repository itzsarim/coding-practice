function flatten(root) {
    // your code here
    let result = [], q = [], tq = [];
    q.push[root];
    result.push[root];
    while(q.length!=0) {
      q.forEach((node) => {
        tq.push(...node.children);
      });
      q = tq;
      result.push(...tq);
      tq.length = 0;;
    }
    return result;
  }