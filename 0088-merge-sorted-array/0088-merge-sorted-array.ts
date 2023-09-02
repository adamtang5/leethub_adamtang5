/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i: number = m - 1
  let r: number = m + n - 1
  let j: number = n - 1
  while (j >= 0 && i >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[r] = nums2[j]
      r--
      j--
    } else {
      nums1[r] = nums1[i]
      r--
      i--
    }
  }

  if (i < 0) {
    for (let k = j; k >= 0; k--) {
      nums1[k] = nums2[k]
    }
  }
};