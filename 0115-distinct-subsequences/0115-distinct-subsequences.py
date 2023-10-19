from collections import defaultdict

class Solution:
  def numDistinct(self, s: str, t: str) -> int:
    tChars = set()
    for c in t:
      tChars.add(c)
    newS = ""
    for c in s:
      if c in tChars:
        newS += c
    if newS == "": return 0
    l, r = 0, len(newS)
    while l < len(newS) and newS[l] != t[0]:
      l += 1
    while r > 0 and newS[r-1] != t[-1]:
      r -= 1
    s = newS[l:r]
    if s == "": return 0
    if s == t: return 1
    
    tally = defaultdict(int)
    for c in s:
      tally[c] += 1
    for c in t:
      if c not in tally: return 0
      if tally[c] == 1:
        tally.pop(c)
      else:
        tally[c] -= 1
        
    dp = [[0] * len(t) for _ in range(len(s))]
    for l in range(len(s)):
      if s[l] == t[0]:
        dp[l][0] += 1
    for r in range(len(t)-1):
      for l in range(r, len(s)):
        if dp[l][r]:
          for i in range(l+1, len(s)):
            if s[i] == t[r+1]:
              dp[i][r+1] += dp[l][r]
    return sum([row[-1] for row in dp])