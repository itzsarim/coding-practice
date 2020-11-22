/**
 * You can only climb 1 or 2 steps at a time
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // at each step you can store the ways to reach to that step and work your way till top
    const steps = Array(n+1).fill(0);
    steps[0] = 1;
    for(let i=0;i<n;i++){
        if(i+1<=n)
        steps[i+1] = steps[i] + steps[i+1];
        if(i+2<=n)
        steps[i+2] = steps[i] + steps[i+2];
    }
    return steps[n];
};

console.log(climbStairs(8));