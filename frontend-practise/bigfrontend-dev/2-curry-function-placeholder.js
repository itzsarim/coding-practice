const  join = (a, b, c) => {
    console.log(`${a}_${b}_${c}`);
 }
 
 curry.placeholder = Symbol();


 function curry(func) {
    return function curried(...args){
      if(!args.slice(0,args.length).includes(curry.placeholder) && (args.length >= func.length)) {
        return func(...args);
      } else {
        return (...nextArgs) => {
          let mergedArgs = args.map((arg) => {
            if(arg === curry.placeholder) {
              let shiftedArg = nextArgs.shift();
              if(shiftedArg) {
                arg = shiftedArg;
              }  
            }
            return arg;
          })
          return curried(...mergedArgs, ...nextArgs);
        }
      }
    }
  }

 const curriedJoin = curry(join)
 const _ = curry.placeholder
 
//  curriedJoin(1, 2, 3) // '1_2_3'
//  curriedJoin(1,2)(3)
 
//  curriedJoin(_, 2)(1, 3) // '1_2_3'
 
//  curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
curriedJoin(_,_,_,_)(_,2,_)(_,3)(1);
 