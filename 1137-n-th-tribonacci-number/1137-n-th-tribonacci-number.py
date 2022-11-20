class Solution:
    def tribonacci(self, n: int) -> int:
        mem = [0, 1, 1]
        if n < 3:
            return mem[n]
        for _ in range(n-2):
            mem.append(mem[1]+mem[2]+mem.pop(0))
        return mem[-1]
            