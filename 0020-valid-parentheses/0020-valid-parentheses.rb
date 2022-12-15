# @param {String} s
# @return {Boolean}
def is_valid(s)
    stack = []
    open = {
        ')' => '(',
        ']' => '[',
        '}' => '{',
    }
    
    s.each_char do |paren|
        if '([{'.include?(paren)
            stack << paren
        elsif stack.pop != open[paren]
            return false 
        end
    end
    
    return stack.length == 0
end