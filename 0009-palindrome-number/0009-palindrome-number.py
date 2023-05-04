class Solution:
  def isPalindrome(self, x: int) -> bool:
    if x < 0: return False
    if x < 10: return True
    
    s = str(x)
    l, r = 0, len(s)-1
    while l < r:
      if s[l] != s[r]:
        return False
      else:
        l += 1
        r -= 1
    return True