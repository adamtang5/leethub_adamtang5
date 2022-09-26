# @param {String} s
# @return {Boolean}
def is_valid(s)
    # edge cases
    return true if s == ''
    return false if s.length % 3 != 0 || !s.include?('abc') || s[0] != 'a' || s[-1] != 'c'
    
    stack = []
    (0...s.length).each do |i|
        if s[i] != 'c'
            stack << s[i]
        elsif stack.length < 2
            return false
        elsif stack[-1] == 'b' && stack[-2] == 'a'
            stack = stack[0...-2]
        else
            return false
        end
    end
    return stack.length == 0
end