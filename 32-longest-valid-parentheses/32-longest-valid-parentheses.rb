# @param {String} s
# @return {Integer}

def parse(s)
    ans, stack_height, valid_len = 0, 0, 0
    s.each_char do |paren|
        if paren == '('
            stack_height += 1
            valid_len += 1
        else
            stack_height -= 1
            if stack_height < 0
                valid_len = 0
                stack_height = 0
            else
                valid_len += 1
            end
            if stack_height == 0
                ans = [ans, valid_len].max
            end
        end
    end
    return ans
end

def longest_valid_parentheses(s)
    # trim leading ')' and trailing '('
    l, r = 0, s.length
    while s[l] == ')'
        l += 1
    end
    while s[r-1] == '('
        r -= 1
    end
    s = s[l...r]
    
    mirrored = ''
    s.each_char do |paren|
        if paren == ')'
            mirrored = '(' + mirrored
        else
            mirrored = ')' + mirrored
        end
    end
    
    return [parse(s), parse(mirrored)].max
end