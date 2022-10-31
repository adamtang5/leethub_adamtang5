/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const bubbleSort = start => {
        for (let i = 0; i < nums.length; i++) {
            for (let j = start; j < nums.length - i - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                }
            }
        }
    };
    
    if (nums.length === 1) return;
    let [l, r] = [nums.length - 2, nums.length - 1];
    if (nums[l] < nums[r]) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        return;
    } else {
        let end = nums.length - 1;
        while (nums[l] >= nums[r]) {
            l--;
            r--;
        }
        if (l < 0) {
            bubbleSort(0);
            return;
        }
        while (nums[end] <= nums[l]) {
            end--;
        }
        [nums[l], nums[end]] = [nums[end], nums[l]];
        bubbleSort(l + 1);
        return;
    }
};