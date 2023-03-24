# @param {String} s1
# @param {String} s2
# @param {String} s3
# @return {Boolean}
def is_interleave(s1, s2, s3)
  dp = Array.new(s1.length+1) {[0] * (s2.length+1)}
  queue = [[0, 0]]
  while queue.length > 0
    x, y = queue.pop
    if x+y == s3.length
      break
    end
    
    if x < s1.length && s3[x+y] == s1[x] && dp[x+1][y] == 0
      dp[x+1][y] = x+y+1
      queue << [x+1, y]
    end
    if y < s2.length && s3[x+y] == s2[y] && dp[x][y+1] == 0
      dp[x][y+1] = x+y+1
      queue << [x, y+1]
    end
  end
  return dp[s1.length][s2.length] == s3.length
end