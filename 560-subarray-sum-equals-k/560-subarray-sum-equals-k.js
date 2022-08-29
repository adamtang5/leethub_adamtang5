/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
data structure: object with key being prefix sums and values being counts of prefix sums
*/

var subarraySum = function(nums, k) {
    let [ans, prefixSum] = [0, 0];
    const prefixSums = { 0: 1 };
    nums.forEach(num => {
        prefixSum += num;
        ans += prefixSums[prefixSum - k] || 0;
        prefixSums[prefixSum] = prefixSums[prefixSum] || 0;
        prefixSums[prefixSum]++;
    });
    return ans;
};