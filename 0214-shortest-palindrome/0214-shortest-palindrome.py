class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if len(s) < 2:
            return s
        revStr = s[::-1]
        pre, post = s, revStr
        while pre != post:
            pre = pre[0:-1]
            post = post[1:]
        return revStr[0:-len(pre)]+s