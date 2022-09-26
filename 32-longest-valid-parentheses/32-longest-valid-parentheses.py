class Solution:
    def longestValidParentheses(self, s: str) -> int:
        if len(s) < 2:
            return 0
        dp = [0] * len(s)
        for i in range(len(s)):
            if s[i] == ')' and i-1 >= 0 and s[i-1] == '(':
                dp[i] = dp[i-2] + 2
            elif s[i] == ')' and i-1 - dp[i-1] >= 0 and s[i-1] == ')' and s[i-1 - dp[i-1]] == '(':
                dp[i] = dp[i-1] + dp[i-2 - dp[i-1]] + 2
        return max(dp)