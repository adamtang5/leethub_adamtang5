class Solution:
  def numSquares(self, n: int) -> int:
    squares, dp, sq = list(), dict(), -1
    for b in range(1, math.floor(math.sqrt(n))+1):
      sq = b*b
      squares.insert(0, sq)
      dp[sq] = 1
    
    def populate(num: int) -> None:
      if num in dp: return
      val = num
      for sq in squares:
        if sq <= num:
          if num-sq in dp:
            val = min(val, dp[sq]+dp[num-sq])
            dp[num] = val
    
    for b in range(1, n+1):
      populate(b)
      
    return dp[n]