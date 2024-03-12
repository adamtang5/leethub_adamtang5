# @param {Integer} n
# @return {Integer}
def num_squares(n)
  squares, b = [], 1
  while b*b <= n
    squares << b*b
    b += 1
  end
  dp = [1/0.0]*(n+1)
  dp[0] = 0
  (1..n).each do |i|
    squares.each do |sq|
      dp[i] = [dp[i], dp[i-sq]+1].min if i >= sq
    end
  end
  dp[n]
end