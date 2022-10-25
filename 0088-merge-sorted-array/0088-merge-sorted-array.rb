# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
    i, r, j = m-1, m+n-1, n-1
    while j >= 0 && i >= 0
        if nums1[i] <= nums2[j]
            nums1[r] = nums2[j]
            r -= 1
            j -= 1
        else
            nums1[r] = nums1[i]
            r -= 1
            i -= 1
        end
    end
    if i < 0
        (j).downto(0).each { |k| nums1[k] = nums2[k] }
    end
end