# @param {String} s
# @return {Integer}

def longest_valid_parentheses(s)
    return 0 if s.length < 2
    dp = Array.new(s.length, 0)
    (0...s.length).each do |i|
        if s[i] == ')' && i-1 >= 0 && s[i-1] == '('
            dp[i] = dp[i-2] + 2
        elsif s[i] == ')' && i-1 - dp[i-1] >= 0 && s[i-1] == ')' && s[i-1 - dp[i-1]] == '('
            dp[i] = dp[i-1] + dp[i-2 - dp[i-1]] + 2
        end
    end
    dp.max
end