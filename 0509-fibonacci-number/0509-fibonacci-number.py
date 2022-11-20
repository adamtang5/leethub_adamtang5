class Solution:
    def fib(self, n: int) -> int:
        if n < 2:
            return n
        mem = [0, 1]
        while n > 2:
            mem.append(mem[0]+mem[1])
            del mem[0]
            n -= 1
        return mem[0]+mem[1]