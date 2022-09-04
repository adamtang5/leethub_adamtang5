/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);
    
    let [a, b] = [nums1, nums2];

    if (nums1.length > nums2.length) {
        [b, a] = [a, b];
    }
    
    let [l, r] = [0, a.length - 1];
    
    while (true) {
        let aPointer = Math.floor((l + r) / 2);
        let bPointer = half - aPointer - 2;
        
        let aLeft = aPointer >= 0 ? a[aPointer] : -Infinity;
        let aRight = aPointer + 1 < a.length ? a[aPointer + 1] : Infinity;
        let bLeft = bPointer >= 0 ? b[bPointer] : -Infinity;
        let bRight = bPointer + 1 < b.length ? b[bPointer + 1] : Infinity;
        
        // partition is correct
        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2) {    // odd
                return Math.min(aRight, bRight);
            } else {            // even
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
            }
        } else if (aLeft > bRight) {
            r = aPointer - 1;
        } else {
            l = aPointer + 1;
        }
    }
};