class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        bits = format(n, 'b')
        for i in range(len(bits)-1):
            if bits[i] == bits[i+1]:
                return False
        return True