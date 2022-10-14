/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const ansSet = new Set();
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let [l, r] = [j + 1, nums.length - 1];
            while (l < r) {
                const currSum = nums[i] + nums[j] + nums[l] + nums[r];
                if (currSum === target) ansSet.add(JSON.stringify([nums[i], nums[j], nums[l], nums[r]]));
                if (currSum <= target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    }
    return Array.from(ansSet).map(s => JSON.parse(s));
};