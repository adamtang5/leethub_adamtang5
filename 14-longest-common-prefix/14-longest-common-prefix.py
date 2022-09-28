class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans, minLength = '', float("Inf")
        for s in strs:
            if len(s) < minLength:
                minLength = len(s)
        
        for i in range(minLength):
            ch = strs[0][i]
            if all([s[i] == ch for s in strs]):
                ans += ch
            else:
                break
        return ans
