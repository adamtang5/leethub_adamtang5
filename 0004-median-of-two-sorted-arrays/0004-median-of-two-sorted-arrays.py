class Solution:
  def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
    a, b = nums1, nums2
    if len(nums1) > len(nums2):
      b, a = a, b
    totalLen = len(a) + len(b)
    half = totalLen // 2
    l, r = 0, len(a)-1
    aPointer = bPointer = aLeft = aRight = bLeft = bRight = None
    while True:
      aPointer = (l+r) // 2
      bPointer = half-aPointer-2
      aLeft = a[aPointer] if aPointer >= 0 else float("-inf")
      aRight = a[aPointer+1] if aPointer+1 in range(len(a)) else float("inf")
      bLeft = b[bPointer] if bPointer >= 0 else float("-inf")
      bRight = b[bPointer+1] if bPointer+1 in range(len(b)) else float("inf")
      
      if aLeft <= bRight and bLeft <= aRight:
        if totalLen % 2:
          return min(aRight, bRight)
        else:
          return (max(aLeft, bLeft)+min(aRight, bRight)) / 2
      elif aLeft > bRight:
        r = aPointer-1
      else:
        l = aPointer+1