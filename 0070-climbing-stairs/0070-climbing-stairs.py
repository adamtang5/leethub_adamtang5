class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        mem = [1, 2]
        for _ in range(n-2):
            mem.append(mem[-1]+mem.pop(0))
        return mem[-1]