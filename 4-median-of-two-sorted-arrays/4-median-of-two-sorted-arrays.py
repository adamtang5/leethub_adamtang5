class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        total = len(nums1) + len(nums2)
        half = total // 2
        
        a, b = nums1, nums2
        if len(nums1) > len(nums2):
            b, a = a, b
        
        l, r = 0, len(a)-1
        
        while True:
            aPointer = (l + r) // 2
            bPointer = half - aPointer - 2
            
            aLeft = a[aPointer] if aPointer >= 0 else float('-Inf')
            aRight = a[aPointer + 1] if aPointer + 1 < len(a) else float('Inf')
            bLeft = b[bPointer] if bPointer >= 0 else float('-Inf')
            bRight = b[bPointer + 1] if bPointer + 1 < len(b) else float('Inf')
            
            # partition is correct
            if (aLeft <= bRight and bLeft <= aRight):
                if total % 2:
                    return min(aRight, bRight)
                else:
                    return (max(aLeft, bLeft) + min(aRight, bRight)) / 2
            # partition needs to be adjusted
            elif aLeft > bRight:
                r = aPointer - 1
            else:
                l = aPointer + 1