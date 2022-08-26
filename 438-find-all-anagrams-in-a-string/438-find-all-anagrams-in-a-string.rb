# @param {String} s
# @param {String} p
# @return {Integer[]}

def find_anagrams(s, p)
    return [] if p.length > s.length
    pCount, sCount = Hash.new(0), Hash.new(0)
    (0...p.length).each do |i|
        pCount[p[i]] += 1
        sCount[s[i]] += 1
    end
    ans = pCount == sCount ? [0] : []
    l = 0
    (p.length...s.length).each do |r|
        sCount[s[r]] += 1
        sCount[s[l]] -= 1
        if sCount[s[l]] == 0
            sCount.delete(s[l])
        end
        l += 1
        if pCount == sCount
            ans << l
        end
    end
    
    return ans
end