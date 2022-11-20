class Solution:
    def fib(self, n: int) -> int:
        if n < 2:
            return n
        mem = [0, 1]
        while n > 2:
            mem.append(mem[-1]+mem.pop(0))
            n -= 1
        return sum(mem)