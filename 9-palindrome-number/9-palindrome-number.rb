# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    return false if x < 0
    return true if x < 10
    s = x.to_s
    l, r = 0, s.length - 1
    while l < r
        if s[l] != s[r]
            return false
        else
            l += 1
            r -= 1
        end
    end
    return true
end