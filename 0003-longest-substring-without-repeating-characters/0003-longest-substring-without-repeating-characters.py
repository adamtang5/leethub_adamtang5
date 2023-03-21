class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    if s == '':
      return 0
    currSub, maxCount = '', 0
    for i in range(len(s)):
      if s[i] in currSub:
        currSub = currSub[currSub.index(s[i])+1:] + s[i]
      else:
        currSub += s[i]
      if len(currSub) > maxCount:
        maxCount = len(currSub)
    return maxCount