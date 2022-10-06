class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n > 0:
            if n % 2:
                count += 1
            n = (n - (n%2)) / 2
        return count