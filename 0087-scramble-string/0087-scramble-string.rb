# @param {String} s1
# @param {String} s2
# @return {Boolean}
def dfs(s1, s2, dp)
  key = [s1, s2]
  return dp[key] if dp.has_key?(key)
  if s1.length == 1
    ans = s1 == s2
    dp[key] = ans
    return ans
  end
  tally1 = [0]*26
  tally2 = [0]*26
  (0...s1.length).each do |i|
    tally1[s1[i].ord-'a'.ord] += 1
    tally2[s2[i].ord-'a'.ord] += 1
  end
  if tally1 != tally2
    dp[key] = false
    return false
  end
  
  ans = false
  (1...s1.length).each do |split|
    ans ||= dfs(s1[0...split], s2[0...split], dp) && \
      dfs(s1[split..-1], s2[split..-1], dp)
    ans ||= dfs(s1[0...split], s2[-split..-1], dp) && \
      dfs(s1[split..-1], s2[0...-split], dp)
  end
  dp[key] = ans
  ans
end

def is_scramble(s1, s2)
  dp = Hash.new
  dfs(s1, s2, dp)
end