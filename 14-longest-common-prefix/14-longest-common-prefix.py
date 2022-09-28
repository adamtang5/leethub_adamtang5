class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans = ''
        minLength = min([len(s) for s in strs])
        
        for i in range(minLength):
            ch = strs[0][i]
            if all([s[i] == ch for s in strs]):
                ans += ch
            else:
                break
                
        return ans