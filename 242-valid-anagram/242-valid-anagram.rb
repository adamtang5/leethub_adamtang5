# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    return false if s.length != t.length
    counts = Hash.new(0)
    (0...s.length).each do |i|
        counts[s[i]] += 1
        counts[t[i]] -= 1
    end
    return counts.values.all? { |n| n == 0 }
end