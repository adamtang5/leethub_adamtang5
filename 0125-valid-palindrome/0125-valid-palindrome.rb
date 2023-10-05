# @param {String} s
# @return {Boolean}
def is_palindrome(s)
  s = s.downcase.gsub(/[^a-z0-9]/, '')
  l, r = 0, s.length-1
  while l < r
    if s[l] != s[r]
      return false
    else
      l += 1
      r -= 1
    end
  end
  true
end