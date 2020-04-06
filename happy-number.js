/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = 0;
    //let map = new Map();
    //map.set(n,1);
    while(n!==1) {
        console.log(n);
        sum = sum + Math.pow(n%10,2); //
        if(Math.floor(n/10) != 0) {
            n = Math.floor(n/10);
        } else {
            n = sum;
            sum = 0;
        }
    }
    return n;
};

console.log(isHappy(2));