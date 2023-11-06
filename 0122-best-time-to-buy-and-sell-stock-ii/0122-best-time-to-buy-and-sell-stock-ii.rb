# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  ans = 0
  (1...prices.length).each do |i|
    ans += prices[i]-prices[i-1] if prices[i] > prices[i-1]
  end
  ans
end