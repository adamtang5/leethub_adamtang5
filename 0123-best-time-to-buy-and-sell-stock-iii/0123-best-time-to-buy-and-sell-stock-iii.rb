# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  ans = 0
  fw, bw = [0]*prices.length, [0]*prices.length
  l_min, r_max = prices[0], prices[-1]
  (1...prices.length).each do |i|
    fw[i] = [fw[i-1], prices[i]-l_min].max
    l_min = [l_min, prices[i]].min
  end
  (0...prices.length-1).reverse_each do |i|
    bw[i] = [bw[i+1], r_max-prices[i]].max
    r_max = [r_max, prices[i]].max
  end
  (0...prices.length).each{ |i| ans = [ans, fw[i]+bw[i]].max }
  ans
end