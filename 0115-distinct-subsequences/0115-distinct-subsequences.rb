# @param {String} s
# @param {String} t
# @return {Integer}
def num_distinct(s, t)
  t_chars = Set.new
  t.each_char{ |c| t_chars << c }
  new_s = ""
  s.each_char{ |c| new_s += c if t_chars.include?(c) }
  return 0 if new_s == ""
  l, r = 0, new_s.length
  l += 1 while l < new_s.length && new_s[l] != t[0]
  r -= 1 while r > 0 && new_s[r-1] != t[-1]
  s = new_s[l...r]
  return 0 if s == ""
  return 1 if s == t
    
  tally = Hash.new(0)
  s.each_char{ |c| tally[c] += 1 }
  t.each_char do |c|
    return 0 if !tally.has_key?(c)
    if tally[c] == 1
      tally.delete(c)
    else
      tally[c] -= 1
    end
  end
    
  dp = Array.new(s.length){ [0]*t.length }
  (0...s.length).each{ |l| dp[l][0] += 1 if s[l] == t[0] }
  (0...t.length-1).each do |r|
    (r...s.length).each do |l|
      if dp[l][r] > 0
        (l+1...s.length).each{ |i| dp[i][r+1] += dp[l][r] if s[i] == t[r+1] }
      end
    end
  end
  dp.map{ |row| row[-1] }.sum
end