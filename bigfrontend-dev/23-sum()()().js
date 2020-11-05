function sum(a) {
    return function(b) {
        return b ? sum(a+b) : a;
    }
}

console.log(sum(1)(2)(3)());

function sum2(a) {
    let func = function(b){
        return b ? sum2(a+b) : a;
    }

    func.valueOf = () => a;
    return func;
}
console.log(sum2(1)(2)(3) == 6);