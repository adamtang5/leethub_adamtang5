class Solution:
  def romanToInt(self, s: str) -> int:
    lookup = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    }

    ans = i = 0
    while i < len(s):
      if i+1 == len(s) or lookup[s[i]] >= lookup[s[i+1]]:
        ans += lookup[s[i]]
        i += 1
      else:
        ans += lookup[s[i+1]] - lookup[s[i]]
        i += 2

    return ans