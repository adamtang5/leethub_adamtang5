# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    ans, minLength = '', 1/0.0
    strs.each do |str|
        if str.length < minLength
            minLength = str.length
        end
    end
    
    (0...minLength).each do |i| 
        ch = strs[0][i]
        if strs.all? { |s| s[i] == ch }
            ans += ch
        else
            break
        end
    end
    
    ans
end