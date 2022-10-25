/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
use pointer i = m-1, r = m+n-1 in nums1, pointer j = n-1 in nums2
edge case: m = 0, n > 0
iterate through nums1, map nums2[i] => nums1[i]

do until j < 0
if nums1[i] <= nums2[j] then nums1[r] = nums2[j], r--, j--
else if nums1[i] > nums2[j] then nums1[r] = nums1[i], r--, i--
*/

var merge = function(nums1, m, nums2, n) {
    let [i, r, j] = [m - 1, m + n - 1, n - 1];  // 0, 1, 0
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