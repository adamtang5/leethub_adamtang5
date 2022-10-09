# @param {Integer} n
# @return {Integer[]}
def count_bits(n)
    return [0] if n == 0
    ans = Array.new(n+1, 0)
    offset = 1
    (1..n).each do |i|
        if i == offset * 2
            offset = i
        end
        ans[i] = 1 + ans[i - offset]
    end
    return ans
end