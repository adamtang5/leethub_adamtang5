# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  ans = l = 0
  r = 1
  while r < prices.length
    ans = [ans, prices[r]-prices[l]].max
    l = r if prices[r] < prices[l]
    r += 1
  end
  ans
end