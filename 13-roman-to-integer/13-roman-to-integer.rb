# @param {String} s
# @return {Integer}
def roman_to_int(s)
    lookup = {
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000,
    }
    
    ans, i = 0, 0
    while i < s.length
        if i+1 == s.length || lookup[s[i]] >= lookup[s[i+1]]
            ans += lookup[s[i]]
            i += 1
        else
            ans += lookup[s[i+1]] - lookup[s[i]]
            i += 2
        end
    end
    return ans
end