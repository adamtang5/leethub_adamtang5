class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        rev1 = [int(d) for d in num1[::-1]]
        rev2 = [int(d) for d in num2[::-1]]

        if len(rev1) < len(rev2):
            rev1, rev2 = rev2, rev1
        
        digits = [rev1[i] + (rev2[i] if i < len(rev2) else 0) for i in range(len(rev1))]
        i, carry = 0, 0
        while i < len(digits):
            digits[i] += carry
            carry = digits[i] // 10
            digits[i] %= 10
            i += 1
        if carry:
            digits.append(carry)
            
        ans = ''
        for d in digits[::-1]:
            ans += str(d)
        return ans