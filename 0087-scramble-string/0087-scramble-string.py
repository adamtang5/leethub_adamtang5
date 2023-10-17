class Solution:
  def isScramble(self, s1: str, s2: str) -> bool:
    starter = [0]*26
    aCode = ord('a')
    dp = dict()
    
    def dfs(s1: str, s2: str) -> bool:
      key = (s1, s2)
      if key in dp: return dp[key]
      if len(s1) == 1:
        ans = s1 == s2
        dp[key] = ans
        return ans
      tally1 = starter.copy()
      tally2 = starter.copy()
      for i in range(len(s1)):
        tally1[ord(s1[i])-aCode] += 1
        tally2[ord(s2[i])-aCode] += 1
      if tally1 != tally2:
        dp[key] = False
        return False
      
      ans = False
      for split in range(1, len(s1)):
        ans = ans or dfs(s1[:split], s2[:split]) and \
          dfs(s1[split:], s2[split:])
        ans = ans or dfs(s1[:split], s2[-split:]) and \
          dfs(s1[split:], s2[0:-split])
      dp[key] = ans
      return ans
    
    return dfs(s1, s2)