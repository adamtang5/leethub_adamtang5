class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if len(s) < 2:
            return s
        rev_s = s[::-1]
        pre, post = s, rev_s
        while pre != post:
            pre = pre[0:-1]
            post = post[1:]
        return rev_s[0:-len(pre)] + s