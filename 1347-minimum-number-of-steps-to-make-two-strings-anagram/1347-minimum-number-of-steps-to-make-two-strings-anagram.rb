# @param {String} s
# @param {String} t
# @return {Integer}
def min_steps(s, t)
    counts = Hash.new(0)
    (0...s.length).each do |i|
        counts[s[i]] += 1
        counts[t[i]] -= 1
    end
    return counts.values.sum { |n| n.abs } / 2
end