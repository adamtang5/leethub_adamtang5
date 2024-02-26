# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
  def firstBadVersion(self, n: int) -> int:
    l, r = 1, n
    if l == r:
      return l
    mid = (l+r)//2
    while l < r:
      if isBadVersion(mid):
        r = mid
      else:
        l = mid+1
      mid = (l+r)//2
    return mid