const add = (...args) => {
    result = args.reduce((a,e) => a+e, 0 );
    console.log(result);
}

const join = (a,b,c) => {
    console.log(`${a}_${b}_${c}`);
}

const curry = (func) => {
    return function curried(...args) {
        return args.length >= func.length ? func(...args) : (...nextargs) => curried(...args,...nextargs);
    }
}

const curried = curry(join);
curried(1)(2)(3);
curried(1,2)(3);
curried(1)(2,3);
curried(1,2,3,4);