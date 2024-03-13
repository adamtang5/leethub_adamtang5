class Solution:
  def longestPalindrome(self, s: str) -> str:
    if len(s) < 2: return s
    maxLen, maxSub = 1, s[0]
    for i in range(len(s)):
      # odd
      l, r = i, i
      while l >= 0 and r < len(s) and s[l] == s[r]:
        if r-l+1 > maxLen:
          maxLen = r-l+1
          maxSub = s[l:r+1]
        l -= 1
        r += 1
        
      # even
      l, r = i, i+1
      while l >= 0 and r < len(s) and s[l] == s[r]:
        if r-l+1 > maxLen:
          maxLen = r-l+1
          maxSub = s[l:r+1]
        l -= 1
        r += 1
    return maxSub