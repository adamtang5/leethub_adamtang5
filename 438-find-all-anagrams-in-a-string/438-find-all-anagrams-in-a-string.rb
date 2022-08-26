# @param {String} s
# @param {String} p
# @return {Integer[]}

def find_anagrams(s, p)
    return [] if p.length > s.length
    ans = []
    pCount = Array.new(26, 0)
    p.each_char { |ch| pCount[ch.ord - 'a'.ord] += 1 }
    # p pCount
    sCount = Array.new(26, 0)
    l, r = 0, p.length
    (l...r).each do |i|
        sCount[s[i].ord - 'a'.ord] += 1
    end
    # p sCount
    while r <= s.length
        if pCount == sCount
            ans << l
        end
        sCount[s[l].ord - 'a'.ord] -= 1
        if r < s.length
            sCount[s[r].ord - 'a'.ord] += 1
        end
        l += 1
        r += 1
    end
    return ans
end