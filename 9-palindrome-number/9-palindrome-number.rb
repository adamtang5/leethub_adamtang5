# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    return false if x < 0
    return true if x < 10
    s = x.to_s
    rev_s = s.reverse
    return s == rev_s
end