class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        dp = {}
        dp[(0, 0)] = ['']
        dp[(0, 1)] = [')']
        
        def valid(o, c):
            return o <= c and o >= 0 and c >= 0
        
        def dfs(o, c):
            if (o, c) in dp:
                return dp[(o, c)]
            else:
                ans = []
                if valid(o-1, c):
                    ans += ['(' + seq for seq in dfs(o-1, c)]
                if valid(o, c-1):
                    ans += [')' + seq for seq in dfs(o, c-1)]
                dp[(o, c)] = ans
                return ans
        
        return dfs(n, n)
        