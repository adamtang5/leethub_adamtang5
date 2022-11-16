class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
        l, r = 0, x
        pivot = (l+r) // 2
        while l < r:
            if pivot * pivot <= x and (pivot+1) * (pivot+1) > x:
                return pivot
            elif pivot * pivot > x:
                r = pivot
            else:
                l = pivot
            pivot = (l+r) // 2
        