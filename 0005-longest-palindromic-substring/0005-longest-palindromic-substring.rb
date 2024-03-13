# @param {String} s
# @return {String}
def longest_palindrome(s)
  return s if s.length < 2
  max_len, max_sub = 1, s[0]
  (0...s.length).each do |i|
    # odd
    l = r = i
    while l >= 0 && r < s.length && s[l] == s[r]
      if r-l+1 > max_len
        max_len = r-l+1
        max_sub = s[l..r]
      end
      l -= 1
      r += 1
    end

    # even
    l, r = i, i+1
    while l >= 0 && r < s.length && s[l] == s[r]
      if r-l+1 > max_len
        max_len = r-l+1
        max_sub = s[l..r]
      end
      l -= 1
      r += 1
    end
  end
  max_sub
end