/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
data structure: POJO with target - nums[i] as key, i as value
*/

var twoSum = function(nums, target) {
    const mem = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (mem[nums[i]] !== undefined) return [mem[nums[i]], i];
        mem[target - nums[i]] = i;
    }
};