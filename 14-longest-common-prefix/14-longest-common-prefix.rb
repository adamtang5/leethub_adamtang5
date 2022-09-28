# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    ans = ''
    minLength = strs.map{ |s| s.length }.min
    # puts minLength
    
    (0...minLength).to_a.each do |i| 
        ch = strs[0][i]
        if strs.all? { |s| s[i] == ch }
            ans += ch
        else
            break
        end
    end
    
    ans
end