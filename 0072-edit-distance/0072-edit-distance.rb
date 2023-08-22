# @param {String} word1
# @param {String} word2
# @return {Integer}
def min_distance(word1, word2)
  dp = Array.new(word1.length+1){ [0]*(word2.length+1) }
  (0...word1.length).reverse_each{ |r| dp[r][-1] = dp[r+1][-1]+1 }
  (0...word2.length).reverse_each{ |c| dp[-1][c] = dp[-1][c+1]+1 }
  (0...word1.length).reverse_each do |r|
    (0...word2.length).reverse_each do |c|
      if word1[r] != word2[c]
        dp[r][c] = [dp[r+1][c]+1, dp[r+1][c+1]+1, dp[r][c+1]+1].min
      else
        dp[r][c] = [dp[r+1][c]+1, dp[r+1][c+1], dp[r][c+1]+1].min
      end
    end
  end
  dp[0][0]
end