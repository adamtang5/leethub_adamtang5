class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        i, r, j = m-1, m+n-1, n-1
        while j >= 0 and i >= 0:
            if nums1[i] <= nums2[j]:
                nums1[r] = nums2[j]
                r -= 1
                j -= 1
            else:
                nums1[r] = nums1[i]
                r -= 1
                i -= 1
        if i < 0:
            for k in range(j, -1, -1):
                nums1[k] = nums2[k]
                