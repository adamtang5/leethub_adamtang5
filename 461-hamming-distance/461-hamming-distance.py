class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        return len(format(x^y, 'b').replace('0', ''))