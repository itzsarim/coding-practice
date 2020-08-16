/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
*/
function maxDegreeSubarray(arr) {
    function findDegree() {
        var map = {};
        var maxDegree = 0;
        var valWithDegree;
        arr.forEach(element => {
            if(!map[element]) {
                map[element] = 1;
            } else {
                var newcount = map[element] + 1;
                map[element] = newcount;
                if (newcount > maxDegree) {
                    maxDegree = newcount;
                    valWithDegree = element;
                }
            }
        });
        return {maxDegree, valWithDegree};
    }
    // find the degree of arr
    var {maxDegree, valWithDegree} = findDegree();

    // we know what the max degree is and the value with max degree so find subarray with values degree number of times
    var degreeCount = 0;
    var subarrayCount = 0;
    for(var i=0;i<arr.length;i++) {
        if(arr[i] == valWithDegree) {
            degreeCount++
            if(degreeCount != maxDegree) {
                subarrayCount++;
            }
        }
    }
    return subarrayCount;
}
var input = [1,2,2,3,1,4,2];
console.log(maxDegreeSubarray(input));