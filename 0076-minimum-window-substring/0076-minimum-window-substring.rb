# @param {String} s
# @param {String} t
# @return {String}
def min_window(s, t)
  tally, window = Hash.new(0), Hash.new(0)
  t.each_char{ |ch| tally[ch] += 1 }
  have, need, lb, ub, l = 0, tally.length, -1, s.length+1, 0
  
  (0...s.length).each do |r|
    if tally.has_key?(s[r])
      window[s[r]] += 1
      have += 1 if window[s[r]] == tally[s[r]]
      
      while have == need
        lb, ub = l, r+1 if r+1-l < ub-lb
        if tally.has_key?(s[l])
          window[s[l]] -= 1
          have -= 1 if window[s[l]] < tally[s[l]]
        end
        l += 1
      end
    end
  end
  lb < 0 ? "" : s[lb...ub]
end