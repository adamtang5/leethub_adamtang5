class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        # 2147483647
        d, dv, output = abs(dividend), abs(divisor), 0
        while d >= dv:
            temp, mul = dv, 1
            while d >= temp:
                d -= temp
                output += mul
                mul += mul
                temp += temp
        if dividend < 0 and divisor >= 0 or divisor < 0 and dividend >= 0:
            output = -output
        return min(2147483647, max(-2147483648, output))