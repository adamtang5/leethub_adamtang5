import math
import collections

class Solution:
    def countPrimeSetBits(self, left: int, right: int) -> int:
        primes = {2, 3, 5, 7, 11, 13, 17, 19}
        return sum(1 for n in range(left, right+1) if n.bit_count() in primes)