// let arr1 = [1,2,3,4];
// let arr2 = arr1;

// console.log('arr1', arr1);
// console.log('arr2', arr2);
// arr2.push(6);
// console.log('arr1', arr1);
// console.log('arr2', arr2);

// let arr3 = [];
// arr1.forEach((undefined,i) => {
//     arr3[i] = arr1[i];
// });


// console.log('arr3', arr3);

// arr3.push(8);

// console.log('arr1', arr1);
// console.log('arr2', arr2);
// console.log('arr3', arr3);

// function cloneDeep(obj) {
//     if(obj == null || typeof obj != 'object') {
//         return obj;
//     }

//     let newObj = Array.isArray(obj) ? [] : {};
    
//     for(key in obj) {
//         newObj[key] = cloneDeep(obj[key]);
//     }
//     return newObj;
// }


function cloneDeep(data) {
    let map = new Map();
    function _cloneDeepHelper(inData, map) {
      // your code here
      if(typeof inData != 'object' || inData == null) {
        return inData;
      }
      if(map.has(inData)) {
         return map.get(inData);
      }
      let deepClonedData = Array.isArray(data) ? [] : {};
      map.set(inData, deepClonedData);
  
      for(key in inData) {
        deepClonedData[key] = _cloneDeepHelper(inData[key], map);
      }
      map.delete(inData);
     return deepClonedData;
    }
    return _cloneDeepHelper(data, map);
  }

// let originalArray = [37, 3700, { hello: "world" }]
// console.log("Original array:", ...originalArray) // 37 3700 Object { hello: "world" }

// let shallowCopiedArray = originalArray.slice()
// let deepCopiedArray = cloneDeep(originalArray)

// originalArray[1] = 0 // Will affect the original only
// originalArray[2].hello = "moon" // Will affect the original and the shallow copy

// console.log("Original array:", ...originalArray) // 37 0 Object { hello: "moon" }
// console.log("Shallow copy:", ...shallowCopiedArray) // 37 3700 Object { hello: "moon" }
// console.log("Deep copy:", ...deepCopiedArray) // 37 3700 Object { hello: "world" }

//circular dependancy
let originalArray;
originalArray  = [1,2,{ a: originalArray}];
console.log("Original array:", originalArray) // 37 3700 Object { hello: "world" }

let shallowCopiedArray = originalArray.slice()
let deepCopiedArray = cloneDeep(originalArray)

originalArray[0][0] = 'hello'  // Will affect the original and shallow

console.log("Original array:", originalArray) // 37 0 Object { hello: "moon" }
console.log("Shallow copy:", shallowCopiedArray) // 37 3700 Object { hello: "moon" }
console.log("Deep copy:", deepCopiedArray) // 37 3700 Object { hello: "world" }