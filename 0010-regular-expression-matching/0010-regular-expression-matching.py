import json

class Solution:
  def isMatch(self, s: str, p: str) -> bool:
    parsed = []
    i = 0
    while i < len(p):
      if i+1 < len(p) and p[i+1] == '*':
        parsed.append(p[i]+p[i+1])
        i += 2
      else:
        parsed.append(p[i])
        i += 1

    def charMatch(ch1, ch2):
      return ch2 == '.' or ch2 == ch1

    def dfs(s, parsed, dp):
      key = json.dumps([s, parsed])
      if len(s) > 0 and len(parsed) == 0:
        dp[key] = False
        return dp[key]
      if len(s) == 0 and len(parsed) == 0:
        dp[key] = True
        return dp[key]
      if len(s) == 0 and len(parsed) > 0:
        dp[key] = all([len(el) == 2 for el in parsed])
        return dp[key]

      first = parsed.pop(0)
      if len(first) == 1:
        dp[key] = charMatch(s[0], first) and dfs(s[1:], parsed, dp)
        return dp[key]
      else:
        if not charMatch(s[0], first[0]):
          dp[key] = dfs(s, parsed, dp)
          return dp[key]
        else:
          if key in dp:
            return dp[key]
          else:
            length = 1
            while length < len(s) and (first[0] == '.' or s[length] == s[0]):
              length += 1
            ans = False
            for i in range(length+1):
              copy = parsed.copy()
              ans = ans or dfs(s[i:], copy, dp)
            dp[key] = ans
            return ans
    
    return dfs(s, parsed, {})