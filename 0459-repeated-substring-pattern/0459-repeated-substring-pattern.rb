# @param {String} s
# @return {Boolean}
def repeated_substring_pattern(s)
    return false if s.length < 2
    prefixes = Hash.new
    (1..s.length/2).each do |n|
        if s.length % n == 0
            prefixes[n] = s[0...n]
        end
    end
    factors = prefixes.keys
    factors.sort!.reverse!
    p factors
    
    factors.each do |factor|
        i = factor
        while i < s.length
            if s[i...i+factor] == prefixes[factor]
                i += factor
            else
                break
            end
        end
        return true if i == s.length
    end
    return false
end