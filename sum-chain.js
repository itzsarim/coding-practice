// sum(1)(2)(3)() = 6

const sum = x => y => y ? sum(x+y) : x;


console.log(sum(1)(2)(3)(4)());


let sum2 = function (a) {
    let closureFunc = b =>  b ? sum(a + b) : a;
    closureFunc.toString = () => a;
    return closureFunc;
  }
  alert(sum2(10)(2)(3)(4));