import re

class Solution:
  def isMatch(self, s: str, p: str) -> bool:
    p = re.sub(r"\*+", '*', p)
    
    def charMatch(ch1: str, ch2: str) -> bool:
      return ch2 == '?' or ch2 == ch1
    
    def dfs(sIdx: int, pIdx: int, dp: dict) -> bool:
      key = (sIdx, pIdx)
      
      if sIdx < len(s) and pIdx == len(p):
        dp[key] = False
        return dp[key]
      if sIdx == len(s) and pIdx == len(p):
        dp[key] = True
        return dp[key]
      if sIdx == len(s) and pIdx < len(p):
        dp[key] = True
        for i in range(pIdx, len(p)):
          if p[i] != '*':
            dp[key] = False
            break
        return dp[key]
      
      if p[pIdx] != '*':
        if not charMatch(s[sIdx], p[pIdx]):
          dp[key] = False
          return dp[key]
        else:
          dp[key] = dfs(sIdx+1, pIdx+1, dp)
          return dp[key]
      else:
        if key in dp:
          return dp[key]
        ans = False
        for i in range(sIdx, len(s)+1):
          ans = ans or dfs(i, pIdx+1, dp)
        dp[key] = ans
        return dp[key]
  
    return dfs(0, 0, dict())