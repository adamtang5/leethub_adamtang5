class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def invert(combo, n):
            ans = []
            for i in range(1, n+1):
                if i not in combo:
                    ans.append(i)
            return ans
        
        if k == 1:
            return [[i+1] for i in range(n)]
        elif k == n:
            return [[i+1 for i in range(n)]]
        elif k <= n-k:
            ans = []
            for combo in self.combine(n, k-1):
                for s in range(combo[-1]+1, n+1):
                    ans.append(combo + [s])
            return ans
        else:
            return [invert(combo, n) for combo in self.combine(n, n-k)]