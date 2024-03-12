class Solution:
  def numSquares(self, n: int) -> int:
    squares, b = list(), 1
    while b*b <= n:
      squares.append(b*b)
      b += 1
    dp = [float('inf')]*(n+1)
    dp[0] = 0
    for i in range(1, n+1):
      for sq in squares:
        if i >= sq:
          dp[i] = min(dp[i], dp[i-sq]+1)
    return dp[n]