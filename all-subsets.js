var subsets = function(nums) {
    if(nums.length == 0) {
        return [];
    }
    let result = [];
    let buffer = [];
    subsetHelper(nums, buffer, result, 0,0);
    return result;
};

var subsetHelper = function(nums, buffer, result, index, bindex) {
    result.push(buffer.slice(0, bindex));
    if(bindex == nums.length) {
        return;
    }
    
    for(let i=index; i<nums.length; i++) {
        buffer[bindex] = nums[i];
        subsetHelper(nums, buffer, result, i+1,bindex+1)
    }
    
}

console.log(subsets([1,2,3]));