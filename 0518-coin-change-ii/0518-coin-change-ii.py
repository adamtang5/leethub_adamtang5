class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        coins.sort()
        dp = [[0] * (amount+1) for _ in range(len(coins))]

        for row in dp:
            row[amount] = 1
        
        for row in range(len(coins)-1, -1, -1):
            val = coins[row]
            for col in range(amount-1, -1, -1):
                lookDown = dp[row+1][col] if row+1 < len(coins) else 0
                lookRight = dp[row][col+val] if col+val <= amount else 0
                dp[row][col] = lookDown + lookRight
        return dp[0][0]