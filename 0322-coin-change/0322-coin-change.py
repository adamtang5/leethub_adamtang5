class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        to_collect = 1 << amount
        n = 0
        while not to_collect & 1:
            collected = 0
            for coin in coins:
                collected |= to_collect >> coin
            if not collected:
                return -1
            to_collect = collected
            n += 1
        return n