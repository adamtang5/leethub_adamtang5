class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates = [n for n in candidates if n <= target]
        if candidates == []:
            return []
        candidates.sort(reverse=True)
        ans = []
        
        def dfs(c, t, suffix=[]):
            if t == 0:
                ans.insert(0, suffix)
            elif t > 0 and len(c):
                ub = t // c[0]
                for i in range(ub, -1, -1):
                    dfs(c[1:], t-i*c[0], [c[0]] * i + suffix)
        
        dfs(candidates, target)
        return ans