# @param {String} s
# @param {String} t
# @return {Integer}
def min_steps(s, t)
    counts = Hash.new(0)
    ans = 0
    s.each_char { |ch| counts[ch] += 1 }
    t.each_char do |ch|
        if counts.key? ch and counts[ch] > 0
            counts[ch] -= 1
        else
            ans += 1
        end
    end
    return ans
end