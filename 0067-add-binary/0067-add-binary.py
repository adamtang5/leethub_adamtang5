class Solution:
    def addBinary(self, a: str, b: str) -> str:
        a = a[::-1]
        b = b[::-1]
        ans = []
        
        carry, l, r = 0, 0, 0
        ans = ''
        
        for i in range(max(len(a), len(b))):
            l = int(a[i]) if i in range(len(a)) else 0
            r = int(b[i]) if i in range(len(b)) else 0
            ans += str(l ^ r ^ carry)
            carry = l&r or l&carry or r&carry
        if carry:
            ans += str(carry)
        return ans[::-1]