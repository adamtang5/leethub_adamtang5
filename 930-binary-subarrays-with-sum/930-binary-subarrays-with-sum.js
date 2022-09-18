/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let [ans, prefixSum] = [0, 0];
    const prefixSums = { 0: 1 };
    nums.forEach(num => {
        prefixSum += num;
        ans += prefixSums[prefixSum - goal] || 0;
        prefixSums[prefixSum] = prefixSums[prefixSum] || 0;
        prefixSums[prefixSum]++;
    })
    return ans;
};