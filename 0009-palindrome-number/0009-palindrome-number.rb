# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  s = x.to_s
  return s == s.reverse
end