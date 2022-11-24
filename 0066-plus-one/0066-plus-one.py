class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        if digits[-1] < 9:
            digits[-1] += 1
            return digits
        else:
            digits = digits[::-1]
            i, carry = 0, 1
            while i < len(digits):
                if digits[i]+carry > 9:
                    digits[i] = 0
                    i += 1
                else:
                    digits[i] += carry
                    carry = 0
                    break
            if carry == 1:
                digits.append(1)
            return digits[::-1]