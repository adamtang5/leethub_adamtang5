class Solution:
    def fib(self, n: int) -> int:
        if n < 2:
            return n
        mem = [0, 1]
        for _ in range(n-2):
            mem.append(mem[-1]+mem.pop(0))
        return sum(mem)