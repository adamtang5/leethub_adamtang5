/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let [i, r, j] = [m - 1, m + n - 1, n - 1];
    while (j >= 0 && i >= 0) {
        if (nums1[i] <= nums2[j]) {
            nums1[r] = nums2[j];
            r--;
            j--;
        } else {
            nums1[r] = nums1[i];
            r--;
            i--;
        }
    }
    // i = -1
    if (i < 0) {
        for (let k = j; k >= 0; k--) {
            nums1[k] = nums2[k];
        }
    }
};