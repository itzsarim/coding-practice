/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length==0) {
        return [];
    }
    const LIS = Array(nums.length).fill(1);
    let LS = 1;
    for(let i=1;i<nums.length; i++) {
        for(let j=0; j<i; j++) {
            if(nums[j] < nums[i]){
                LIS[i] = Math.max(LIS[i], LIS[j] + 1);
            } 
        }
        LS = Math.max(LS, LIS[i]);
    }
    return LS;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));