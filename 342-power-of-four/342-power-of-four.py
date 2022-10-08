import math

class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
            return False
        power = math.floor(math.log(n) / math.log(4))
        return n == 4 ** power