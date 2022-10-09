class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        return len([d for d in format(x^y, 'b') if d == '1'])