
/**
 * @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1) {
    // your imeplementation here
    let result = [];
    while(depth >0) {
      arr.forEach((a) => {
          if(Array.isArray(a)) {
            a.forEach(elem => result.push(elem));
          } else {
            result.push(a);
          }
        }
      )
      arr = result;
      result = [];
      depth--;
    }
    return arr;
  }


  function flatR(arr, depth=1) {
      if(arr.length == 0 && arr == null)
      return [];

      let newArr = [];
      flatHelper(newArr, arr, depth);
      return newArr;
  }

  function flatHelper(newArr, arr, depth) {
    arr.forEach(elem => {
        if(Array.isArray(elem) && depth > 0) {
            flatHelper(newArr, elem, depth-1);
        } else {
            newArr.push(elem);
        }
    })
  }

  function flattenComplete(arr) {
    if(arr === null || arr.length === 0) {
      return [];
    }
    let resultArr = [];
    function flattenCompleteHelper(resultArr, arr) {
      arr.forEach((elem) => {
        if(Array.isArray(elem)) {
          flattenCompleteHelper(resultArr, elem);
        } else {
          resultArr.push(elem);
        }
      })
    }
    flattenCompleteHelper(resultArr, arr);
    return resultArr;
  }

  //const arr = [1,4,[5,[6, 7, [8]]]];

  function flattenReduce(arr) {
    return arr.reduce((acc, elem) => Array.isArray(elem) ? acc.concat(flattenReduce(elem)) : acc.concat(elem), [])
  }
  const arr = [1,[2],[3,[4]]];
  console.log(flat(arr,1));
  console.log(flatR(arr,1));
  console.log(flattenReduce(arr));
  const obj = new Map()
  obj.cool = '!';
  console.log(flattenReduce(['BFE', [{dev: true}, ['is', obj]]]));

  
  console.log(flattenComplete(arr));
