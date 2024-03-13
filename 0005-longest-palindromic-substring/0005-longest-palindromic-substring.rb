# @param {String} s
# @return {String}
def longest_palindrome(s)
  return s if s.length < 2
  s = "$#{s}@".split('').join('-')
  p_ext = [0]*s.length
  ctr = r = mir = 0
  (0...s.length-1).each do |i|
    mir = 2*ctr-i
    p_ext[i] = [r-i, p_ext[mir]].min if i < r
    p_ext[i] += 1 while s[i-1-p_ext[i]] == s[i+1+p_ext[i]]
    if p_ext[i]+1 > r
      ctr = i
      r = p_ext[i]+i
    end
  end
  max_ext = p_ext.max
  ctr = p_ext.index(max_ext)
  s[ctr-max_ext..ctr+max_ext].gsub('-', '')
end