# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  ans, l, r = 0, 0, 1
  while r < prices.length
    if prices[r] >= prices[l]
      r += 1 while r < prices.length-1 && prices[r+1] >= prices[r]
      ans += prices[r]-prices[l]
    end
    l = r
    r += 1
  end
  ans
end