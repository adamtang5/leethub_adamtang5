# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    total = nums1.length + nums2.length
    half = total / 2
    
    a, b = nums1, nums2
    if nums1.length > nums2.length
        b, a = a, b
    end
    
    l, r = 0, a.length - 1
    
    while true
        aPointer = (l + r) / 2
        bPointer = half - aPointer - 2
        
        aLeft = aPointer >= 0 ? a[aPointer] : -1.0/0
        aRight = aPointer + 1 < a.length ? a[aPointer + 1] : 1.0/0
        bLeft = bPointer >= 0 ? b[bPointer] : -1.0/0
        bRight = bPointer + 1 < b.length ? b[bPointer + 1] : 1.0/0
        
        # partition is correct
        if aLeft <= bRight && bLeft <= aRight
            if total % 2 != 0
                return aRight < bRight ? aRight : bRight
            else
                leftMax = (aLeft >= bLeft ? aLeft : bLeft)
                rightMin = (aRight <= bRight ? aRight : bRight)
                return (leftMax + rightMin) / 2.0
            end
        # partition needs to be adjusted
        elsif aLeft > bRight
            r = aPointer - 1
        else
            l = aPointer + 1
        end
    end
end