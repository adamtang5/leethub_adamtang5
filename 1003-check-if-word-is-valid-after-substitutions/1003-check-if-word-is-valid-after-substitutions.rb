# @param {String} s
# @return {Boolean}
def is_valid(s)
    # base case
    return true if s == ''
    return false if s.length % 3 != 0 || !s.include?('abc') || s[0] != 'a' || s[-1] != 'c'
    
    # recursive case
    idx = s.index('abc')
    return is_valid(s[0...idx] + s[idx+3..-1])
end