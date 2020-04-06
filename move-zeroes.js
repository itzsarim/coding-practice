var moveZeroes = function(nums) {
    if(nums.length !== 0 && Array.isArray(nums)) {
        var i, j=0, temp, len = nums.length;
        for(i=0; i<len; i++) {
            if(nums[i]===0){
                while(nums[j]!==0 && j!==len){
                    j++;
                }
                if(j===len) {
                    break;
                } else {
                    temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
            console.log(nums);
        }
    }
    return nums;
};

var nums = [0,1,0,3,12];
console.log(moveZeroes(nums));