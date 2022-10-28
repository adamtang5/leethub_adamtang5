class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        remain = 1 << amount
        n = 0
        while not remain & 1:
            shiftSum = 0
            for coin in coins:
                shiftSum |= remain >> coin
            if not shiftSum:
                return -1
            remain = shiftSum
            n += 1
        return n