# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    ans = ''
    minLength = strs.map{ |s| s.length }.min
    
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