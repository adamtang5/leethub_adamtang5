import math
import collections

class Solution:
    def countPrimeSetBits(self, left: int, right: int) -> int:
        count = 0
        primes = set()
        def isPrime(n):
            if n < 2:
                return False
            for x in range(2, int(math.sqrt(n))+1):
                if n % x == 0:
                    return False
            primes.add(n)
            return True
        
        for i in range(left, right+1):
            bits = len(format(i, 'b').replace('0', ''))
            if bits in primes or isPrime(bits):
                count += 1
        return count