# @param {Integer[]} ratings
# @return {Integer}
def candy(ratings)
  ans = [1]*ratings.length
  
  (0...ratings.length-1).each do |i|
    ans[i+1] = ans[i]+1 if ratings[i+1] > ratings[i]
  end
  
  (1...ratings.length).reverse_each do |i|
    ans[i-1] = [ans[i-1], ans[i]+1].max if ratings[i-1] > ratings[i]
  end
  
  ans.sum
end