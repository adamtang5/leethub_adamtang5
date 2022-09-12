# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    return false if x < 0
    return true if x < 10
    digits = Math.log10(x).truncate(0)
    while digits > 0
        first_digit = (x / (10 ** digits)).truncate(0)
        last_digit = x % 10
        if first_digit != last_digit
            return false
        else
            x %= 10 ** digits
            x /= 10
            digits -= 2
        end
    end
    return true
end