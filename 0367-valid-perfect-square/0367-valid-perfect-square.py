class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        l, r = 1, num
        pivot = (l+r) // 2
        while l <= r:
            if pivot*pivot == num:
                return True
            elif pivot*pivot < num:
                l = pivot+1
            else:
                r = pivot-1
            pivot = (l+r) // 2
        return False