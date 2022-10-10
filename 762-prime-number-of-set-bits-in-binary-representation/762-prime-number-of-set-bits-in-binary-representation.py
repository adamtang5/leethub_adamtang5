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
        
        bits = [0] * (right+1)
        offset = 1
        for n in range(1, right+1):
            if n == offset*2:
                offset = n
            bits[n] = 1 + bits[n - offset]
            
        for i in range(left, right+1):
            if bits[i] in primes or isPrime(bits[i]):
                count += 1
        return count