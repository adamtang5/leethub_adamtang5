class Solution:
  def longestCommonPrefix(self, strs: List[str]) -> str:
    ans = ''
    minLen = min([len(s) for s in strs])
    
    for i in range(minLen):
      if all([s[i] == strs[0][i] for s in strs]):
        ans += strs[0][i]
      else:
        break
    return ans