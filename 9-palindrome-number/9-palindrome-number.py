class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if x < 10:
            return True
        digits = int(math.log10(x))
        while digits > 0:
            firstDigit = int(x / pow(10, digits))
            lastDigit = x % 10
            if firstDigit != lastDigit:
                return False
            else:
                x %= pow(10, digits)
                x //= 10
                digits -= 2
        return True