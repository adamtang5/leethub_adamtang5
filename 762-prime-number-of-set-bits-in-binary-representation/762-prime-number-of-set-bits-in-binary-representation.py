import math

class Solution:
    def countPrimeSetBits(self, left: int, right: int) -> int:
        count = 0
        def isPrime(n):
            if n < 2:
                return False
            for x in range(2, int(math.sqrt(n))+1):
                if n % x == 0:
                    return False
            return True
        
        for i in range(left, right+1):
            bits = len(format(i, 'b').replace('0', ''))
            if isPrime(bits):
                count += 1
        return count