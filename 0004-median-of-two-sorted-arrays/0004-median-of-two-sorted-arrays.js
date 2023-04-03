/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let [a, b] = [nums1, nums2];
  if (nums1.length > nums2.length) {
    [b, a] = [a, b];
  }
  const totalLen = a.length + b.length;
  const half = Math.floor(totalLen / 2);
  let [l, r] = [0, a.length - 1];
  let aPointer, bPointer, aLeft, aRight, bLeft, bRight;
  while (true) {
    aPointer = Math.floor((l + r) / 2);
    bPointer = half - aPointer - 2;
    aLeft = aPointer >= 0 ? a[aPointer] : -Infinity;
    aRight = aPointer + 1 < a.length ? a[aPointer + 1] : Infinity;
    bLeft = bPointer >= 0 ? b[bPointer] : -Infinity;
    bRight = bPointer + 1 < b.length ? b[bPointer + 1] : Infinity;
    
    if (aLeft <= bRight && bLeft <= aRight) {
      if (totalLen % 2) {
        return Math.min(aRight, bRight);
      } else {
        return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
      }
    } else if (aLeft > bRight) {
      r = aPointer - 1;
    } else {
      l = aPointer + 1;
    }
  }
};