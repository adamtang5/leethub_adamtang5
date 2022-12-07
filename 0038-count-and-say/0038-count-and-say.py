class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'
        
        def convert(s):
            ans, currCh, currLen, i = '', '', 0, 0
            while i < len(s):
                if s[i] == currCh:
                    currLen += 1
                else:
                    if currLen:
                        ans += str(currLen)
                        ans += currCh
                    currCh = s[i]
                    currLen = 1
                i += 1
            if currLen:
                ans += str(currLen)
                ans += currCh
            return ans
        
        return convert(self.countAndSay(n-1))