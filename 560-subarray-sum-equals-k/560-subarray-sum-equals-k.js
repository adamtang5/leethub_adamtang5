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
    const prefixSums = {};
    prefixSums[0] = 1;
    nums.forEach(num => {
        prefixSum += num;
        if (prefixSums[prefixSum - k] !== undefined) {
            ans += prefixSums[prefixSum - k];
        }
        prefixSums[prefixSum] = prefixSums[prefixSum] || 0;
        prefixSums[prefixSum]++;
        // console.log(prefixSum, prefixSums);
    });
    return ans;
};