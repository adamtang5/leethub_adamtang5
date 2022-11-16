class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1
        if n > 0:
            while n > 0:
                if n % 2:
                    return x * self.myPow(x, n-1)
                else:
                    return self.myPow(x*x, n//2)
        else:
            while n < 0:
                if n % 2:
                    return self.myPow(x, n+1) / x
                else:
                    return self.myPow(x*x, n//2)