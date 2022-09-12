# @param {String} s
# @return {Integer}
def my_atoi(s)
    max_value = 2 ** 31 - 1
    min_value = -2 ** 31
    
    i, ans, sign = 0, 0, 1
    
    # whitespace
    while i < s.length && s[i] == ' '
        i += 1
    end
    
    # +/-
    if i < s.length && s[i] == '-'
        sign = -1
        i += 1
    elsif i < s.length && s[i] == '+'
        i += 1
    end
    
    # check digits
    digits = '0123456789'
    while i < s.length && digits.include?(s[i])
        ans = ans * 10 + s[i].to_i
        i += 1
    end
    
    ans *= sign
    
    return ans < 0 ? [ans, min_value].max : [ans, max_value].min
end