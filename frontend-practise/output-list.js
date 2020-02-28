let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  //iterative
  function outputList (list) {
    let temp = list
    while(temp) {
        console.log(temp.value);
        temp = temp.next;
    }
  }

  //outputList(list);

  //recursive
  let outputRecursive = (list) => {
    console.log(list.value);
    if(list.next) {
        outputRecursive(list.next);
    }
  }

  //outputRecursive(list);

  let outputReverse = (list) => {
      if(list.next === null) {
        console.log(list.value);
        return;
      } else {
          outputReverse(list.next);
      }
      console.log(list.value);
  }

  outputReverse(list);