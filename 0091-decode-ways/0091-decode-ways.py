class Solution:
    def numDecodings(self, s: str) -> int:
        def valid(seg):
            if len(seg) == 1:
                return seg != '0'
            if len(seg) == 2:
                if seg[0] not in '12':
                    return False
                if seg[0] == '1':
                    return True
                if seg[0] == '2':
                    return seg[1] <= '6'
            return True
        
        if len(s) == 1:
            return 1 if valid(s) else 0
        
        def partition(str):
            ans = []
            curr, lBit, rBit, double, l = str[0], str[0], str[1], str[:2], 0
            while l+1 < len(str):
                if not valid(double):
                    ans.append(curr)
                    curr = rBit
                elif not valid(rBit):
                    curr = curr[:-1]
                    if curr:
                        ans.append(curr)
                    curr = double
                else:
                    curr += rBit
                l += 1
                lBit = str[l]
                if l+1 < len(str):
                    rBit = str[l+1]
                    double = str[l:l+2]
            ans.append(curr)
            return ans
        
        def fib(n):
            if n < 2:
                return 1
            dp = [1] * 2
            while n > 1:
                dp[0], dp[1] = dp[1], dp[0]+dp[1]
                n -= 1
            return dp[1]
        
        segments = partition(s)
        if any([not valid(segment) for segment in segments]):
            return 0
        prod = 1
        for segment in segments:
            if '0' not in segment:
                prod *= fib(len(segment))
                
        return prod
                
            